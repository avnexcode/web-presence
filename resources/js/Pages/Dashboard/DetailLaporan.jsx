import { Link } from "@inertiajs/react"
import { GrPrint } from "react-icons/gr";
export default function DetailLaporan() {
    return (
        <div className="text-8xl">
            <Link href='/dashboard/laporan'>Kembali</Link>
            <h1>Detail Laporan</h1>
            <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                <GrPrint />
            </button>
        </div>
    )
}