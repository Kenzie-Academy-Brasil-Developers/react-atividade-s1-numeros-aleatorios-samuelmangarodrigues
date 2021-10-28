import { useState } from "react";
import "./style.css";
const RandonNum = () => {
  const [randonNum, setRandonNum] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const randon = () => {
    setRandonNum(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <>
      <div className="container">
        <span className="Randon">{randonNum}</span>
      </div>
      <button className="Btns" onClick={randon}>
        Novo número
      </button>
    </>
  );
};
export default RandonNum;
