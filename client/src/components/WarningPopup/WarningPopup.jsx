import React, { useState } from "react";
import warning from "../../assets/images/warning.svg";
import "./WarningPopup.css";

const WarningPopup = ({ close }) => {
  const [popup] = useState(false);
  const inactive = "warning_popup";
  const active = "warning_popup__opened";

  return (
    <>
      <div className={popup ? active : inactive} onClick={() => close(false)}>
        <div className="warning_popup__container" onClick={e => e.stopPropagation()}>
          <img className="warning_popup__image" src={warning} alt="warning" />
          <h3 className="warning_popup__title">At the moment, payment is not available</h3>
        </div>
      </div>
    </>
  );
};

export default WarningPopup;
