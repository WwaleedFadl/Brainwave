import { companyLogos } from "../constants";
import React from "react";
const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        AI empowers innovation by transforming complex tasks into simple
        solutions, driving progress in every industry.
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => {
          return (
            <li
              className="flex items-center justify-center flex-1 h-[8.5rem]"
              key={index}
            >
              <img src={logo} width={134} height={28} alt={logo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default CompanyLogos;
