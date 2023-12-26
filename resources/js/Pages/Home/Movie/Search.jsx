import Pagination from "@/Components/Admin/atoms/Pagination/Index";
import Loading from "@/Components/Home/atoms/Loading/Index";
import Footer from "@/Components/Home/organism/Footer/Index";
import Navbar from "@/Components/Home/organism/Navbar/Navbar";
import { Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Index({ genre, movie, total }) {
    const [isLoading, setIsLoading] = useState(true);
    // Simulate loading effect with setTimeout
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Delay 2 seconds for loading effect
    }, []);
    return (
        <>
            <Head title="Home" />
            <Navbar genre={genre} />
            {isLoading ? (
                <Loading />
            ) : total === 0 ? (
                <div className="text-4xl mt-48 text-center">
                    No Movie data available
                </div>
            ) : (
                <section className="my-4">
                    <div className="px-4 mx-auto max-w-screen-xl">
                        <div className="grid grid-cols-5 gap-3">
                            {movie.data.map((m) => (
                                <div
                                    key={m.id}
                                    className="mt-10 card bg-base-100 shadow-xl"
                                    style={{
                                        width: "230px",
                                        borderRadius: "20px",
                                    }}
                                >
                                    <Link href={`/home/movie/${m.id}`}>
                                        <figure>
                                            <img
                                                style={{
                                                    borderRadius: "20px",
                                                    width: "230px",
                                                    height: "325px",
                                                }}
                                                src={m.image}
                                                alt="Movie Poster"
                                            />
                                        </figure>
                                    </Link>
                                    <div className="card-body p-4">
                                        <h2 className="card-title">{m.name}</h2>
                                        <h2>{m.release_date}</h2>
                                        <div className="card-action">
                                            {m.genres.map((mg) => (
                                                <div
                                                    key={mg.id}
                                                    className="badge badge-outline me-1"
                                                >
                                                    {mg.name_genre}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Pagination links={movie.links} />
                    </div>
                </section>
            )}
            <Footer />
        </>
    );
}
