import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-transparent text-white w-full fixed top-0 left-0 z-50">
      <div className="max-w-[1600px] mx-auto px-[24px] lg:px-0">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="">
            <Image
                    className=""
                    width={210}
                    height={48}
                    src="/Style=Light.svg"
                    alt=""
                  />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="font-notosans px-3 py-2 rounded-md text-sm font-[500]">
              SERVICE
            </Link>
            <Link href="/about" className="font-notosans px-3 py-2 rounded-md text-sm font-[500]">
              PORTFOLIO
            </Link>
            <Link href="/services" className="font-notosans px-3 py-2 rounded-md text-sm font-[500]">
              TESTIMONIALS
            </Link>
            <Link href="/contact" className="font-notosans px-3 py-2 rounded-md text-sm font-[500]">
              CLIENT
            </Link>
            <Link href="/contact" className="font-notosans px-3 py-2 rounded-md text-sm font-[500]">
              CONTACT
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              {/* Icon for mobile menu, you can use an SVG or font icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
