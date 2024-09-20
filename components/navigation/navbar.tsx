import Link from "next/link";
import Image from "next/image";


  type NavbarProps = {
    bgClass: string;
  };

  const Navbar: React.FC<NavbarProps> = ({ bgClass }) => {
    return (
      <nav className={`fixed top-0 w-full z-50 ${bgClass}`}>
      <div className="container mx-auto lg:px-0 px-[24px]">
        <div className="flex justify-between h-[70px]">
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
            <Link href="/" className="font-notosans px-3 py-2 text-white rounded-md text-sm font-[500]">
              SERVICE
            </Link>
            <Link href="/about" className="font-notosans px-3 py-2 text-white rounded-md text-sm font-[500]">
              PORTFOLIO
            </Link>
            <Link href="/services" className="font-notosans px-3 py-2 text-white rounded-md text-sm font-[500]">
              TESTIMONIALS
            </Link>
            <Link href="/contact" className="font-notosans px-3 py-2 text-white rounded-md text-sm font-[500]">
              CLIENT
            </Link>
            <Link href="/contact" className="font-notosans px-3 py-2 text-white rounded-md text-sm font-[500]">
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

export default Navbar