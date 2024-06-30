"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { adminAside } from "../constant";
import { useState } from "react";
import TreeList from "./TreeList";
const AsideAdmin = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <aside className="border-r w-1/5 bg-background/10 h-full flex-grow dark:border-[#262626]">
      <div className="p-3 justify-center flex items-center gap-4 border-b dark:border-[#262626]">
        <Image
          src={"/favicon.png"}
          width={40}
          height={40}
          alt="Admin Logo favicon"
        />
        <h2 className="text-main text-2xl">IT-PARK KHIVA</h2>
      </div>
      <div>
        <ul className="">
          {adminAside.map((link) => (
            <li
              key={link.id}
            >
              {link.children ? (
                <div>
                  <Link
                    className={`px-5 py-2 block  transition-all duration-300 cursor-pointer text-xl ${
                      pathname === link.path
                        ? "bg-[#00cc6b] hover:bg-[#00cc6b]/90"
                        : "hover:bg-[#00cc6b]/90"
                    }`}
                    href={link.path}
                  >
                    {link.title}
                  </Link>
                  {/* <TreeList
                    isOpen={pathname === link.path}
                    list={link.children}
                  /> */}
                </div>
              ) : (
                <Link
                  className={`px-5 py-2 block  transition-all duration-300 cursor-pointer text-xl ${
                    pathname === link.path
                      ? "bg-[#00cc6b] hover:bg-[#00cc6b]/90"
                      : "hover:bg-[#00cc6b]/90"
                  }`}
                  href={link.path}
                >
                  {link.title}
                </Link>
              )}
              {/* <Link href={link.path}>
                {link.title}
              </Link>
               */}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default AsideAdmin;
