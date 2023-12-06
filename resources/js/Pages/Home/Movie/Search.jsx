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
                        <div className="grid grid-rows-3 grid-flow-col gap-3">
                            {movie.data.map((m) => (
                                <div
                                    key={m.id}
                                    className="mt-10 card w-96 bg-base-100 shadow-xl"
                                >
                                    <Link href={`/home/movie/${m.id}`}>
                                        <figure>
                                            <img
                                                src={`/${m.image}`}
                                                width={500}
                                                alt="Shoes"
                                            />
                                        </figure>
                                    </Link>
                                    <div className="card-body">
                                        <h2 className="card-title flex justify-between">
                                            <div>
                                                <p>{m.name}</p>
                                            </div>
                                            <div>
                                                <p className="mr-3">Rating</p>
                                            </div>
                                        </h2>
                                        <div className="flex justify-between">
                                            <div>
                                                <p>{m.release_date}</p>
                                                <Link
                                                    className="btn btn-outline btn-info mt-3"
                                                    href={m.link_trailer}
                                                >
                                                    Link Trailer
                                                </Link>
                                            </div>
                                            <div
                                                className="radial-progress text-info"
                                                style={{ "--value": 70 }}
                                                role="progressbar"
                                            >
                                                70%
                                            </div>
                                        </div>
                                        <div className="card-actions justify-end">
                                            {m.genres.map((mg) => (
                                                <div
                                                    key={mg.id}
                                                    className="badge badge-outline"
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
