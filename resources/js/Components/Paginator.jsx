import { Link } from "@inertiajs/react"

export default function Paginator(users) {
    const next = users.users.next_page_url;
    const prev = users.users.prev_page_url;
    const active = users.users.current_page;
    return (
        <nav className="flex items-center space-x-1">
            {prev &&
                <Link href={prev} type="button" className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                </Link>
            }

            {(next || prev) &&
                <button type="button" className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none" aria-current="page">{active}</button>
            }

            {next &&
                <Link href={next} type="button" className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                    <span className="sr-only">Next</span>
                    <span aria-hidden="true">»</span>
                </Link>
            }
        </nav>
    )
}