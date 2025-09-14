import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-1/7 bg-black text-white flex flex-col">
      <div className="p-8">
        <div className="h-16 bg-gray-800 rounded flex items-center justify-center mb-8">
          Logo
        </div>
        <nav className="space-y-4">
          <Link href="/" className="block py-2 px-4 hover:bg-gray-800 rounded">
            Home
          </Link>
          <Link
            href="/projects"
            className="block py-2 px-4 hover:bg-gray-800 rounded"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="block py-2 px-4 hover:bg-gray-800 rounded"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block py-2 px-4 hover:bg-gray-800 rounded"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
