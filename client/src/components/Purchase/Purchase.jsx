import Cleave from "cleave.js/react";
import React, { useState } from "react";
import { Form } from "react-final-form";
import { IMaskInput } from "react-imask";
import { NavLink } from "react-router-dom";
import { useHttp } from "../../assets/hook/http.hook";
import WarningPopup from "../WarningPopup/WarningPopup";
import "./Purchase.css";
import s from "./Purchase.module.css";

const Purchase = () => {
  const { loading, request } = useHttp();
  const [isPopup, setIsPopup] = useState(false);

  const onSubmit = (values) => {};

  const [form, setForm] = useState({
    number: "",
    MMYY: "",
    code: "",
    name: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handlePopupRegistrClick = () => {
    setIsPopup(true);
  };

  const awaitPopup = () => {
    setTimeout(handlePopupRegistrClick, 1000);
  };

  const registerHandler = async () => {
    try {
      // eslint-disable-next-line no-undef
      const data = await request("/api/submit/submitForm", "POST", { ...form });
      // const data = await request();
      console.log("Data", data);
    } catch (e) {}
    awaitPopup();
  };

  return (
    <div className={s.cart}>
      <h1 className={s.title}>Payment Form</h1>
      <div className={s.content}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form
              method="POST"
              action="http://api/submit/submitForm"
              className={s.form}
              onSubmit={handleSubmit}
            >
              <div id="cc-exp-csc">
                <label htmlFor="">Card number</label>
                <br />
                <Cleave
                  className={s.input}
                  options={{
                    uppercase: true,
                    blocks: [4, 4, 4, 4],
                    creditCard: true,
                  }}
                  placeholder="____ ____ ____ ____"
                  onChange={changeHandler}
                  name="number"
                />
              </div>

              <div id="cc-exp-csc">
                <label htmlFor="">Name on card</label>
                <IMaskInput
                  className={s.input}
                  maxLength="50"
                  name="name"
                  onChange={changeHandler}
                />
              </div>
              <div className={s.securityWrapper}>
                <div id="cc-exp-csc-date">
                  <label htmlFor="">Expiry date</label>
                  <br />
                  <Cleave
                    className={s.inputDate}
                    options={{
                      date: true,
                      datePattern: ["m", "y"],
                      delimiters: ["/"],
                      blocks: [2, 2],
                    }}
                    placeholder="MM/YY"
                    onChange={changeHandler}
                    name="MMYY"
                  />
                </div>
                <div id="cc-exp-csc-code">
                  <label htmlFor="">CVC</label>
                  <br />
                  <IMaskInput
                    className={s.inputCode}
                    name="code"
                    mask={Number}
                    maxLength="3"
                    onChange={changeHandler}
                    placeholder="***"
                  />
                </div>
              </div>
            </form>
          )}
        ></Form>

        <div className={s.buttonWrapper}>
          <NavLink className={s.link} to="/cart">
            <button className={s.orderButtonBack}>{"< Сome back"}</button>
          </NavLink>

          <button
            className={s.orderPurchase}
            type="submit"
            disabled={loading}
            onClick={registerHandler}
          >
            {"Purchase"}
          </button>
        </div>

        {isPopup === true && <WarningPopup close={setIsPopup} />}
      </div>
    </div>
  );
};

export default Purchase;
