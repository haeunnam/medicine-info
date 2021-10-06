import {StyledLabel} from './styles';
import OverlapItem from '../../atoms/OverlapItem';
import {IoIosArrowForward} from 'react-icons/io';
import {useState } from 'react';
function OverlapList({
  Durtype,
  Durs,
  medicines,
  ...rest
}) {
  const [isShow, setShow] = useState(false);
  function onClick(){
    setShow((prev)=>!prev);
  }
  return (
    <>
      <StyledLabel {...rest} onClick={onClick}><IoIosArrowForward className="icon" />{Durtype}({Durs.length})</StyledLabel>
      { Durs && isShow ? 
          (Durs.map((Dur,idx) => (     
              <OverlapItem key={idx} Dur={Dur} medicines={Dur.medicines} />
          )))
        :("")
      }
    </>
  );
}

export default OverlapList;