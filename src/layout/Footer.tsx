import React from 'react';

const Footer = () => {
    return (
      <div>
        <footer>
          <div className="py-5 bg-dark text-light">
            <div className="container">
              <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1">
                <div className="col text-start d-flex flex-column align-self-center">
                  <h5 className="mt-4 logo">
                    <span className="text-danger">Photo</span>Craft{" "}
                    <span className="text-light">&copy; 2021</span>
                  </h5>
                </div>
                <div className="col text-start">
                  <h3 className="text-primary">Company</h3>
                  <ul className="list-unstyled text-secondary">
                    <li>About</li>
                    <li>Courses</li>
                    <li>Events</li>
                    <li>Become a Teacher</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div className="col text-start">
                  <h3 className="text-warning">Platform</h3>
                  <ul className="list-unstyled text-secondary">
                    <li>Browse Library</li>
                    <li>Library</li>
                    <li>Partners</li>
                    <li>News & Blogs</li>
                    <li>Career</li>
                    <li>FAQs</li>
                    <li>Tutorials</li>
                  </ul>
                </div>
                <div className="col text-start">
                  <h3 className="text-danger">Subscribe</h3>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      id="button-addon2"
                    >
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;