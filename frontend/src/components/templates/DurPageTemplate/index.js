import React from "react";
import Button from '../../atoms/Button';
import Header from "../../molecules/Header";
import FooterNav from "../../molecules/FooterNav";
import { DurContainer } from "./styles";
import SearchBar from "../../molecules/SearchBar";
import MenuLabel from "../../atoms/MenuLabel";
import Label from "../../atoms/Label";
import SelectedList from "../../molecules/SelectedList";
import ResultList from '../../molecules/ResultList';
import { Result } from "postcss";
function DurPageTemplate({
  isActive,
  medicines,
  onDelete,
  requestDur,
  cols,
  Durs,
  onShow,
}) {
  return (
    <>
      <Header title="복용 주의 약 조회" isBack />
      <DurContainer labeld="DurSearch" type="text">
        <div className="search-box">
          <SearchBar  placeholder="약 검색" />
        </div>
        <div>
          <div className="bucket">
            <MenuLabel children="선택한 약"/>
            <Label className="bucket-button" children="복용중인 약" />
          </div>
          <SelectedList medicines={medicines} onDelete={onDelete} cols={cols} />
        </div>
        <Button children="확인하기" size="medium" onClick={requestDur} className="check-button" />
        <div className="result-box">
          <MenuLabel children="결과조회" />
          <ResultList Durs={Durs.durs} Durtype="범용금기" onShow={onShow} />
          <ResultList Durs={Durs.preg} Durtype="임부금기"/>
          <ResultList Durs={Durs.child} Durtype="어린의 주의"/>
          <ResultList Durs={Durs.time} Durtype="복용기간 주의"/>
          <ResultList Durs={Durs.capa} Durtype="용량주의"/>
          <ResultList Durs={Durs.overlap} Durtype="효능중복주의"/>
        </div>
      </DurContainer>
      <FooterNav isActive={isActive} />
    </>
  );
}

export default DurPageTemplate;
