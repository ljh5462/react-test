import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, value,coverImg, title, summary, genres}){
    return (
        <div>
          <img src={coverImg} art={title} />
          <h2>
            <Link to={`/movie/${id}&${value}`}>{title}</Link>
          </h2>
          <p>{summary}</p>
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;