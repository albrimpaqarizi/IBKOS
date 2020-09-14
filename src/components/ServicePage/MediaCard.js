import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  media: {
    maxWidth: 345,
    borderRadius: "6px",
    margin: "1.5%",
    "& button:focus": {
      outline: "none",
    },
  },
});

const MediaCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.media}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <h3 className="font-r text-col3 my-2 text-center">{props.title} </h3>
          <p className="font-r text-col1 text-center">{props.desc} </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default MediaCard;
