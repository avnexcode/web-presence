import React, { useState, useEffect, useRef } from 'react';
import Paginator from "./Paginator";
import { TbReload } from "react-icons/tb";
import { Link } from "@inertiajs/react"
import PrimaryButton from "./PrimaryButton";

export default function TablePresence({ users }) {
    const [staff, setStaff] = useState(users.data);
    const [sort, setSort] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        if (sort === 'nik_asc') {
            setStaff(prevStaff =>
                [...prevStaff].sort((a, b) => a.nik - b.nik)
            );
        } else if (sort === 'nik_desc') {
            setStaff(prevStaff =>
                [...prevStaff].sort((a, b) => b.nik - a.nik)
            );
        } else if (sort === 'name_asc') {
            setStaff(prevStaff =>
                [...prevStaff].sort((a, b) => a.name.localeCompare(b.name))
            );
        } else if (sort === 'name_desc') {
            setStaff(prevStaff =>
                [...prevStaff].sort((a, b) => b.name.localeCompare(a.name))
            );
        }
    }, [sort]);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const searchValue = searchParams.get('search');
        if (searchValue) {
            setSearchTerm(searchValue);
        }
    }, []);


    useEffect(() => {
        const handleKeyPress = (e) => {
            if ((e.key === 'f' || e.key === 'F') && e.ctrlKey) {
                inputRef.current.focus();
                e.preventDefault();
                inputRef.current.focus();
            } else if (e.key === 'Escape') {
                setSearchTerm('');
                inputRef.current.blur();
            }
        };
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <>
            <div className="flex flex-col font-onest">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg divide-y divide-gray-200">
                            <div className="py-3 px-4 flex justify-between items-center gap-2">
                                <Link href="/dashboard">
                                    <PrimaryButton className="text-xl">
                                        <TbReload />
                                    </PrimaryButton>
                                </Link>
                                <form action="/dashboard" className="relative w-full">
                                    <label className="sr-only">Search</label>
                                    <div className="relative flex items-center">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                                            <svg
                                                className="h-4 w-4 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx="11" cy="11" r="8" />
                                                <path d="m21 21-4.3-4.3" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="search"
                                            ref={inputRef}
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            id="search"
                                            className="py-2 px-3 pl-9 block w-full border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            placeholder="Pencarian"
                                            autoComplete={staff}
                                        />
                                        <div className="absolute inset-y-0 end-0 flex items-center pe-3 text-gray-400">
                                            Ctrl + F
                                        </div>
                                    </div>
                                </form>

                                <form
                                    action="/dashboard"
                                    className="block relative py-2 px-3 ps-9 w-[30%] border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    <select
                                        className="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-200 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline rounded-none"
                                        onChange={(e) => setSort(e.target.value)}
                                    >
                                        <option value="nik_asc">NIK ASC</option>
                                        <option value="nik_desc">NIK DSC</option>
                                        <option value="name_asc">Nama ASC</option>
                                        <option value="name_desc">Nama DSC</option>
                                    </select>
                                </form>
                            </div>
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr className="[&>*]:text-left">
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                                NO
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                                NIK
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                                NAMA
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">
                                                AKSI
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {staff.length > 0 ? (
                                            staff.map((user, index) => (
                                                <tr key={index} className="[&>*]:text-left">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{index + 1}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{user.nik}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.name.toUpperCase()}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        <Link
                                                            href={`dashboard/detail/${user.nik}`}
                                                            type="button"
                                                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                                                        >
                                                            Detail
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={4} className="px-6 py-4 whitespace-nowrap text-md font-onest font-semibold text-red-500 text-center">
                                                    Data tidak ditemukan.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="py-4 px-4 flex justify-center">
                                <Paginator users={users} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
