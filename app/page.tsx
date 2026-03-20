import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex flex-col items-center justify-center text-center px-6">
        
        <h1 className="text-6xl font-extrabold text-orange-600">
          Vaasu Spiritual 🙏
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          Discover peace through Bhajans, Aarti, and Shlokas.
          Your daily source of spiritual calm.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="/bhajans" className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-700">
            Explore Bhajans
          </a>

          <a href="/aarti" className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-100">
            View Aarti
          </a>
        </div>

      </main>
    </>
  );
}