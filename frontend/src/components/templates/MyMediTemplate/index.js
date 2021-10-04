import React from "react";
import Header from "../../molecules/Header";
import SearchBar from "../../molecules/SearchBar";
import FooterNav from '../../molecules/FooterNav';
import {
  MyPillContainer,
  LikeContainer,
} from './styles';
import MyMediItem from '../../molecules/MyMediItem';
import TabMenu from '../../molecules/TabMenu';
function MyMediTemplate({
  isActive,
  onChange,
  value,
  likepills,
  takingpills,
  activeTab,
  onTabClick,
  DeletePill,
}) {
  let tabContent;
  //약바구니에 담긴 약
  if (activeTab === 0){
    tabContent=(
      <LikeContainer>
        {likepills.map((likepill) => (     
          <MyMediItem medicine={likepill} DeletePill={DeletePill}/>
        ))}
      </LikeContainer>
    )
  }
  else {
    tabContent = (
      <LikeContainer>
        {takingpills.map((takingpill) => (     
          <MyMediItem medicine={takingpill} DeletePill={DeletePill} />
        ))}
      </LikeContainer>
    )
  }
  return (
    <>
      <Header title="나의 약" />
      <MyPillContainer>
        <SearchBar placeholder="약이름 검색" labelId="mymedi" onChange={onChange} value={value} />
        <TabMenu tabNames={["나의 약", "복용중인 약"]} onTabClick={onTabClick} activeTab={activeTab} />
        {tabContent }
      </MyPillContainer>
      <FooterNav isActive={isActive}/>
    </>
  )
}
export default MyMediTemplate;