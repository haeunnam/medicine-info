import {DurContainer} from './styles';

function DurItem({
  Dur,
}) {
  return (
    <DurContainer>
      <div className="content-box">{ Dur.medicine_id } : {Dur.content} </div>
    </DurContainer>
  );
}
export default DurItem;