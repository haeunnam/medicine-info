import {DurContainer, DurName} from './styles';

function OverlapItem({
  Dur,
  medicines,
}) {
  return (
    <DurContainer>
    { medicines ? 
      (medicines.map((medi,idx) =>
        <>
          <div className="content-box"> 효능 중복 : { Dur.efficacy } </div>
          <DurName key={idx} className="font-box">{medi.name}</DurName>
        </>
        )):
        ("")
      }
    </DurContainer>
  );
}
export default OverlapItem;