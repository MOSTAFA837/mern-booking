import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import SignOutButton from "./SignOutButton";

export default function Header() {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Booking.com</Link>
        </span>

        <span className="flex space-x-2">
          {isLoggedIn ? (
            <div className="flex justify-between w-[400px]">
              <div className="flex justify-between">
                <Link
                  to="/my-bookings"
                  className="flex items-center text-white border-blue-600 p-2 rounded-md px-3 font-bold hover:bg-gray-100/10"
                >
                  My Bookings
                </Link>
                <Link
                  to="/my-hotels"
                  className="flex items-center text-white border-blue-600 p-2 rounded-md px-3 font-bold hover:bg-gray-100/10"
                >
                  My Hotels
                </Link>
              </div>

              <SignOutButton />
            </div>
          ) : (
            <>
              <Link
                to="/register"
                className="flex items-center bg-white border-blue-600 p-2 rounded-md text-blue-600 px-3 font-bold hover:bg-gray-100"
              >
                Register
              </Link>
              <Link
                to="/sign-in"
                className="flex items-center bg-white border-blue-600 p-2 rounded-md text-blue-600 px-3 font-bold hover:bg-gray-100"
              >
                Sign In
              </Link>
            </>
          )}
        </span>
      </div>
    </div>
  );
}
