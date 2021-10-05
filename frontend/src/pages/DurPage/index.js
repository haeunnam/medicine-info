import DurPageTemplate from "../../components/templates/DurPageTemplate";
import { requestGet } from "../../api";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function DurPage(){
  const dispatch = useDispatch();
  const isActive = 1;
  const cols = {'id':'번호','name':'약이름','delete':'삭제'};
  const durObj = useSelector(state => state.mediReducer.selectDur);
  console.log(durObj);
  const nextId = useRef(1);
  const sample = {"capacity":[],"child":[],"overlap":[],"time":[],"together":[],"pregnancy":[]}
  const [Durs, setDurs ] = useState(sample);
  const [isModalActive, setIsModalActive] = useState(false);

  //목록에서 삭제 요청
  function onDelete(id){

  }

  function modalToggle() {
    setIsModalActive((prev) => !prev);
  }

  function onBucketClick() {
    modalToggle();
  }

  function onModalOutsideClick(e) {
    if (e.target.classList.contains("modal-overlay")) {
      modalToggle();
    }
  }

  function handleSelect(d){
    setIsModalActive((prev) => !prev);
  }

  //dur 조회 요청 보내기
  async function requestDur() {
  
    // const response = await requestGet( "/medicines/dur", params);
    // if (response.isSuccess) {
    //   setDurs(response.result);
    // } else {
    //   console.log("요청 안강");
    // }
  }

  
  return (
    <>
      <DurPageTemplate
        isActive={isActive}
        requestDur={requestDur}
        onDelete={onDelete}
        cols={cols}
        Durs={Durs}
        medicines={durObj}
        isModalActive = {isModalActive}
        onModalOutsideClick = {onModalOutsideClick}
        onBucketClick = {onBucketClick}
        hadnleSelect={handleSelect}
      />
    </>
  );
  }

export default DurPage;