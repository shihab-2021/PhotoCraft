import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { productId } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch();
    }, []);
    console.log(data);

    const itemDetail = data.filter((td) => td._id === productId);
    console.log(itemDetail[0], productId);
    return (
      <div className="container py-4">
        <h3>Title: {itemDetail[0]?.product_name}</h3>
        <h3>Price: {itemDetail[0]?.product_price}</h3>
        <img className="img-fluid" src={itemDetail[0]?.image1} alt="" />
        <h4>{itemDetail[0]?.detail}</h4>
      </div>
    );
};

export default Details;