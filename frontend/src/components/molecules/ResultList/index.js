import {StyledLabel, Wrapper} from './styles';
import DurItem from '../../atoms/DurItem';
import {IoIosArrowForward} from 'react-icons/io';
import {useState} from 'react';
function ResultList({
  Durtype,
  Durs,
  imgName,
  ...rest
}) {
  const [isShow, setShow] = useState(false);
  function onClick(){
    setShow((prev)=>!prev);
  }
  return (
    <Wrapper>
     <div className="with-icon">
        <img className="icon-img"  src={require(`../../../assets/images/${imgName}.png`).default} alt="" />
        <StyledLabel {...rest} isDur={Durs.length} onClick={onClick}>{Durtype}({Durs.length})</StyledLabel>
      </div>
      { Durs && isShow? 
          (Durs.map((Dur,idx) => (     
              <DurItem key={idx} Dur={Dur} />
          )))
        :("")
      }
    </Wrapper>
  );
}

export default ResultList;