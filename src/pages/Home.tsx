import React, { useEffect, useInsertionEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchServices } from "../app/Slice/serviceSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import "../sass/Home.scss";

const Home = () => {
  // const { isLoading, services, error } = useSelector(
  //   (state: any) => state.services
  // );
  // console.log(services);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // dispatch(fetchServices());
  // });
  // useEffect(() => {
  //   dispatch(fetchServices());
  // }, []);
  // const [services, setServices] = useState([]);
  const services = useAppSelector((state) => state.services.services);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchServices());
  }, []);
  return (
    <div>
      {/* Showcase section  */}
      <section id="showcase">
        <div className="d-flex flex-column container align-self-center">
          <h1 className="logo">
            <span className="text-danger">Photo</span>Craft
          </h1>
          <h5 className="slogan mb-3">Learn photography in creative way</h5>
          <p>
            <small>
              Photography is a way of feeling, of touching, of loving.
            </small>
          </p>
          <p>
            <small>What you have caught on film is captured forever…</small>
          </p>
          <p>
            <small>
              It remembers little things, long after you have forgotten
              everything.
            </small>
          </p>
          <button className="d-inline-block btn mt-3 btn-outline-info">
            <Link to="/tutorial" className=" text-info">
              Start Tutorial for Free
            </Link>
          </button>
        </div>
      </section>
      {/* section for about photography */}
      <section id="about_pg container" className="my-5">
        <div className="text-center container">
          <h1 className="text-info">Photography</h1>
          <p className="container px-5 py-4 text-secondary">
            Photography is the art, application, and practice of creating
            durable images by recording light, either electronically by means of
            an image sensor, or chemically by means of a light-sensitive
            material such as photographic film. It is employed in many fields of
            science, manufacturing (e.g., photolithography), and business, as
            well as its more direct uses for art, film and video production,
            recreational purposes, hobby, and mass communication.
          </p>
          <img
            className="img-fluid"
            src="https://v1.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/static/optimized/rev-c7f7b63/wp-content/uploads/2017/12/Best_Photography_Quotes_Shotkit_002-1.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="pb-4 container">
        <div>
          <h1 className="text-center text-success py-5">Services</h1>
          <div className="row row-cols-1 row-cols-md-2 g-2 g-lg-3">
            {services?.map((service: any) => (
              <div className="col" key={service._id}>
                <div className="details mb-3 d-flex flex-lg-row flex-md-column flex-column">
                  <div className="mb-2 align-self-center">
                    <img
                      src={service.image1}
                      className="product-image image-fluid rounded-3"
                      alt=""
                    />
                  </div>
                  <div className="card-body pl-2 d-flex flex-column align-self-center">
                    <h5 className="text-primary">{service.product_name}</h5>
                    <p>{service.detail}</p>
                    <small className="text-primary pb-3">
                      Click More Details for more information
                    </small>
                    <p>Price: {service.product_price}</p>
                    <Link to={`/details/${service?._id}`} className="navLink">
                      <button
                        id="addToCart-btn"
                        className="buy-now btn btn-secondary mt-3"
                      >
                        View More
                      </button>
                    </Link>
                    <Link to={`/addToCart/${service?._id}`} className="navLink">
                      <button
                        id="addToCart-btn"
                        className="buy-now btn btn-secondary mt-3"
                      >
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
