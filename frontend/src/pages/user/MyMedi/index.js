import MyMediTemplate from "../../../components/templates/MyMediTemplate";
import { request, requestGet } from "../../../api";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLikeMedi, setTakingMedi } from "../../../modules/medicines";


function MyMedi(){

  const dispatch = useDispatch();
  const history = useHistory();
  const [activeTab, setActiveTab] = useState(0);
  const isActive = 2;
  const likepills = useSelector(state => state.mediReducer.likeObj);
  const takingpills = useSelector(state => state.mediReducer.takingObj);
  
  // async function DeletePill(key) {
  //   const response = await request("DELETE", `/like-medicines/${key}`);
  //   if (response.isSuccess) {

  //   }
  // }

  useEffect(() => {
    async function bringLikeMedi() {
      const params = {
        page: 1,
        size: 5,
      }
      const response = await requestGet("/like-medicines",params);
      if (response.isSuccess) {
        const likeMedis = response.result;
        dispatch(setLikeMedi(likeMedis));
      }
      else {
        dispatch(setLikeMedi([]));
      }
    }
    async function bringTakingMedi() {
      const params = {
        page: 1,
        size: 5,
      }
      const response = await requestGet("/my-medicines",params);
      if (response.isSuccess) {
        const TakingMedis = response.result;
        dispatch(setTakingMedi(TakingMedis));
      }
      else {
        console.log("가져왓나");
        dispatch(setTakingMedi([]));
      }
    }
    bringLikeMedi();
    bringTakingMedi();
  },[])

  function onTabClick(key) {
    setActiveTab(key);
  }
  return (
    <>
      <MyMediTemplate
        isActive={isActive}
        likepills={likepills}
        takingpills={takingpills}
        activeTab = {activeTab}
        onTabClick={onTabClick}
      />
    </>
  );
  }

export default MyMedi;
