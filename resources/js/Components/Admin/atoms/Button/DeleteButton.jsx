import { router } from "@inertiajs/react";
import Swal from "sweetalert2";
export default function DeleteButton({
    className = "",
    id,
    menu,
    disabled,
    children,
    ...props
}) {
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Data Can Delete Permanent!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/${menu}/delete/${id}`);
            }
        });
    };
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            onClick={() => handleDelete(id)}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
