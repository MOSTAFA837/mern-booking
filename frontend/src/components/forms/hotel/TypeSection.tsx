import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

export default function TypeSection() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const typeWatch = watch("type");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">
        Type
        <span className="text-gray-500 text-sm ml-2">*choose one type</span>
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {hotelTypes.map((type, i) => (
          <label
            key={i}
            className={`cursor-pointer border flex justify-center items-center text-md rounded-full py-3 font-semibold ${
              typeWatch === type ? "bg-blue-600 text-white" : "border-blue-400"
            }`}
          >
            <input
              type="radio"
              value={type}
              {...register("type", {
                required: "This field is required",
              })}
              className="hidden"
            />

            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500 text-sm font-bold">
          {errors.type.message}
        </span>
      )}
    </div>
  );
}
