'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Explore() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-10">
        <div className="flex justify-center items-center gap-10">
          <Button
            asChild
            variant="outline" 
            className="border border-solid font-extrabold flex flex-col items-center justify-center gap-2 h-[200px] w-[200px]"
          >
            <Link href="/openings">
              <Image src="/pawn.svg" alt="Description" width={100} height={100} />
              <span className="font-semibold">오프닝</span>
              <span className="text-xs text-gray-500">다양한 오프닝을 찾고 배워보세요.</span>
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="border border-solid font-extrabold flex flex-col items-center justify-center gap-2 h-[200px] w-[200px]"
          >
            <Link href="/rules">
              <Image src="/books.svg" alt="Description" width={100} height={100} />
              <span className="font-semibold">규칙</span>
              <span className="text-xs text-gray-500">체스 규칙을 알아보세요.</span>
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="border border-solid font-extrabold flex flex-col items-center justify-center gap-2 h-[200px] w-[200px]"
          >
            <Link href="/players">
              <Image src="/king.svg" alt="Description" width={100} height={100} />
              <span className="font-semibold">선수들</span>
              <span className="text-xs text-gray-500">유명한 선수들을 찾아보세요.</span>
            </Link>
            
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="border border-solid font-extrabold flex flex-col items-center justify-center gap-2 h-[200px] w-[200px]"
          >
            <Link href="/community">
              <Image src="/community.svg" alt="Description" width={100} height={100} />
              <span className="font-semibold">커뮤니티</span>
              <span className="text-xs text-gray-500">레딧, 디시인사이드의 글들입니다.</span>
            </Link>
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2 font-light text-sm">
          <p className="text-gray-500">검색하고 싶은 내용을 이미 안다면?</p>
          <Link href="/" target="_blank" className='text-blue-500 hover:underline'>
            Search!
          </Link>
        </div>
      </div>
    </>
  );
}
