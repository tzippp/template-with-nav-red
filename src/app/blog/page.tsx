export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-extralight tracking-wide">
          Welcome to My Beauty Spa
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Experience elegance, relaxation, and beauty with our luxurious treatments.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Book an Appointment
        </button>
      </div>
    </main>
  );
}
