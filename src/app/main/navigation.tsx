import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <header className="text-gray-600 body-font fixed w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-500 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-black rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">
              BLinux by <span className="text-red-800">Int</span>
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {[
              { text: "DOCS", link: "/" },
              { text: "Spaces", link: "/" },
              { text: "Premium", link: "/" },
              { text: "About", link: "/" },
            ].map((e, i) => (
              <Link key={i} className="mr-5 hover:text-gray-900" href={e.link}>
                {e.text}
              </Link>
            ))}
          </nav>
          <button className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            User Icon
          </button>
        </div>
      </header>
    </>
  );
}
