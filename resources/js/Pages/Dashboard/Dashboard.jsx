import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import TableStaff from '@/Components/TableStaff';
import PrimaryButton from '@/Components/PrimaryButton';
import Alert from '@/Components/Alert';
import { useEffect, useState } from 'react';
export default function Dashboard({ auth, title, users}) {
    
    const user = auth.user
    const userPosition = user.positions[0].position

    if(userPosition !== 'admin') {
        return document.location.href = 'http://127.0.0.1:8000/presence'
    }
    const { flash } = usePage().props
    const [alert, setAlert] = useState(flash.message)
    const closeAlert = () => {
        setAlert(null)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <div className='flex justify-between'>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
                        <PrimaryButton>
                            <Link href='/dashboard/create'>Tambah Data Staff</Link>
                        </PrimaryButton>
                    </div>
                </>
            }
        >
            <Head title={title} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {alert && <Alert flash={flash} onClose={closeAlert}/>}
                            <TableStaff users={users} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
