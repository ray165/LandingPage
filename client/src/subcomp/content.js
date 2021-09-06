import React, { useRef, useState } from "react";
import { Typography, TextField, Button} from "@material-ui/core/";
import DOMPurify from "dompurify";
import MotionPicture from './motionPic';
import Product from './product'

// Test data:

var testData = {
  "product1": { 
    "name": "Dev Shirt", 
    "description": "Ready to tell the world you code? Wear this!",
    "code" : "p2211",
    "price" : "$42.99"
  },
  "product2": {
    "name" : "Le Mug", 
    "description" : "Primitive drinking tool",
    "code" : "p2212",
    "price" : "$16.32"
  }, 
  "product3": {
    "name": "Drum Stick", 
    "description" : "Korean fried",
    "code" : "p2213",
    "price" : "$100"
  } 
}

function Content() {
  const [inputError, setInputError] = useState(false);
  const [anime, setAnime] = useState(false)
  const [errText, setErr] = useState(null)
  const email = useRef();

  function checkValid() {
      let clean = DOMPurify.sanitize(email.current.value)
      // An email must atleast include an @ and a .
      if (clean.includes(".") && clean.includes("@")) {
        let data = {
            email: clean,
        }
        fetch("/save", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json", // content type is needed as well!!!
            },
        })
        .then((data) => data.json())
        .then((res) => {
            console.log(res)
            if (res.status === "success") {
                setAnime(true) // start the motion 
            }
        })
        .catch((err) => {
            console.error(err)
            setErr("Fetch request failed!")
        })
        
      } else {
          setInputError(true);
          setErr("Please provide a correct email!");
      }
  }

  return (
    <>
      <Typography variant="h1">preorder now. <br/> wear it later.</Typography>
      <form autoComplete="on">
        <TextField
          useRef={email}
          id="standard-basic"
          name="email"
          error={inputError}
          helperText={errText}
        >
        </TextField>
        <Button variant="contained" color="primary" onClick={checkValid}>
          Submit
        </Button>
      </form>
      <Product data={testData}/>
      <MotionPicture anime={anime} setAnime={setAnime}/>
    </>
  );
}

export default Content;
