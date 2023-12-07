import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import TextInput from '@/Components/TextInput';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import Alert from '@/Components/Alert';

export default function Presence({ auth }) {

    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // Months are zero-based
        const day = now.getDate();

        const formattedMonth = month < 10 ? `0${month}` : month;
        const formattedDay = day < 10 ? `0${day}` : day;

        return `${year}-${formattedMonth}-${formattedDay}`;
    }

    const getCurrentTimeElement = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        const currentTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        return currentTime;
    }

    const getCurrentTime = () => {

        const now = new Date();

        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        return `${hours}:${minutes}:${seconds}`;

    }

    const { data, setData, post, processing, errors, reset } = useForm({
        nik: auth.user.nik,
        presensi: '',
        date: getCurrentDate(),
        time: getCurrentTime(),
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault()
        post(route('presence.submit'))
    }


    const { flash } = usePage().props

    const [alert, setAlert] = useState(flash.message)

    const closeAlert = () => {
        setAlert(null)
    }

    console.log(flash)

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Presensi</h2>}
        >
            <Head title="Presence" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 flex justify-center">
                            {alert && <Alert flash={flash.message} onClose={closeAlert} />}
                            <form onSubmit={submit} className='flex flex-col px-36 py-10 gap-10 w-[90%]'>
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
                                    <InputError message={errors.nik} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="presensi" value="Presensi Untuk" />
                                    <select name="presensi" id="presensi" defaultValue={data.presensi} onChange={e => { setData('presensi', e.target.value) }} className='mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm cursor-pointer'>
                                        <option value="">Pilih</option>
                                        <option value="Datang">Presensi Datang</option>
                                        <option value="Pulang">Presensi Pulang</option>
                                    </select>
                                    <InputError className="mt-2" message={errors.presensi} />
                                </div>

                                {/* todo - Set Date */}
                                <div className='flex flex-col gap-3'>
                                    <InputLabel htmlFor="date" value="Tanggal Presensi" />
                                    <TextInput
                                        id="date"
                                        type="date"
                                        name="date"
                                        value={data.date}
                                        className="mt-1 block w-full sm:min-w-[350px]"
                                        isFocused={true}
                                        readOnly
                                    />
                                    <InputError message={errors.date} className="mt-2" />
                                </div>

                                {/* todo - Set Time */}
                                <div className='flex flex-col gap-3'>
                                    <InputLabel htmlFor="time" value="Waktu Presensi" />
                                    <TextInput
                                        id="time"
                                        type="time"
                                        name="time"
                                        value={getCurrentTimeElement()}
                                        className="mt-1 block w-full sm:min-w-[350px]"
                                        isFocused={true}
                                        readOnly
                                    />
                                    <InputError message={errors.time} className="mt-2" />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <InputLabel htmlFor="password" value="Password" />
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full sm:min-w-[350px]"
                                        isFocused={true}
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                    <InputError message={flash.error} className="mt-2" />
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
