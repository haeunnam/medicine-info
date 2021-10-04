import {StyledLabel} from './styles';
import DurItem from '../../atoms/DurItem';
import {IoIosArrowForward} from 'react-icons/io';
function ResultList({
  Durtype,
  Durs,
  ...rest
}) {
  return (
    <>
      <StyledLabel {...rest}><IoIosArrowForward className="icon" />{Durtype}({Durs.length})</StyledLabel>
      {Durs.map((Dur) => (     
          <DurItem key={Dur} Dur={Dur} />
        ))}
    </>
  );
}

export default ResultList;