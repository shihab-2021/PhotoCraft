import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import useAuth from '../Firebase/useAuth';


const AddToCart = () => {
    const {user} = useAuth();
    const { productId } = useParams();
    const [data, setData] = useState([]);
    const [carData, setCarData] = useState({});
    // const { isLoading } = useAuth();
    const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newCarData = { ...carData };
      newCarData[field] = value;
      setCarData(newCarData);
    };
    const handleProductDateSubmit = (e) => {
      const product = { ...carData, email: user?.email, product_id: itemDetail[0]?._id };
      console.log(product);
      fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Successfully Added.");
            document.getElementById("Form").reset();
          }
        });
      e.preventDefault();
    };
    useEffect(() => {
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch();
    }, []);

    const itemDetail = data.filter((td) => td._id === productId);
    console.log(itemDetail[0], productId);
    return (
      <div>
        <Container>
          <form
            id="Form"
            className="my-5 p-4 rounded shadow mx-auto"
            style={{ maxWidth: "50rem" }}
            onSubmit={handleProductDateSubmit}
          >
            <Typography
              style={{ textAlign: "center" }}
              sx={{ my: 3 }}
              variant="h5"
              gutterBottom
            >
              Add To Cart
            </Typography>
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="standard-basic"
              label="Name"
              name="name"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="standard-basic"
              label="email"
              name="email"
              value={user.email}
              variant="standard"
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="standard-basic"
              label="Address"
              name="address"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="standard-basic"
              label="Phone"
              name="phone"
              onBlur={handleOnBlur}
              variant="standard"
            />

            <Button
              sx={{ width: "95%", m: 1 }}
              style={{
                backgroundColor: "crimson",
              }}
              type="submit"
              variant="contained"
            >
              Add to Cart
            </Button>
            {/* {isLoading && <CircularProgress />} */}
          </form>
        </Container>
        But when they click the buy now button it goes to the checkout page and
        fills up information(Name, Email, Address Phone) and order this service.
        (Note: this is a protected page after log in done then go to the
        checkout page)
      </div>
    );
};

export default AddToCart;