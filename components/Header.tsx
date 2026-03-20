import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-4 flex justify-between items-center shadow-md">
      
      <h1 className="text-xl font-bold">Vaasu</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/bhajans">Bhajans</Link>
        <Link href="/aarti">Aarti</Link>
        <Link href="/shlokas">Shlokas</Link>
      </div>

    </nav>
  );
}