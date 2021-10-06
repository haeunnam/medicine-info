import {ImSearch} from 'react-icons/im';
import {Wrapper, StyledInput} from './styles';
function SearchBar({
  placeholder,
  labelId,
  onChange,
  type,
  value,
}) {
  return (
    <>
      <Wrapper>
        <StyledInput type={type} id={labelId} onChange={onChange} value={value} placeholder={placeholder} />
        <ImSearch className="icon-box"/>
      </Wrapper>
    </>
  );
}

export default SearchBar;