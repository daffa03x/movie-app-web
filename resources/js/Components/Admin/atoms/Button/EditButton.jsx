import { Link } from "@inertiajs/react";

export default function EditButton({ className = "", children, ...props }) {
    return (
        <Link
            {...props}
            className={
                `inline-flex items-center px-4 py-2 text-white focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-md text-xs  dark:focus:ring-yellow-900 uppercase tracking-widest font-semibold transition ease-in-out duration-150 border border-transparent` +
                className
            }
        >
            {children}
        </Link>
    );
}
