import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChatIcon,
  ClipboardListIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
  const menus = useMemo(
    () => [
      {
        to: "/about-me",
        icon: <UserIcon className="w-5 h-5" />,
        title: "About me",
      },
      {
        to: "/contact",
        icon: <ChatIcon className="w-5 h-5" />,
        title: "Contact",
      },
      {
        to: "/resume",
        icon: <ClipboardListIcon className="w-5 h-5" />,
        title: "Resume",
      },
    ],
    []
  );
  return (
    <div className="h-screen p-4 bg-sky-600 flex flex-col items-center w-60">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-bold text-white">Hoc Vu Van</p>
        <div>
          <Image
            src="/images/avatar.jpeg"
            width={150}
            height={150}
            alt="Hoc Vu Van avatar"
            className="rounded-full w-max"
          />
        </div>
        <i className="text-white text-sm text-center">
          {`"Hello. My name is Hoc Vu.`}
          <br /> {`I'm a Software engineer."`}
        </i>
      </div>
      <div className="border-t w-11/12 border-gray-300" />
      <div>
        {menus.map((link) => (
          <Link href={link.to} key={link.to}>
            <a className="hover:text-gray-300 text-white flex items-center w-40">
              <div className="mr-2">{link.icon}</div>
              {link.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
