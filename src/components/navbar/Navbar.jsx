import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Navbar = ({ categories, setGetCategory }) => {
  return (
    <Paper sx={{ m: "12vh auto 16vh auto !important", width: "250px" }}>
      <List sx={{ mb: 2 }}>
        {categories.map(({ category, numberOfRestaurants }) => (
          <React.Fragment key={category}>
            <ListItem
              button
              onClick={(e) => {
                e.preventDefault();
                setGetCategory(category);
              }}
            >
              <ListItemText
                primary={category}
                secondary={`${numberOfRestaurants} Restaurants`}
                style={{ textTransform: "capitalize" }}
              />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default Navbar;
