import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div
      className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Get In Touch</h3>
            <p className="mb-2">
              <FontAwesomeIcon
                style={{ width: "20px" }}
                icon={faMapMarkerAlt}
                className="me-3"
              />
              123 Street, New York, USA
            </p>
            <p className="mb-2">
              <FontAwesomeIcon
                style={{ width: "20px" }}
                icon={faPhoneAlt}
                className="me-3"
              />
              +012 345 67890
            </p>
            <p className="mb-2">
              <FontAwesomeIcon
                style={{ width: "20px" }}
                icon={faEnvelope}
                className="me-3"
              />
              info@example.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a className="btn btn-outline-light btn-social" href="">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Quick Links</h3>
            <a className="btn btn-link text-white-50" href="">
              About Us
            </a>
            <a className="btn btn-link text-white-50" href="">
              Contact Us
            </a>
            <a className="btn btn-link text-white-50" href="">
              Our Services
            </a>
            <a className="btn btn-link text-white-50" href="">
              Privacy Policy
            </a>
            <a className="btn btn-link text-white-50" href="">
              Terms & Condition
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Photo Gallery</h3>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src="./classes-1.jpg"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src="./classes-2.jpg"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src="./classes-3.jpg"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src="./classes-4.jpg"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src="./classes-5.jpg"
                  alt=""
                />
              </div>
              <div className="col-4">
                <img
                  className="img-fluid rounded bg-light p-1"
                  src="./classes-6.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Newsletter</h3>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5 text-white"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved. Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>
              <br />
              Distributed By:{" "}
              <a
                className="border-bottom"
                href="https://themewagon.com"
                target="_blank"
              >
                ThemeWagon
              </a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
