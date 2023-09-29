import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Styles from "./Form.module.css";
import { fetchGiftRecommendation } from "../../redux/giftSlice";

export const Form = () => {
  const [payload, setPayload] = useState({});
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.gift);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPayload({
      ...payload,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("generate button clicked");
    dispatch(fetchGiftRecommendation(payload));
  };

  return (
    <div className={Styles.form}>
      <div className={Styles.formElement}>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          min={0}
          max={100}
          onChange={handleChange}
        />
      </div>
      <div className={Styles.formElement}>
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" onChange={handleChange}>
          <option value="">Select Gender...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className={Styles.formElement}>
        <label htmlFor="interest">Interest</label>
        <input
          type="text"
          name="interest"
          id="interest"
          onChange={handleChange}
        />
      </div>
      <div className={Styles.formElement}>
        <button onClick={handleSubmit}>Generate Gift Ideas</button>
      </div>
    </div>
  );
};
