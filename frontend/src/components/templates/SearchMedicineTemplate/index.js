import { useSelector } from "react-redux";
import Input from "../../atoms/Input";
import CategoryBox from "../../molecules/CategoryBox";
import FooterNav from "../../molecules/FooterNav";
import Header from "../../molecules/Header";
import MedicineItem from "../../molecules/MedicineItem";
import { Wrapper, CategoryContainer, MedicineContainer } from "./styles";

function SearchMedicineTemplate({
  keyword,
  handleTextChange,
  onMedicineClick,
  onCategoryClick,
  handleInfiniteScroll,
}) {
  const category = [
    "소화기계약",
    "호흡기약",
    "해열,진통,소염제",
    "피부약",
    "구충제",
    "신경계",
    "피임약",
    "영양제",
    "외용제",
    "기타",
  ];
  const searchMedicines = useSelector(
    (state) => state.medicineReducer.searchMedicines
  );
  const listHeight = window.innerHeight - 205;

  return (
    <>
      <Header isLogo />
      <Wrapper>
        <div className="input-box">
          <Input
            value={keyword || ""}
            name="keyword"
            placeholder="약 이름을 입력하세요"
            onChange={(e) => handleTextChange(e)}
          />
        </div>
        {searchMedicines ? (
          <MedicineContainer
            height={listHeight}
            onScroll={handleInfiniteScroll}
          >
            {searchMedicines.map((medicine, idx) => (
              <MedicineItem
                medicine={medicine}
                key={idx}
                onMedicineClick={onMedicineClick}
              />
            ))}
          </MedicineContainer>
        ) : (
          <>
            <h1 className="category">카테고리</h1>
            <CategoryContainer>
              {category?.map((name, idx) => (
                <CategoryBox
                  children={name}
                  key={idx}
                  onCategoryClick={onCategoryClick}
                />
              ))}
            </CategoryContainer>
          </>
        )}
      </Wrapper>
      <FooterNav />
    </>
  );
}

export default SearchMedicineTemplate;
