





"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/ourServices", label: "Our Services" }, 
  { href: "/ourProducts", label: "Our Products" },
  { href: "/contactUs", label: "Contact Us" },
];

function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b-2 border-[#DDE1E6] bg-white py-[9.4px] ">
      <div className="grid grid-cols-12 items-center">
        
        <div className="col-span-2 grid justify-items-start ps-[80px]">
          <Image
            className="w-[60px] h-[78px]"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            src="/images/logo/Asset 3@4x 1.png"
          />
        </div>

        <div className="col-span-7 text-[17px] font-inter">
          <ul className="flex justify-center pe-[30px] gap-[7%]">
            {links.map(({ href, label }) => {
              const isActive =
                pathname === href ||
                (href.startsWith("/ourServices") && pathname === "/ourServices");

              return (
                <li key={href} className="relative group">
                  {href === "/ourServices" ? (
                    <Link
                      href={{
                        pathname: "/ourServices",
                        query: { animate: "true" }, 
                      }}
                      className={`
                        transition-colors duration-300
                        ${isActive ? "blue1" : "text-black group-hover:text-[var(--second)]"}
                      `}
                    >
                      {label}
                      {!isActive && (
                        <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] blue-bg transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                      )}
                    </Link>
                  ) : (
                    <Link
                      href={href}
                      className={`
                        transition-colors duration-300
                        ${isActive ? "blue1" : "text-black group-hover:text-[var(--second)]"}
                      `}
                    >
                      {label}
                      {!isActive && (
                        <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] blue-bg transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                      )}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-3 grid justify-items-end pe-[80px]">
          <Button
            title="Get Started"
            clssName="
              text-white 
              hover:border 
              border-transparent 

              hover:![background-image:none] hover:!bg-transparent 

              hover:text-[var(--second)] 
              hover:border-[var(--second)] 
              transition 
              duration-300 
              py-2.5 
              px-9 
              text-[20px] 
              font-medium
            "
          />
        </div>

      </div>
    </header>
  );
}

export default Header;
