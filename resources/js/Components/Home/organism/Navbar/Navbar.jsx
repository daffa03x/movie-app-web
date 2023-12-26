import { Link, useForm } from "@inertiajs/react";

export default function Navbar({ genre }) {
    const { data, setData, get } = useForm({
        search: "",
    });
    const submit = (e) => {
        e.preventDefault();
        get(route("home.movie.search"));
    };
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/home/box-office">Box Office</Link>
                        </li>
                        <li>
                            <Link href="/home/series">Series</Link>
                        </li>
                        {/* <li>
                            <details>
                                <summary>Category</summary>
                                <ul className="p-2">
                                    {genre.map((g) => (
                                        <li key={g.id}>
                                            <Link href={`/home/genre/${g.id}`}>
                                                {g.name_genre}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li> */}
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">
                    Movie App
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/home/box-office">Box Office</Link>
                    </li>
                    <li>
                        <Link href="/home/series">Series</Link>
                    </li>
                    {/* <li>
                        <details>
                            <summary>Category</summary>
                            <ul className="p-2">
                                {genre.map((g) => (
                                    <li key={g.id}>
                                        <Link href={`/home/genre/${g.id}`}>
                                            {g.name_genre}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </li> */}
                </ul>
            </div>
            <div className="navbar-end">
                <form onSubmit={submit}>
                    <div className="join">
                        <div>
                            <div>
                                <input
                                    className="input input-bordered join-item w-48"
                                    placeholder="Search"
                                    autoComplete="search"
                                    value={data.search}
                                    id="search"
                                    name="search"
                                    onChange={(e) =>
                                        setData("search", e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>
                        <div className="indicator">
                            <button className="btn join-item">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
