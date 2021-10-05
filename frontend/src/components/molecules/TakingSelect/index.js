import { Wrapper, SelectionButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import {setDurMedi} from '../../../modules/medicines';

const MyMediItem = ({ medicine}) => {
  const DEFAULT_IMG =
    "https://3.bp.blogspot.com/-ZKBbW7TmQD4/U6P_DTbE2MI/AAAAAAAADjg/wdhBRyLv5e8/s1600/noimg.gif";
  const dispatch = useDispatch();
  function chooseMedi(durObj){
    console.log(durObj);
    dispatch(setDurMedi(durObj));
  }
    return (
    <Wrapper>
      <img
        className="medicine-img"
        src={medicine.image ? medicine.image : DEFAULT_IMG}
        alt="medicine"
      />
      <div className="content">
        <h1 className="medicine-name">{medicine.name}</h1>
      </div>
      <div onClick={chooseMedi(medicine)}>
        <SelectionButton>
          <MdCheckBoxOutlineBlank className="icon-box" />
        </SelectionButton>
      </div>
    </Wrapper>
  );
};

export default MyMediItem;
