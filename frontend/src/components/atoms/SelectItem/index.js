import {ItemContainer} from './styles';
import {RiDeleteBin6Fill} from 'react-icons/ri';


function SelectItem({
  medicine,
  onDelete,
  idx
}) {
  return (
    <ItemContainer onClick={() => onDelete(medicine)}>
      <div className="id-box">{idx+1}</div>
      <div className="name-box">{ medicine.name}</div>
      <RiDeleteBin6Fill className="icon"/>
    </ItemContainer>
  );
}
export default SelectItem;