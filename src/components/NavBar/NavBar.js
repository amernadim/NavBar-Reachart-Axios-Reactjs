import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/Home" },
    { id: 2, name: "About", path: "/About" },
    { id: 3, name: "Contact", path: "/Contact" },
    { id: 4, name: "Blog", path: "/Blog" },
    { id: 5, name: "Items", path: "/Items" },
  ];
  return (
    <nav className="bg-purple-400 py-2">
      <div onClick={() => setOpen(!open)} className="h-10 w-10 pl-4 text-4npm xl md:hidden ">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>

      <ul className={`bg-purple-400 w-full text-center md:flex justify-center md:mt-5 gap-5 mt-4 md:static absolute duration-500 ease-in ${
          open ? "top-6" : "top-[-160px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
