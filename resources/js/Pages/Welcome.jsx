import { Link, Head } from '@inertiajs/react';
import backgroundImage from '@/assets/image/hero1.jpg'
import { FaArrowRight } from "react-icons/fa6";
export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className={`relative sm:flex sm:justify-center sm:items-center min-h-screen bg-cover bg-no-repeat`} style={{ backgroundImage: `url('${backgroundImage}')` }}>
                <div className="absolute p-6 text-end mt-[100%] sm:mt-52 flex justify-center w-full">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <div className='hover:border-2 hover:border-white hover:delay-100 transition-all'>
                                <Link
                                    href={route('login')}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white focus:outline focus:outline-2 focus:outline-white text-2xl bg-red-800 py-3 px-10 flex items-center gap-5 border-2 border-white hover:border-none hover:-translate-x-2 hover:-translate-y-2 transition-all duration-500"
                                >
                                    Get Started <FaArrowRight />
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
