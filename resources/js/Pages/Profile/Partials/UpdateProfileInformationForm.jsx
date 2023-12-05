import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import ProfilePicture from './ProfilePicture';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import FileInput from '@/Components/FileInput';
import profileImage from "@/assets/image/eks.jpg"
import Alert from '@/Components/Alert';
import { useState } from 'react'

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        gender: user.gender,
        old: user.old
    });

    console.log(data)

    const submit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('profile_image', data.profile_image);

        patch(route('profile.update'), formData);
    };
    const [alert, setAlert] = useState(true)

    const closeAlert = () => {
        setAlert(false)
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Informasi Pengguna</h2>
                {alert &&
                <Alert onClose={closeAlert} flash={{message: 'Lengkapi data diri anda.'}}/>
                }
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6" encType="multipart/form-data">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full min-h-[40px]"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full min-h-[40px]"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />
                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="address" value="Alamat" />

                    <TextInput
                        id="address"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.address || ""}
                        onChange={(e) => setData('address', e.target.value)}
                        autoComplete="address"
                    />
                    <InputError className="mt-2" message={errors.address} />
                </div>

                <div>
                    <InputLabel htmlFor="phone" value="No HP" />

                    <TextInput
                        id="phone"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.phone || ""}
                        onChange={(e) => setData('phone', e.target.value)}
                        autoComplete="phone"
                    />
                    <InputError className="mt-2" message={errors.phone} />
                </div>

                <div>
                    <InputLabel htmlFor="profile_image" value="Profile Image" />
                    <img src={data.profile_image || profileImage} alt="profile" className='w-[200px] h-[250px] border mb-2 rounded-md object-cover' />
                    <FileInput
                        id="profile_image"
                        type="file"
                        className="mt-1 block w-full border file:border-none cursor-pointer file:p-2 file:cursor-pointer"
                        // value={data.profile_image || ""}
                        onChange={(e) => setData('profile_image', e.target.files[0])}
                    />
                    <InputError className="mt-2" message={errors.profile_image} />
                </div>

                <div>
                    {/* <InputLabel htmlFor="gender" value="Jenis Kelamin" /> */}

                    <select name="gender" id="gender" defaultValue={data.gender || ""} onChange={e => { setData('gender', e.target.value) }} className='mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm'>
                        <option value="">Jenis Kelamin</option>
                        <option value="Laki - Laki">Laki - Laki</option>
                        <option value="Prempuan">Perempuan</option>
                        <option value="Lainnya">Lainnya</option>
                    </select>
                    <InputError className="mt-2" message={errors.gender} />
                </div>

                <div>
                    <InputLabel htmlFor="old" value="Usia" />

                    <TextInput
                        id="old"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.old || ""}
                        onChange={(e) => setData('old', e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.old} />
                </div>
                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
