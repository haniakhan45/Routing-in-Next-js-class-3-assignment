import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <ul className="flex justify-center gap-60 bg-blue-100">
        <li>
          <Link href="/" className="text-2xl font-bold text-purple-800">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-2xl font-bold text-purple-800">
            About
          </Link>
        </li>
      </ul>
    </>
  );
}
