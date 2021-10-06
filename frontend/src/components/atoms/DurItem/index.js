import {DurContainer} from './styles';

function DurItem({
  Dur,
}) {
  return (
    <DurContainer>
      <div className="content-box"><p className="font-box">{ Dur.medicine.name } </p>: {Dur.content} </div>
    </DurContainer>
  );
}
export default DurItem;