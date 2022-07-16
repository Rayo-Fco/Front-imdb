import {
  Card, CardActions, CardContent, Skeleton,
} from '@mui/material';
import classes from './styles';

function SkeletonMovieCard() {
  return (
    <Card sx={classes.card}>
      <Skeleton variant="circular" width={50} height={50} sx={classes.fab} />
      <CardContent>
        <Skeleton variant="rectangular" width="100%" height={30} />
      </CardContent>
      <CardContent sx={classes.img}>
        <Skeleton variant="rectangular" width={150} height={200} />
      </CardContent>
      <CardContent>
        <Skeleton />
        <Skeleton width="40%" />
      </CardContent>
    </Card>
  );
}

export default SkeletonMovieCard;
