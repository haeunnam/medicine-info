import Input from "../../atoms/Input";
import FooterNav from "../../molecules/FooterNav";
import Header from "../../molecules/Header";
import MedicineItem from "../../molecules/MedicineItem";
import { Wrapper } from "./styles";

function SearchMedicineTemplate({
  keyword,
  handleTextChange,
  searchMedicines,
  onMedicineClick,
}) {
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
          searchMedicines.map((medicine, idx) => (
            <MedicineItem
              medicine={medicine}
              key={idx}
              onMedicineClick={onMedicineClick}
            />
          ))
        ) : (
          <span>검색어를 입력해주세요</span>
        )}
      </Wrapper>
      <FooterNav />
    </>
  );
}

export default SearchMedicineTemplate;
