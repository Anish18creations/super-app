import List from "./List";
import logo from '../Assets/logo.png';
import styles from "../Styles/List.module.css";
import { useNavigate } from "react-router-dom";
const Movies = () => {
  const movies = JSON.parse(localStorage.getItem("genres"));
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          background: "black",
          overflowX: "hidden",
          maxHeight: "100vh",
        }}
      >
        <img
          src={logo} alt="" onClick={()=>navigate('/main')}
          style={{
            position: "absolute",
            top: "2vh",
            right: "3vw",
            height: "60px",
            width: "60px",
          }}
        />
        <p
          style={{
            color: "green",
            fontSize: "3rem",
            margin: "1vw",
          }}
          className={styles.header}
        >
          Super app
        </p>
        <p style={{ color: "white", fontSize: "2rem", margin: "2vw" }}>
          Entertainment according to your choice
        </p>
        {movies.map((movie , idx) => (
          <div key={idx}>
          <List genre={movie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;