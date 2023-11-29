import React from 'react'
import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, Link } from '@inertiajs/react';

export default function ConfirmUserDeletion({ user, onDelete, onCancel }) {
    console.log(user)
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const {processing} = useForm()
    const deleteUser = async (user) => {
        await axios.delete(route('dashboard.destroy', user))
        closeModal()
    }

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };
    return (
        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <div onClose={closeModal}>
                <h2 className="text-lg font-medium text-gray-900">
                    Apakah Anda yakin ingin menghapus data staff?
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Setelah akun Anda dihapus, semua sumber daya dan data yang terkait akan dihapus secara permanen.
                </p>
                <div className="mt-6 flex justify-end">
                    <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                    <Link href={`dashboard/delete`}>
                        <DangerButton className="ms-3" disabled={processing}>
                            Delete Data Staff
                        </DangerButton>
                    </Link>
                </div>
            </div>
        </div>

    )
}
