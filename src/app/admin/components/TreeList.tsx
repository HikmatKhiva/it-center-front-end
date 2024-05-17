"use client";
import Link from "next/link";
import React, { useState } from "react";
const TreeList = ({ list, isOpen }: { list: INavLink[]; isOpen: boolean }) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <ul className={`${isOpen ? "h-fit" : "h-[0px] max-h-[0]"} overflow-hidden`}>
      {list.map((child) => (
        <li key={child.id}>
          <Link
            className={`px-5 py-2 block  transition-all duration-300 cursor-pointer text-xl ml-2`}
            href={child.path}
          >
            {child.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TreeList;
