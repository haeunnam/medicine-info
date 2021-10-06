import SelectItem from '../../atoms/SelectItem';
import {StyledTable} from './styles';
import SelectHead from '../../atoms/SelectHead';

//약품들 보여주는 곳
function SelectedList({
  medicines,
  cols,
  onDelete,

}) {
  return (
    <>
      <StyledTable>
        <SelectHead cols={cols} />
        { medicines ?
          (medicines.map((medicine,idx) => (     
            <SelectItem key={idx} medicine={medicine} onDelete={onDelete} idx={idx}/>
          )))
        : ("")}
      </StyledTable>
    </>
  );
}

export default SelectedList;
