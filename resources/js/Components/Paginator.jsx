import { Link } from "@inertiajs/react";

export default function Paginator({ users }) {
  const { prev, next } = users.links;
  const { current_page } = users.meta
  return (
    <nav className="flex items-center space-x-1">
      {prev ? (
        <Link
          href={prev}
          type="button"
          className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        >
          <span aria-hidden="true">«</span>
          <span className="sr-only">Previous</span>
        </Link>
      ) : (
        <button
          type="button"
          className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          disabled
        >
          <span aria-hidden="true">«</span>
          <span className="sr-only">Previous</span>
        </button>
      )}
      {(prev || next) && <Link
        href={current_page}
        type="button"
        className={`min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full`}
      >
        {current_page}
      </Link>}

      {next ? (
        <Link
          href={next}
          type="button"
          className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        >
          <span className="sr-only">Next</span>
          <span aria-hidden="true">»</span>
        </Link>
      ) : (
        <button
          type="button"
          className="p-2.5 inline-flex items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
          disabled
        >
          <span className="sr-only">Next</span>
          <span aria-hidden="true">»</span>
        </button>
      )}
    </nav>
  );
}
