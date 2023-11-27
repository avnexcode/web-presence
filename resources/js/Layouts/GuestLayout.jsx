import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-transparent absolute sm:right-[20%] top-[15%] md:top-[27%] lg:top-[30%] xl:top-[37%]">
            <div className="w-full px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-xl">
                <div>
                    <Link href="/" className='flex justify-center'>
                        <ApplicationLogo className="w-[200px] object-cover fill-current text-gray-500" />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
