import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";

export default function Dashboard({ auth, featuredMovies, movies}) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated user={auth.user}>
            <Head title="Dashboard">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>

            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                {/* <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <FeaturedMovie
                            key={i}
                            slug="jebakan-betmen"
                            name={`Jebakan Betmen ${i}`}
                            category="Horror"
                            thumbnail="https://awsimages.detik.net.id/community/media/visual/2022/03/11/robert-pattinson-bintang-film-the-batman_169.jpeg?w=1200"
                            rating={i + 1}
                        />
                    ))}
                </Flickity> */}
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {featuredMovies.map((featuredMovie) => (
                        <FeaturedMovie
                            key={featuredMovie.id}
                            slug={featuredMovie.slug}
                            name={`${featuredMovie.name}`}
                            category={featuredMovie.category}
                            thumbnail={featuredMovie.thumbnail}
                            rating={featuredMovie.rating}
                        />
                    ))}
                </Flickity>
            </div>

            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            slug={movie.slug}
                            name={movie.name}
                            category={movie.category}
                            thumbnail={movie.thumbnail}
                        />
                    ))}
                </Flickity>
                {/* <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <MovieCard
                            key={i}
                            slug={`avenger-betmen-${i}`}
                            name={`Avenger ${i}`}
                            category="Adventure"
                            thumbnail="https://static.republika.co.id/uploads/images/xlarge/_230531154810-369.png"
                        />
                    ))}
                </Flickity> */}
            </div>
        </Authenticated>
    );
}
