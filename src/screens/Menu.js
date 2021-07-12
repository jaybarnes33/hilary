import React from "react";
import { Container } from "react-bootstrap";
import MenuItem from "../components/MenuItem";
import styles from "../styles/menu.module.css";
const menuData = [
  {
    icon: "bi bi-plane",
    name: "travel history",
    color: "red",
    to: "travel",
  },
  {
    icon: "bi bi-handshake",
    name: "contact history",
    color: "gold",
    to: "contact",
  },
  {
    icon: "bi bi-plane",
    name: "symptoms",
    color: "green",
    to: "symptoms",
  },
  {
    icon: "bi bi-question",
    name: "what next?",
    color: "red",
    to: "what-to-do",
  },
];

const Menu = () => {
  return (
    <Container>
      <div className={styles.container}>
        {menuData.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            color={item.color}
            icon={item.icon}
            to={item.to}
          />
        ))}
      </div>
    </Container>
  );
};

export default Menu;
