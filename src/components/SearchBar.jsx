"use client"



import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {

    const [search, setSearch] = useState()
    const router = useRouter()
    const searchParams = useSearchParams()
    console.log(searchParams)


    const handleSearch = () => {

        const params = new URLSearchParams(searchParams.toString())


        if (search) {
            params.set("searchTerm", search)
        }
        else {
            params.delete("searchTerm",)
        }

        router.push(`/rooms?${params.toString()}`)

    }



    return (
        <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-indigo-600 transition-all overflow-hidden">

            <div className="pl-5 text-slate-400">
                <BiSearch className="w-5 h-5" />
            </div>

            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search rooms by name"
                className="flex-1 h-14 px-4 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
            />

            <button
                onClick={handleSearch}
                className="h-10 px-4 md:px-6 mr-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"

            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;