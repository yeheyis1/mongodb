import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQIJK9w97RYJB7qF0CKSnowUkyvDnqFIFonh4InZBsdJCbjNiLSLxm2OFOJ4kyb6P3vmqW7XyrjE8xaPxONE_VKeE9qmWTiozD3LnEqkW377X2DUILF_ch8zw&usqp=CAc"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Notch Neck
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           $84 <del> $500 </del>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
