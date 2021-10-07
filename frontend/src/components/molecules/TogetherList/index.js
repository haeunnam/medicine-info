import {StyledLabel, Wrapper} from './styles';
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
    <Wrapper>
      <div className="with-icon">
        <img className="icon-img"  src={require(`../../../assets/images/not-together.png`).default} alt="" />
        <StyledLabel {...rest} isDur={Durs.length} onClick={onClick}>{Durtype}({Durs.length})</StyledLabel>
      </div>
      { Durs && isShow ? 
          (Durs.map((Dur) => (     
            <TogetherItem key={Dur} Dur={Dur} />
          )))
            : (""
            )
        }
    </Wrapper>
  );
}

export default TogetherList;