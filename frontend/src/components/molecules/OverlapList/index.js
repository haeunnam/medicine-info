import {StyledLabel} from './styles';
import OverlapItem from '../../atoms/OverlapItem';
import { Wrapper } from './styles';
import {useState } from 'react';
function OverlapList({
  Durtype,
  Durs,
  medicines,
  ...rest
}) {
  const [isShow, setShow] = useState(false);
  const mediKinds = Durs.map((Dur) => Dur.medicines).map((medi)=> medi.map((m)=> m.name))
  let total = 0
  for (let i = 0; i < mediKinds.length; i++){
    total += mediKinds[i].length
  }

  function onClick(){
    setShow((prev)=>!prev);
  }

  return (
    <Wrapper>
      <div className="with-icon">
        <img className="icon-img"  src={require(`../../../assets/images/overlap.png`).default} alt="" />
        <StyledLabel {...rest} isDur={total} onClick={onClick}>{Durtype}({total})</StyledLabel>
      </div>
      { Durs && isShow ? 
          (Durs.map((Dur,idx) => (     
              <OverlapItem key={idx} Dur={Dur} medicines={Dur.medicines} />
          )))
        :("")
      }
    </Wrapper>
  );
}

export default OverlapList;