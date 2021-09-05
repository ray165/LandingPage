import React, { useState } from "react";
import { Box, Grid, IconButton, Typography, Button } from "@material-ui/core/";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

export default function Product(props) {
  var { data } = props;
  const [quantity, setQuantity] = useState(0);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (quantity <= 0) {
        setDisable(true);
    } else {
        setDisable(false);
    }
    return () => {
        setQuantity(0);
        setDisable(false);
    };
  }, [quantity, disable]);

  var removeClick = () => {
    if (quantity <= 0) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  var addClick = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <Box className="productContainer" id={data.name}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs>
            {data.name}
          </Grid>
          <Grid item xs>
            {data.description}
          </Grid>
          <Grid item xs>
            {data.description}
          </Grid>
          <Grid item xs>
            {data.price}
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <IconButton aria-label="remove" onClick={removeClick} disable={disable}>
                <RemoveCircleOutlineIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography>{quantity}</Typography>
            </Grid>
            <Grid item>
              <IconButton aria-label="add" onClick={addClick}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid >
            <Button variant="contained" color="secondary">
                add to preorder
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
