import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import TableHistory from '@/Components/TableHistory';

export default function History({ auth, title, attendances, userName }) {
    const user = auth.user
    const userPosition = user.positions[0].position
    if (userPosition !== 'admin') {
        document.location.href = 'http://127.0.0.1:8000/presence'
        return
    }
    // console.log(attendances)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Riwayat Presensi</h2>
                    </div>
                </>
            }
        >
            <Head title={title} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 relative">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <TableHistory attendances={attendances} userName={userName}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
