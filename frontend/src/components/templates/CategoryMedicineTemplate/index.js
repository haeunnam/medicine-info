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
  return (
    <>
      <Header isBack title={categoryName} />
      <Wrapper onScroll={(e) => handleInfiniteScroll(e, categoryName)}>
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
