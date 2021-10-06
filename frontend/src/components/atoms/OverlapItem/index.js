import {DurContainer, DurName} from './styles';

function OverlapItem({
  Dur,
  medicines,
}) {
  return (
    <DurContainer>
      <div className="content-box"> 효능 중복 : { Dur.efficacy } </div>
      { medicines ? 
        (medicines.map((medi,idx) =>
          <DurName key={idx} className="font-box">{medi.name}</DurName>
        )):
        ("")
      }
    </DurContainer>
  );
}
export default OverlapItem;