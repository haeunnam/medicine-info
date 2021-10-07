import {DurContainer} from './styles';

function TogetherItem({
  Dur,
}) {
  return (
    <DurContainer>
      <div className="content-box">{ Dur.medicine1.name }과 {Dur.medicine2.name} : {Dur.content} </div>
    </DurContainer>
  );
}
export default TogetherItem;