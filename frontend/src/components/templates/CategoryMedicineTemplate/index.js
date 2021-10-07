import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import FooterNav from "../../molecules/FooterNav";
import Header from "../../molecules/Header";
import MedicineItem from "../../molecules/MedicineItem";
import { Wrapper } from "./styles";

function CategoryMedicineTemplate({ onMedicineClick, handleInfiniteScroll }) {
  const categoryMedicines = useSelector(
    (state) => state.medicineReducer.categoryMedicines
  );
  const location = useLocation();
  const categoryName = location.state.categoryName;
  const listHeight = window.innerHeight - 105;
  return (
    <>
      <Header isBack title={categoryName} />
      <Wrapper height={listHeight} onScroll={(e) => handleInfiniteScroll(e)}>
        {categoryMedicines &&
          categoryMedicines.map((medicine, idx) => (
            <MedicineItem
              medicine={medicine}
              key={idx}
              onMedicineClick={onMedicineClick}
            />
          ))}
      </Wrapper>
      <FooterNav />
    </>
  );
}

export default CategoryMedicineTemplate;
