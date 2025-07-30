import React from "react";
import SearchBar from "@/components/searchbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="text-center mx-auto">
        <Image
          src="/logo.svg"
          alt="Chespedia Logo"
          width={0}
          height={0}
          className="h-[90%] w-[90%] mb-4 mx-auto"
        />
        <SearchBar />
        <div className="flex items-center justify-center gap-2 mt-4">
          <p className="text-gray-500">아직 검색하고 싶은 내용이 없다면?</p>
          <Link href="/explore" className="text-blue-500 hover:underline">
            Explore!
          </Link>
        </div>
      </div>
    </div>
  );
}
