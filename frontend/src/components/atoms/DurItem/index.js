import {DurContainer} from './styles';

function DurItem({
  Dur,
  onShow,
  isClicked,
}) {
  return (
    <DurContainer onClick={onShow}>
      <div className="content-box">{ Dur.medicine_id } : {Dur.content} </div>
    </DurContainer>
  );
}
export default DurItem;