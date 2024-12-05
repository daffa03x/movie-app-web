import { Head, Link, router, usePage } from "@inertiajs/react";
import { useState } from "react";
import Footer from "@/Components/Home/organism/Footer/Index";
import Navbar from "@/Components/Home/organism/Navbar/Navbar";

const Index = () => {
    const { genre, movies: initialMovies, total } = usePage().props;
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    // movie
    const [movies, setMovies] = useState(initialMovies);
    // Fungsi untuk load lebih banyak data
    const loadMore = () => {
        setLoading(true);
        const nextPage = page + 1;

        router.get(
            "/",
            { page: nextPage },
            {
                preserveState: true,
                preserveScroll: true,
                onSuccess: (response) => {
                    const newMovies = response.props.movies;
                    setMovies([...movies, ...newMovies]);
                    setPage(nextPage);
                    setLoading(false);
                },
            }
        );
    };
    return (
        <>
            <Head title="Home" />
            <Navbar genre={genre} />
            <section className="my-4">
                <div className="px-4 mx-auto max-w-screen-xl">
                    <div className="grid grid-cols-5 gap-3">
                        {movies.map((m, index) => (
                            <div
                                key={index}
                                className="mt-10 card bg-base-100 shadow-xl"
                                style={{
                                    width: "230px",
                                    borderRadius: "20px",
                                }}
                            >
                                <Link href={`/home/movie/${m.id}`}>
                                    <figure>
                                        <img
                                            // style={{
                                            //     borderRadius: "20px",
                                            //     width: "230px",
                                            //     height: "325px",
                                            // }}
                                            src={m.image}
                                            alt="Movie Poster"
                                        />
                                    </figure>
                                </Link>
                                <div className="card-body p-4">
                                    <h2 className="card-title">{m.name}</h2>
                                    <h2>{m.release_date}</h2>
                                    <div className="card-action">
                                        <p>Rating : {m.rating}%</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Tombol Load More */}
                    {movies.length < total && (
                        <div className="load-more flex justify-center mt-10">
                            <button
                                className={
                                    loading
                                        ? "btn"
                                        : "btn btn-active btn-primary text-white"
                                }
                                onClick={loadMore}
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    "Load More"
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Index;
