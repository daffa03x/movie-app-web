import { Link } from "@inertiajs/react";

export default function CreateButton({ className = "", children, ...props }) {
    return (
        <Link
            {...props}
            className={
                `inline-flex items-center px-4 py-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 rounded-md text-xs  dark:focus:ring-yellow-900 uppercase tracking-widest font-semibold transition ease-in-out duration-150 border border-transparent` +
                className
            }
        >
            {children}
        </Link>
    );
}
