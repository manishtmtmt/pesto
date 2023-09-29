import React from "react";

import Styles from "./Home.module.css";
import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";

export const Home = () => {
  return (
    <div>
      <Header />
      <Form />
    </div>
  );
};
