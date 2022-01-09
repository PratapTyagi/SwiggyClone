import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import { images } from "../../assets/images";

const RestaurantCard = ({ data }) => {
  const randomImage = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    return images[randomNumber];
  };
  console.log(data);
  return (
    <Card
      sx={{ maxWidth: 345, m: "20px 20px", height: "290px", width: "280px" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={randomImage()}
          alt="Restraurant image"
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            {data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      {data?.food_types?.map((d, i) => {
        if (i >= 3) return;
        return <Chip key={i} varient="p" size="small" label={d} />;
      })}
      <br />
      {data?.ratings ? (
        <Chip
          label="success"
          color="success"
          size="small"
          label={`* ${data.ratings}`}
        />
      ) : (
        "*_"
      )}
      ----
      {data?.delivery_time ? data.delivery_time : ""}
      ----
      {data?.price_for_two ? data.price_for_two : ""}
      <CardActions>
        <Button size="small" color="primary" style={{ margin: "0 auto" }}>
          Quick View
        </Button>
      </CardActions>
    </Card>
  );
};

export default RestaurantCard;
