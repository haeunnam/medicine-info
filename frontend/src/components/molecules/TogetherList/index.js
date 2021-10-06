import {StyledLabel} from './styles';
import TogetherItem from '../../atoms/TogetherItem';
import {IoIosArrowForward} from 'react-icons/io';
import {useState} from 'react';
function TogetherList({
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
      { Durs && isShow ? 
          (Durs.map((Dur) => (     
            <TogetherItem key={Dur} Dur={Dur} />
          )))
            : (""
            )
        }
    </>
  );
}

export default TogetherList;