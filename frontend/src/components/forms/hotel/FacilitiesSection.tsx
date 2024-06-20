import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { hotelFacilities } from "../../../config/hotel-options-config";

export default function FacilitiesSection() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<HotelFormData>();

  const facilitiesWatch = watch("facilities");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">
        Facilities
        <span className="text-gray-500 text-sm ml-2">
          * you can choose more than one facility
        </span>
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {hotelFacilities.map((facility, i) => (
          <label
            key={i}
            className={`cursor-pointer border flex justify-center items-center text-md rounded-full py-3 font-semibold  ${
              facilitiesWatch !== undefined &&
              Array.isArray(facilitiesWatch) &&
              facilitiesWatch.includes(facility)
                ? "bg-blue-600 text-white"
                : "border-blue-400"
            }`}
          >
            <input
              type="checkbox"
              className="hidden"
              value={facility}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
            />
            {facility}
          </label>
        ))}
      </div>

      {errors.facilities && (
        <span className="text-red-500 text-sm font-bold">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
}
