import {HeadContainer} from './styles';

function SelectHead({
  cols,
}) {
  return (
    <HeadContainer>
      <div className="id-box">{cols.id}</div>
      <div className="name-box">{ cols.name }</div>
      <div className="delete-box">{ cols.delete }</div>
    </HeadContainer>
  );
}
export default SelectHead;