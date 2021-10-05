import {StyledLabel} from './styles';
import TogetherItem from '../../atoms/TogetherItem';
import {IoIosArrowForward} from 'react-icons/io';
function TogetherList({
  Durtype,
  Durs,
  ...rest
}) {
  return (
    <>
      <StyledLabel {...rest}><IoIosArrowForward className="icon" />{Durtype}({Durs.length})</StyledLabel>
      {Durs.map((Dur) => (     
          <TogetherItem key={Dur} Dur={Dur} />
        ))}
    </>
  );
}

export default TogetherList;