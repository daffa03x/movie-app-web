import React from "react";
import { Link } from "@inertiajs/react";

export default function Pagination({ links, total }) {
    function getClassName(active) {
        if (active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 text-white";
        } else {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary";
        }
    }

    return (
        links.length > 0 && (
            <div className="grid justify-items-end mb-4">
                <div className="flex flex-wrap mt-8">
                    {links.map((link, key) => {
                        if (
                            !link.label.includes("next") &&
                            !link.label.includes("raquo") &&
                            !link.label.includes("laquo") &&
                            !link.label.includes("previous") &&
                            link.url
                        ) {
                            return (
                                <Link
                                    key={key}
                                    className={getClassName(link.active)}
                                    href={link.url}
                                >
                                    {link.label}
                                </Link>
                            );
                        }
                        return null;
                    })}
                </div>
                {total && (
                    <p className="mt-4 text-sm text-gray-500">
                        Total data: {total}
                    </p>
                )}
            </div>
        )
    );
}
