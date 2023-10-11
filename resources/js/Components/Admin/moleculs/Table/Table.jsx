export default function Table({ children }) {
    return (
        <div className="px-6 pb-3  text-gray-900 dark:text-gray-100">
            <table className="w-full">{children}</table>
        </div>
    );
}
