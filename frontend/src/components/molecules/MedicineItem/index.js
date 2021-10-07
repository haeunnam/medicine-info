import { Wrapper } from "./styles";
import { Icon } from "@iconify/react";

const MedicineItem = ({ medicine, onMedicineClick }) => {
  const DEFAULT_IMAGE = "/img/no-image.png"
  return (
    <Wrapper
      onClick={() => onMedicineClick(medicine.medicineId || medicine.id)}
    >
      {medicine ? (
        <>
          <img
            className="medicine-img"
            src={medicine.image ? medicine.image : DEFAULT_IMAGE}
            alt="medicine"
          />
          <div className="content">
            <h2 className="medicine-company">{medicine.company}</h2>
            <h1 className="medicine-name">
              {medicine?.name.length > 18
                ? medicine.name.substring(0, 14) + "..."
                : medicine.name}
            </h1>
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
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default MedicineItem;
