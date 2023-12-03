import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import DangerButton from '@/Components/DangerButton';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Modal from '@/Components/Modal';
import { useState } from 'react';
import SecondaryButton from '@/Components/SecondaryButton';
export default function Detail({ auth, title, user }) {
    // if (auth.user.position_id !== 1) {
    //     window.location.href = "http://127.0.0.1:8000/presence";
    // }
    const { processing, reset } = useForm();
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };
    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };
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
                        <div className="p-6 text-gray-900 flex flex-col gap-3">
                            <div className='flex flex-col gap-1'>
                                <InputLabel htmlFor="nik" value="Nomor Induk Karyawan" />
                                <TextInput
                                    id="nik"
                                    name="nik"
                                    value={user.nik}
                                    type="text"
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    readOnly
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <InputLabel htmlFor="nik" value="NAMA" />
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={user.name}
                                    type="text"
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    readOnly
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <InputLabel htmlFor="nik" value="Email" />
                                <TextInput
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    type="text"
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    readOnly
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <InputLabel htmlFor="address" value="Alamat" />
                                <TextInput
                                    id="address"
                                    name="address"
                                    value={user.address || ""}
                                    type="text"
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    readOnly
                                />
                            </div>
                            <div className='flex justify-end mt-5'>

                                <DangerButton onClick={confirmUserDeletion}>Hapus Data Karyawan</DangerButton>

                                <Modal show={confirmingUserDeletion} onClose={closeModal}>
                                    <div className='p-6'>

                                        <h2 className="text-lg font-medium text-gray-900">
                                            Apakah Anda yakin ingin menghapus akun karyawan?
                                        </h2>

                                        <p className="mt-1 text-sm text-gray-600">
                                            Setelah akun akun dihapus, semua sumber daya dan data yang terkait akan dihapus secara permanen. Silakan masukkan kata sandi Anda untuk mengkonfirmasi bahwa Anda ingin menghapus akun Anda secara permanen.
                                        </p>
                                        <div className="mt-6 flex justify-end">
                                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                                            <DangerButton className="ms-3" disabled={processing}>
                                                <Link href={`/dashboard/delete/${user.nik}`}>Hapus Data</Link>
                                            </DangerButton>
                                        </div>

                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
