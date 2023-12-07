import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create({ auth, title, users }) {
    // if (auth.user.position_id !== 1) {
    //     window.location.href = "http://127.0.0.1:8000/presence";
    // }
    const { data, setData, post, processing, errors, reset } = useForm({
        nik: '2210441002',
        name: 'Ronaldo Wati',
        email: 'wati@gmail.com',
        password: 'password',
        password_confirmation: 'password',
    });
    console.log(errors)
    // const { data, setData, post, processing, errors, reset } = useForm({
    //     nik: '22104411100',
    //     name: 'RONALDO WATU',
    //     email: 'wati@gmail.com',
    //     password: 'password',
    //     password_confirmation: 'password',
    // });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('create'));
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <div className='flex justify-between px-10'>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Data Karyawan</h2>
                    </div>
                </>
            }
        >
            <Head title={title} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit}>
                                <div className="mt-4">
                                    <InputLabel htmlFor="nik" value="Nomor Induk Karyawan" />
                                    <TextInput
                                        id="nik"
                                        name="nik"
                                        value={data.nik}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('nik', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.nik} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="name" value="Name" />
                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="password" value="Password" />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton className="ms-4" disabled={processing}>
                                        Tambah Data
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
