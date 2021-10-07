import React from "react";
import Header from "../../molecules/Header";
import FooterNav from '../../molecules/FooterNav';
import {
  MyPillContainer,
  LikeContainer,
} from './styles';
import MyMediItem from '../../molecules/MyMediItem';
import TakingItem from '../../molecules/TakingItem';
import TabMenu from '../../molecules/TabMenu';

function MyMediTemplate({
  isActive,
  likepills,
  takingpills,
  activeTab,
  onTabClick,
  DeleteMine,
  DeleteTaking,
  handleInfiniteScroll,
  onMedicineClick,
}) {
  const listHeight = window.innerHeight - 350;
  let tabContent;
  //약바구니에 담긴 약
  if (activeTab === 0){
    tabContent=(
      <LikeContainer height={listHeight} onScroll={handleInfiniteScroll}>
        {likepills.map((likepill) => (     
          <MyMediItem medicine={likepill} DeleteMine={DeleteMine} key={likepill.id} onMedicineClick={onMedicineClick}/>
        ))}
      </LikeContainer>
    )
  }
  else {
    tabContent = (
      <LikeContainer>
        {takingpills.map((takingpill) => (     
          <TakingItem medicine={takingpill} DeleteTaking={DeleteTaking} key={takingpill.id} onMedicineClick={onMedicineClick}/>
        ))}
      </LikeContainer>
    )
  }
  return (
    <>
      <Header title="나의 약" />
      <MyPillContainer>
        <TabMenu tabNames={["나의 약", "복용중인 약"]} onTabClick={onTabClick} activeTab={activeTab} />
        {tabContent }

      </MyPillContainer>
      <FooterNav isActive={isActive}/>
    </>
  )
}
export default MyMediTemplate;