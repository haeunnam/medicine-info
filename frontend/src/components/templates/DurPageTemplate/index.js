import React from "react";
import Button from '../../atoms/Button';
import Header from "../../molecules/Header";
import FooterNav from "../../molecules/FooterNav";
import { DurContainer } from "./styles";
import Input from "../../atoms/Input";
import MenuLabel from "../../atoms/MenuLabel";
import SelectedList from "../../molecules/SelectedList";
import ResultList from '../../molecules/ResultList';
import TogetherList from "../../molecules/TogetherList";
import SearchList from "../../molecules/SearchList";
import OverlapList from '../../molecules/OverlapList';
function DurPageTemplate({
  isActive,
  medicines,
  requestDur,
  cols,
  Durs,
  searchMedicines,
  onMedicineClick,
  handleTextChange,
  keyword,
  onDelete,
  nextId,
  isShow
}) {
  return (
    <>
      <Header title="복용 주의 약 조회" isBack />
      <DurContainer labeld="DurSearch" type="text">
        <div className="search-box">
          <Input  placeholder="약 검색" name="keyword" value={keyword || ""} onChange={(e) => handleTextChange(e)}/>
        </div>
        { searchMedicines && isShow? 
          (<SearchList options={searchMedicines} onMedicineClick={onMedicineClick}/>)
            : (""
            )
        }
        <div>
          <div className="bucket">
            <MenuLabel children="선택한 약"/>
          </div>
          <SelectedList medicines={medicines} cols={cols} onDelete={onDelete} nextId = {nextId} />
        </div>
        <Button children="확인하기" size="medium" onClick={requestDur} className="check-button" />
        <MenuLabel children="결과조회" />
        { !isShow ?
          (<div className="result-box">
            <TogetherList Durs={Durs.together} Durtype="범용금기"/>
            <ResultList Durs={Durs.pregnancy} Durtype="임부금기"/>
            <ResultList Durs={Durs.child} Durtype="어린의 주의"/>
            <ResultList Durs={Durs.time} Durtype="복용기간 주의"/>
            <ResultList Durs={Durs.capacity} Durtype="용량주의"/>
            <OverlapList Durs={Durs.overlap} Durtype="효능중복주의"/>
          </div>)
          : ("")
        }
      </DurContainer>
      <FooterNav isActive={isActive} />
    </>
  );
}

export default DurPageTemplate;
