import { useEffect, useState } from "react";
import styles from "../Styles/List.module.css";
import axios from "axios";

const List = ({ genre }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchMovies = async () => {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${genre}&api_key=829f79b6af9962029fb580cf5bf15dc4`
            )

            console.log(response.data.results)

            if (genre === 'Thriller') {
                setMovies(response.data.results.splice(12, 4))
            } 
            else if (genre === 'Western'){
                setMovies(response.data.results.splice(12, 4))
            }
            else {
                setMovies(response.data.results.splice(16, 4))
            }
            
        };

        fetchMovies();

    }, []);

    return (
        
        <>
            <p className={styles.heading} style={{ overflowY: "hidden" }}>
                {genre}
            </p>
            <div style={{ display: "flex", overflow: "hidden", marginLeft: "2vw" }}>
                {movies.map((movie, idx) => {
                    return (
                        <div key={idx} style={{ width: "20vw", margin: "2vw" }}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=""
                                style={{
                                    width: "17vw",
                                    height: "30vh",
                                    borderRadius: "12px",
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default List;