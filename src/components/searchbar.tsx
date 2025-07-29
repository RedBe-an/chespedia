'use client';

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    console.log("Search:", value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(searchValue);
    }
  };

  return (
    <div className="relative w-full">
      <Input
        placeholder="검색어를 입력하세요"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={handleKeyPress}
        className="pr-10"
      />
      <Search 
        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer" 
        onClick={() => handleSearch(searchValue)}
      />
    </div>
  );
};

export default SearchBar;