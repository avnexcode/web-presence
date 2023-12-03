import Paginator from "./Paginator";
import Sorting from '@/Components/Sorting';
import { TbReload } from "react-icons/tb";
import { Link } from "@inertiajs/react"
import PrimaryButton from "./PrimaryButton";
export default function TablePresence({ users }) {

console.log(users)
    return (
        <>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg divide-y divide-gray-200">
                            <div className="py-3 px-4 flex justify-between items-center gap-2">
                                <Link href="/dashboard">
                                    <PrimaryButton className="text-xl">
                                        <TbReload />
                                    </PrimaryButton>
                                </Link>
                                <form action="/dashboard" className="relative w-full" method="get">
                                    <label className="sr-only">Search</label>
                                    <input type="text" name="search" id="search" className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Pencarian" />
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                                        <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                    </div>
                                </form>
                                <Sorting />
                            </div>
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr className="[&>*]:text-left">
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">NO</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">NIK</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">NAME</th>
                                            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 ">
                                        {users.data.map((user, index) => {
                                            return (
                                                <tr key={index} className="[&>*]:text-left">
                                                    <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{index + 1}</td>
                                                    <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{user.nik}</td>
                                                    <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.name.toUpperCase()}</td>
                                                    <td className=" px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        <Link href={`dashboard/detail/${user.nik}`} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Detail</Link>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="py-4 px-4 flex justify-start">
                                <Paginator users={users} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}