import {StyledLabel} from './styles';
import DurItem from '../../atoms/DurItem';
import {IoIosArrowForward} from 'react-icons/io';
import {useState} from 'react';
function ResultList({
  Durtype,
  Durs,
  ...rest
}) {
  const [isShow, setShow] = useState(false);
  function onClick(){
    setShow((prev)=>!prev);
  }
  return (
    <>
      <StyledLabel {...rest} onClick={onClick}><IoIosArrowForward className="icon" />{Durtype}({Durs.length})</StyledLabel>
      { Durs && isShow? 
          (Durs.map((Dur,idx) => (     
              <DurItem key={idx} Dur={Dur} />
          )))
        :("")
      }
    </>
  );
}

export default ResultList;