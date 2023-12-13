import React, { useState, useEffect } from 'react'
import { Link } from "@inertiajs/react"
import PrimaryButton from './PrimaryButton'
import { TbReload } from 'react-icons/tb'
import Paginator from './Paginator'
export default function TableHistory({ attendances }) {
    const [presences, setPresences] = useState(attendances.data);
    const [sort, setSort] = useState('');


    useEffect(() => {
        if (sort === 'nik_asc') {
            setPresences(prev =>
                [...prev].sort((a, b) => a.user_nik.nik - b.user_nik.nik)
            );
        } else if (sort === 'nik_desc') {
            setPresences(prev =>
                [...prev].sort((a, b) => b.user_nik.nik - a.user_nik.nik)
            );
        } else if (sort === 'name_asc') {
            setPresences(prev =>
                [...prev].sort((a, b) => {
                    if (a.user_nik.name < b.user_nik.name) return -1;
                    if (a.user_nik.name > b.user_nik.name) return 1;
                    return 0;
                })
            );
        } else if (sort === 'name_desc') {
            setPresences(prev =>
                [...prev].sort((a, b) => {
                    if (a.user_nik.name > b.user_nik.name) return -1;
                    if (a.user_nik.name < b.user_nik.name) return 1;
                    return 0;
                })
            );
        }
    }, [sort]);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const searchValue = searchParams.get('search');
        if (searchValue) {
            setSearchTerm(searchValue);
        }
    }, []);



    return (
        <>
            <div className="flex flex-col font-onest">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg divide-y divide-gray-200">
                            <div className="py-3 px-4 flex justify-between items-center gap-2">
                                <Link href="/dashboard/riwayat">
                                    <PrimaryButton className="text-xl">
                                        <TbReload />
                                    </PrimaryButton>
                                </Link>
                                <form action="/dashboard/riwayat" className="relative w-full" method="get">
                                    <label className="sr-only">Search</label>
                                    <input type="text" name="search" id="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Pencarian" />
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                                        <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                    </div>
                                </form>
                                <form action="/dashboard" className="block relative py-2 px-3 ps-9 w-[30%] border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                    <select className="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-200 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline rounded-none" onChange={e => setSort(e.target.value)}>
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
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">NO</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">NIK</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">NAME</th>
                                            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Tanggal</th>
                                            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Waktu</th>
                                            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Presensi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 ">
                                        {presences.length > 0 ? presences.map((presence, index) => {
                                            const formattedDate = new Date(presence.date).toLocaleDateString('en-GB');
                                            return (
                                                <tr key={index} className="[&>*]:text-left">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{index + 1}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{presence.user_nik.nik}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{presence.user_nik.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{formattedDate}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{presence.time}</td>
                                                    {
                                                        presence.presensi === "Datang" ?
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500 font-bold">{presence.presensi}</td> :
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500 font-bold">{presence.presensi}</td>
                                                    }
                                                </tr>
                                            );
                                        }) :
                                            <tr>
                                                <td colSpan={6} className="px-6 py-4 whitespace-nowrap text-md font-onest font-semibold text-red-500 text-center">
                                                    Data tidak ditemukan.
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="py-4 px-4 flex justify-center">
                                <Paginator users={attendances} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
