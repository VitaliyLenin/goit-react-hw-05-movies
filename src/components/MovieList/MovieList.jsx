import { Link } from 'react-router-dom';

const MovieList = ({ movies, location }) => {
  const elements = movies.map(({ id, title }) => (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}}`}>
        {title}
      </Link>
    </li>
  ));

  return <ol>{elements}</ol>;
};

export default MovieList;
