import React, { useState } from "react";
import TopBtn from "./TopBtn";
import Contract from "./Contract";

const TopVar: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<string>("계약서");

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="flex flex-col">
      <span className="text-[23px] font-bold mb-4">✍ 계약서 작성</span>
      <div className="flex mb-4 space-x-2">
        <TopBtn
          text="계약서"
          width="81.6px"
          isSelected={selectedButton === "계약서"}
          onClick={() => handleButtonClick("계약서")}
        />

        <TopBtn
          text="중개대상물 확인서"
          width="153px"
          isSelected={selectedButton === "중개대상물 확인서"}
          onClick={() => handleButtonClick("중개대상물 확인서")}
        />

        <TopBtn
          text="영수증"
          width="81.6px"
          isSelected={selectedButton === "영수증"}
          onClick={() => handleButtonClick("영수증")}
        />
      </div>
      <Contract />
    </div>
  );
};

export default TopVar;