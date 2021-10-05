import MyMediTemplate from "../../../components/templates/MyMediTemplate";
import { requestGet, requestDelete} from "../../../api";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletelike, setLikeMedi, setTakingMedi, deletetaking } from "../../../modules/medicines";


function MyMedi(){

  const dispatch = useDispatch();
  const history = useHistory();
  const [activeTab, setActiveTab] = useState(0);
  const isActive = 2;
  const likepills = useSelector(state => state.mediReducer.likeObj);
  const takingpills = useSelector(state => state.mediReducer.takingObj);
  
  async function handleInfiniteScroll(e) {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (parseInt(scrollTop) + parseInt(clientHeight) !== parseInt(scrollHeight))
      return;

    if (activeTab === 2) {
      if (likepills && likepills.length % 5 !== 0) return;
      const page = parseInt(likepills.length / 5);
      await bringLikeMedi(page);
    } else if (activeTab === 1) {
      if (takingpills && takingpills.length % 5 !== 0) return;
      const page = parseInt(takingpills.length / 5);
      await bringTakingMedi(page);
    }
  }

  async function DeleteMine(id){

    const d_response = await requestDelete(`/like-medicines/${id}`);
    if (d_response.isSuccess){
      console.log("삭제성공");
      dispatch(deletelike(id));
    }
    else if (d_response.code === "204") {
      alert('이미 삭제된 항목입니다');
    }
  }

  async function DeleteTaking(id){

    const d_response = await requestDelete(`/my-medicines/${id}`);
    if (d_response.isSuccess){
      console.log("삭제성공");
      dispatch(deletetaking(id));
    }
    else if (d_response.code === "204") {
      alert('이미 삭제된 항목입니다');
    }
  }

  async function bringLikeMedi(page = 0) {
    const params = {
      page: page,
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
  async function bringTakingMedi(page=0) {
    const params = {
      page: page,
      size: 5,
    }
    const response = await requestGet("/my-medicines",params);
    if (response.isSuccess) {
      const TakingMedis = response.result;
      dispatch(setTakingMedi(TakingMedis));
    }
    else {
      dispatch(setTakingMedi([]));
    }
  }
  
  useEffect(() => {
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
        hadnleInfiniteScroll={handleInfiniteScroll}
        DeleteMine={DeleteMine}
        DeleteTaking={DeleteTaking}
      />
    </>
  );
  }

export default MyMedi;
