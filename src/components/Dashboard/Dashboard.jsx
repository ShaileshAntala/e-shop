import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import productsList from "../products";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = useSelector(
    (store) => store.authentication.isUserLoggedIn
  );

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [isUserLoggedIn, navigate]);
  return (
    <div className={styles.container}>
      <br />
      {productsList.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Dashboard;
