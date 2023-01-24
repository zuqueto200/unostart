import React, {useEffect, useRef, useState} from "react";
import "./index.css";
import Check from "../../assets/images/svgs/check.svg";

export default function Checkbox(props) {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(props.status);
  }, [props]);

  return (
    <span>
      {status ? (
        <span className="checkboxCheio">
          <img src={Check} alt="checkbox ativo" />
        </span>
      ) : (
        <span className="checkboxVazio"></span>
      )}
    </span>
  );
}
