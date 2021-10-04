import {ItemContainer} from './styles';
import {RiDeleteBin6Fill} from 'react-icons/ri';


function SelectItem({
  medicine,
  onDelete,
}) {
  return (
    <ItemContainer>
      <div className="id-box">{ medicine.id}</div>
      <div className="name-box">{ medicine.name}</div>
      <RiDeleteBin6Fill className="icon" onClick={() => onDelete(medicine.id)} />
    </ItemContainer>
  );
}
export default SelectItem;