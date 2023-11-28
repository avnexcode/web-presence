import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import TablePresence from '@/Components/TablePresence';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Detail({ auth, title, users }) {
    // if (auth.user.position_id !== 1) {
    //     window.location.href = "http://127.0.0.1:8000/presence";
    // }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <div className='flex justify-between px-10'>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Detail</h2>
                    </div>
                </>
            }
        >
            <Head title={title} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1>Hello Detail</h1>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
