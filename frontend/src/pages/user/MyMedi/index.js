import MyMediTemplate from "../../../components/templates/MyMediTemplate";
import { requestGet, requestDelete} from "../../../api";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  setLikeMedi, 
  setTakingMedi, 
  getLikeMedicines,
  getTakingMedicines,
} from "../../../modules/medicines";


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
      await getLikeMedicines(page);
    } else if (activeTab === 1) {
      if (takingpills && takingpills.length % 5 !== 0) return;
      const page = parseInt(takingpills.length / 5);
      await getTakingMedicines(page);
    }
  }

  async function DeleteMine(id){

    const d_response = await requestDelete(`/like-medicines/${id}`);
    if (d_response.isSuccess){
      dispatch(setLikeMedi(likepills.filter(m => m.medicineId !== id)));
    }
  }

  async function DeleteTaking(id){

    const d_response = await requestDelete(`/my-medicines/${id}`);
    if (d_response.isSuccess){
      dispatch(setTakingMedi(takingpills.filter(m=>m.medicineId !== id)));
    }
  }

  useEffect(() => {
    dispatch(getLikeMedicines());
  },[likepills])
  useEffect(() => {
    dispatch(getTakingMedicines());
  },[takingpills])

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
