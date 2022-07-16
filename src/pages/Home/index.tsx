import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFlimsAction } from '../../actions/filmsAction';
import MovieCard from '../../components/MovieCard';
import SkeletonMovieCard from '../../components/SkeletonMovieCard';
import { getFilms } from '../../selectors/filmsSelectors';
import classes from './styles';

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlimsAction());
  }, []);
  const { data, loading } = useSelector(getFilms);
  return (
    <Box sx={classes.content}>
      {loading && ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
        <SkeletonMovieCard key={number.toString()} />))
      )}
      {!loading && (
        data.items.map(({
          crew, imDbRating, title, id, image, rank, year,
        }) => (
          <MovieCard
            key={id}
            crew={crew}
            imbdRating={imDbRating}
            id={id}
            title={title}
            img={image}
            rank={rank}
            year={year}
          />
        ))
      )}

    </Box>
  );
}

export default HomePage;
