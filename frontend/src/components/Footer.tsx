export default function Footer() {
  return (
    <div className="bg-blue-800 py-10">
      <div className="md:container px-4 mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          Booking.com
        </span>

        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
    </div>
  );
}
