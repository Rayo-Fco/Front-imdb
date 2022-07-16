/* eslint-disable react/no-unused-prop-types */
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Fab,
} from '@mui/material';
import classes from './styles';

interface Props{
  id:string;
  title: string;
  img:string;
  crew:string;
  imbdRating:number;
  rank:number;
  year:number;
}

function MovieCard({
  title, img, crew, imbdRating, rank, year,
}:Props) {
  return (
    <Card sx={classes.card}>
      <Fab color="primary" aria-label="add" sx={classes.fab}>
        {rank}
      </Fab>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
          {`${title}-${year}`}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={`image${title}`}
        height="200"
        image={img}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>Crew: </b>
          {crew}
        </Typography>
        <Typography variant="body2" color="text.secondary" data-testid="test-imdbRating">
          <b>imDb Rating: </b>
          {imbdRating}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
