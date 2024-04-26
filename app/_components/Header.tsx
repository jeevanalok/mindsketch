import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

function Header() {
  return (
    <header className="bg-slate-100 bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg border-b border-teal-400 sticky top-0 left-0 w-full">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <Image src={"/logo.svg"} width={40} height={40} alt="logo" />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-slate-900 hover:text-teal-700 hover:font-bold transition-colors"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-slate-900 hover:text-teal-700 hover:font-bold transition-colors"
                  href="/about"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 ">
              <a
                className="hidden md:block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                href="/api/auth/login"
              >
                Login
              </a>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <span className="block rounded bg-teal-600 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-teal-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="gap-3">
                  <ul className="space-y-1">
                    <li>
                      <a
                        href="/"
                        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500"
                      >
                        Home
                      </a>
                    </li>

                    <li>
                      <a
                        href="/about"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 "
                      >
                        About
                      </a>
                    </li>

                    <li>
                      <a
                        href="/api/auth/login"
                        className="block rounded-lg px-4 py-2 text-sm font-medium bg-teal-500 text-white "
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
