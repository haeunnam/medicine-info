import { Wrapper, DeleteButton } from "./styles";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router";
import {AiOutlineClose} from 'react-icons/ai';
const MyMediItem = ({ medicine, DeleteMine, onMedicineClick }) => {
  const history = useHistory();
  const DEFAULT_IMAGE = "/img/no-image.png"
  return (
    <Wrapper
    >
      
      <img
        className="medicine-img"
        src={medicine.image ? medicine.image : DEFAULT_IMAGE}
        alt="medicine"
      />
      <div className="content"  onClick={() => onMedicineClick(medicine.medicineId || medicine.id)}>
        <h2 className="medicine-company">{medicine.company}</h2>
        <h1 className="medicine-name">{medicine.name}</h1>
        <div className="medicine-rating">
          <Icon icon="bx:bxs-star" className="rating-star" />
          <strong className="rating-score">{medicine.score}</strong>
        </div>
        <h2 className="medicine-kind">{medicine.category}</h2>
      </div>
      <DeleteButton>
        <AiOutlineClose className="icon-box" onClick={() => DeleteMine(medicine.id)} />
      </DeleteButton>
    </Wrapper>
  );
};

export default MyMediItem;
