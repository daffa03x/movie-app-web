import LinkButton from "./LinkButton";

export default function Card({ className = "", children, title, body, link }) {
    return (
        <div
            className={
                `max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ` +
                className
            }
        >
            {children}
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <div className="flex justify-between font-normal text-gray-500 dark:text-gray-400">
                <div>{body}</div>
                <div>
                    <LinkButton href={link}>Cek</LinkButton>
                </div>
            </div>
        </div>
    );
}
