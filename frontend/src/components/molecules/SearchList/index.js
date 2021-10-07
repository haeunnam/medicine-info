import {
  LikeContainer,
} from './styles';
import SearchItem from '../SearchItem';

function SearchList({
  options,
  onMedicineClick,
}) {
  const listHeight = window.innerHeight - 650;
 

  return (
    <>
      <LikeContainer height={listHeight}>
        {options.map((option,idx) => (    
          <SearchItem key={idx} medicine={option} onMedicineClick={onMedicineClick}/> 
        ))}
      </LikeContainer>
    </>
  )
}
export default SearchList;
