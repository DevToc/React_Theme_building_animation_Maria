import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Navbar, Stack } from "react-bootstrap";
import { FaBalanceScale, FaChevronDown, FaRegHeart, FaSearch, FaShoppingBag } from "react-icons/fa";

import HomeMenu from "./PageMenu/HomeMenu";
import "./Header.scss";

const headers = ["About", "Our Stores", "FAQ's", "Contact"];

const pages = [
  "HOME",
  "SHOP",
  "WOMENS",
  "MEN'S",
  "TODAY'S DEALS",
  "PAGES",
  "BLOG",
];

const menus = [<HomeMenu />];

const Header = () => {
  return (
    <Stack>
      <Navbar className="top-header">
        <Container className="d-flex justify-space-between">
          <div className="left">
            <ul>
              {headers.map((item, index) => {
                return (
                  <li>
                    <a href="">{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="">
                  Wishlist <FaRegHeart></FaRegHeart>{" "}
                </a>
              </li>
              <li>
                <a href="">
                  Compare <FaBalanceScale size={18}></FaBalanceScale>{" "}
                </a>
              </li>
              <li>
                <select name="" id="">
                  <option value="">Eng</option>
                  <option value="">Ger</option>
                  <option value="">Span</option>
                </select>
              </li>
            </ul>
          </div>
        </Container>
      </Navbar>
      <Navbar className="page">
        <Container className="d-flex justify-space-between align-items-center position-relative">
          <div className="logo d-flex align-items-center">
            <a href="">Novine</a>
          </div>
          <div>
            <ul class="nav">
              {pages.map((item, index) => {
                return (
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      {item}
                      <FaChevronDown></FaChevronDown>
                    </a>
                    {/* {menus[index]} */}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="auth">
              <ul>
                <li>
                  <FaSearch></FaSearch>
                </li>
                <li>
                  <a href="">LOGIN</a>
                </li>
                <li>
                  <a href="">CART(0)<FaShoppingBag></FaShoppingBag></a>
                </li>
              </ul>
          </div>
        </Container>
      </Navbar>
    </Stack>
  );
};

export default Header;
