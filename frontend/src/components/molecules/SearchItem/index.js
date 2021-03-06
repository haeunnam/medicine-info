import { Wrapper } from "./styles";
import { Icon } from "@iconify/react";

const SerachItem = ({ medicine, onMedicineClick}) => {
  const DEFAULT_IMG =
    "https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif";

  return (
    <Wrapper 
      onClick={() => onMedicineClick(medicine)}
    >
      { medicine ? (
        <>
          <img
            className="medicine-img"
            src={medicine.image ? medicine.image : DEFAULT_IMG}
            alt="medicine"
          />
          <div className="content">
            <h2 className="medicine-company">{medicine.company}</h2>
            <h1 className="medicine-name">{medicine.name}</h1>
            <div className="medicine-rating">
              <Icon icon="bx:bxs-star" className="rating-star" />
              <strong className="rating-score">
                {medicine.avgScore}
                {medicine.score}
              </strong>
            </div>
            <h2 className="medicine-kind">{medicine.category}</h2>
          </div>
        </>
      ) : (""
        )}
    </Wrapper>
  );
};

export default SerachItem;
