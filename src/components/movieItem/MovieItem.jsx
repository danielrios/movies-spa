import styles from "./MovieItem.module.css";
import { Link } from "react-router-dom";

export function MovieItem({ movie }) {
	return (
		<div className={styles.movie}>
			{movie["poster_path"] && (
				<img
					src={`https://image.tmdb.org/t/p/w200/${movie["poster_path"]}`}
					alt="poster"
				/>
			)}
			<h3>{movie["title"]}</h3>
			<p>
				<Link className={styles.detailsBtn} to={`/movies/${movie["id"]}`}>
					See details
				</Link>
			</p>
		</div>
	);
}
