import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

export default function Toast() {
    const { flash } = usePage().props;
    const toast = useToast();
    useEffect(() => {
        if (flash.message) {
            const examplePromise = new Promise((resolve, reject) => {
                setTimeout(() => resolve(200), 500);
            });

            // Will display the loading toast until the promise is either resolved
            // or rejected.
            toast.promise(examplePromise, {
                success: {
                    title: "Success",
                    description: flash.message,
                    position: "top-right",
                },
                error: {
                    title: "Error",
                    description: flash.message,
                    position: "top-right",
                },
                loading: {
                    title: "Loading",
                    description: "Please wait",
                    position: "top-right",
                },
            });
        }
    }, [flash.message, toast]);
    return null;
}
