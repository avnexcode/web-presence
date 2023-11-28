import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
export default function Presence({ auth, job }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nik: '',
        password: '',
        presensi: true,
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    console.log()
    const submit = () => {
        console.log(data)
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Presence</h2>}
        >
            <Head title="Presence" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 flex justify-center">
                            <form action="" onSubmit={submit} className='flex flex-col px-36 py-10 gap-10 w-[90%]'>
                                <div className='flex flex-col gap-3'>
                                    <InputLabel htmlFor="nik" value="Nomor Induk Karyawan" />
                                    <TextInput
                                        id="nik"
                                        type="number"
                                        name="nik"
                                        value={auth.user.nik}
                                        className="mt-1 block w-full sm:min-w-[350px]"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('nik', e.target.value)}
                                        readOnly
                                    />
                                    {/* <InputError message={errors.email} className="mt-2" /> */}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <InputLabel htmlFor="password" value="Password" />
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full sm:min-w-[350px]"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    {/* <InputError message={errors.email} className="mt-2" /> */}
                                </div>
                                <div className='flex justify-end'>
                                    <PrimaryButton className="ms-4" disabled={processing}>
                                        Presensi
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
