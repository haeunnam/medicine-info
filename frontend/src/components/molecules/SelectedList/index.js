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
        {/* {medicines.map((medicine) => (     
          <SelectItem key={medicine} medicine={medicine} onDelete={onDelete} />
        ))} */}
      </StyledTable>
    </>
  );
}

export default SelectedList;
