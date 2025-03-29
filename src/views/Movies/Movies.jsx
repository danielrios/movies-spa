import { useMovies } from "../../hooks/useMovies.js";
import styles from "./Movies.module.css";
import { MovieItem } from "../../components/movieItem/MovieItem.jsx";

export function Movies() {
	const movies = useMovies();

	return (
		<>
			<section>
				<h1>Movies populars</h1>
				<div className={styles.moviesList}>
					{movies.map((movie) => (
						<MovieItem key={movie.id} movie={movie} />
					))}
				</div>
			</section>
		</>
	);
}
