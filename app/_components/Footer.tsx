import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-teal-400 ">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* logo image */}

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            {" "}
            Copyright &copy; 2024. All rights reserved.
          </p>
          <p className="text-teal-600">Made with 💚 by jeevan</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
