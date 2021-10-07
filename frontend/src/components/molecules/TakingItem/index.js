import { Wrapper } from "./styles";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router";
import {AiOutlineClose} from 'react-icons/ai';
const MyMediItem = ({ medicine, DeleteTaking, onMedicineClick }) => {
  const history = useHistory();
  const DEFAULT_IMAGE = "/img/no-image.png"
  const now_Year = new Date().getTime();
  const taken_Year = new Date(medicine.dateTime).getTime();

  const Dday = Math.ceil((now_Year - taken_Year) / (1000*60*60*24));
    return (
    <Wrapper>
      <img
        className="medicine-img"
        src={medicine.image ? medicine.image : DEFAULT_IMAGE}
        alt="medicine"
      />
      <div className="content" onClick={() => onMedicineClick(medicine.medicineId || medicine.id)}>
        <h1 className="medicine-name">{medicine.name}</h1>
        <h2 className="medicine-taking">
          D + {Dday}
        </h2>
      </div>
      <AiOutlineClose className="icon-box" onClick={() => DeleteTaking(medicine.id)} />
    </Wrapper>
  );
};

export default MyMediItem;
