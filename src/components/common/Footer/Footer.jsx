import React from "react";
import { Container, Stack } from "react-bootstrap";
import { FaFax, FaMailBulk, FaMailchimp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import "./Footer.scss"

const imgs = ["1.png","2.png","3.png","4.png","5.png"]

const Footer = () => {
  return (
    <Stack>
      <Container>
        <Stack direction="horizontal">
          <Stack className="col-md-1">
            <h2>Novine</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
          </Stack>
          <Stack gap={1} className="col-3 quick-links">
            <h3 className="subtitle">QUICK LINKS</h3>

            <li>
              <a href="">ABOUT US</a>
            </li>
            <li>
              <a href="">FAQ'S</a>
            </li>
            <li>
              <a href="">CUSTOMER SERVICES</a>
            </li>
            <li>
              <a href="">CONTACT US</a>
            </li>
          </Stack>
          <Stack gap={1} className="col-3 quick-links">
            <h3 className="subtitle">INFORMATION</h3>

            <li>
              <a href="">ABOUT US</a>
            </li>
            <li>
              <a href="">CONTACT US</a>
            </li>
            <li>
              <a href="">SIZING GUIDE</a>
            </li>
            <li>
              <a href="">CUSTOMER SERVICES</a>
            </li>
          </Stack>

          <Stack gap={1} className="col-3 quick-links">
            <h3 className="subtitle">Contact us</h3>
            <p> <FaMapMarkerAlt></FaMapMarkerAlt>  Location: 2750 Quadra Street Victoria, Canada</p>
            <p><FaPhone></FaPhone> Call Us: (+123) 456-7898</p>
            <p><AiOutlineMail></AiOutlineMail > Email Us: support@novine.com</p>
            <p><FaFax></FaFax> Fax: +123456</p>
          </Stack>
        </Stack>
      </Container>
      <Stack className="copyright">
        <Container>
          <div className="d-flex justify-space-between">
            <div>
              <p>
              Copyright @ 2020 Novine. All Rights Reserved By <a href="" style={{color:'#1b28ce'}}>EnvyTheme.com</a> 
              </p>
            </div>
            <Stack direction="horizontal" gap={1}>
                <ul>
                <li>
                  <a href="">
                    <img src="/static/assets/img/1.png" alt="" />
                  </a>
                </li>

                <li>
                  <a href="">
                    <img src="/static/assets/img/2.png" alt="" />
                  </a>
                </li>

                <li>
                  <a href="">
                    <img src="/static/assets/img/3.png" alt="" />
                  </a>
                </li>

                <li>
                  <a href="">
                    <img src="/static/assets/img/4.png" alt="" />
                  </a>
                </li>

                <li>
                  <a href="">
                    <img src="/static/assets/img/5.png" alt="" />
                  </a>
                </li>
                </ul>
            </Stack>

          </div>
        </Container>
      </Stack>
    </Stack>
  );
};

export default Footer;
