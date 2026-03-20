import Header from "@/components/Header";
import Link from "next/link";

export default function Bhajans() {
  return (
    <>
      <Header />

      <div className="p-10">
        <h1 className="text-4xl text-orange-600 font-bold text-center">
          Bhajans Collection 🎵
        </h1>

        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <Link href="/bhajans/hanuman-chalisa" className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-orange-600">
              Hanuman Chalisa
            </h2>
            <p className="mt-2 text-gray-600">
              Read full lyrics with meaning
            </p>
          </Link>

        </div>
      </div>
    </>
  );
}