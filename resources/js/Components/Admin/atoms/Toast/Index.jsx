import Swal from "sweetalert2";

export default function Toast({ title }) {
    const toastMixin = Swal.mixin({
        toast: true,
        background: "#1f2933",
        icon: "success",
        title: "General Title",
        animation: false,
        position: "top-right",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
    toastMixin.fire({
        animation: true,
        title: title,
    });
    return null;
}
