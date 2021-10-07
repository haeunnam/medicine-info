import DurPageTemplate from "../../components/templates/DurPageTemplate";
import { requestGet } from "../../api";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getSearchMedicines,
  doNotRefresh,
  doRefresh,
  setSearchKeyword,
} from "../../modules/medicine";
import {
  addDurMedicines,
  setDurMedi,
  setDurSearchKeyword,
} from "../../modules/medicines";

function DurPage(){
  const dispatch = useDispatch();
  const isActive = 1;
  const cols = {'id':'번호','name':'약이름','delete':'삭제'};
  const [keyword, setKeyword] = useState(""); //검색어
  const sample = {"capacity":[],"child":[],"overlap":[],"time":[],"together":[],"pregnancy":[]}
  const [Durs, setDurs ] = useState(sample); //DUR 검색한 약들
  const [medicines, setMedis ] = useState([]); //조회할 약들
  const [keys, setKeys] = useState([]);
  const [isShow, setShow] = useState(true);
  //검색한약들
  const searchMedicines = useSelector(
    (state) => state.medicineReducer.searchMedicines
  );

  const durSearchKeyword = useSelector(
    (state) => state.mediReducer.durSearchKeyword
  );


  useEffect(() => {
    if (!durSearchKeyword) {
      dispatch(doRefresh());
    }
  }, [keyword]);


  const handleTextChange = (e) => {
    setKeyword(e.target.value);
    dispatch(setDurSearchKeyword(e.target.value));
    if (e.target.value.length) {
      dispatch(getSearchMedicines(e.target.value));
    }
  };

 function onMedicineClick(medicine) {
    if (medicines.length >= 5){
      alert('복용주의 검사 최대 약품은 5개 입니다')
    }
    else{
      let isSame = false;
      for (let i = 0; i < medicines.length; i++){
        if (medicines[i].medicineId === medicine.medicineId){
          isSame = true;
        }
      }
      if (isSame) {
        alert('이미 추가한 항목입니다');
      }
      else {
        setMedis(prev => prev.concat(medicine));
      }
    }
  }

function onDelete(medi){
  setMedis(medicines.filter(m => m.medicineId !== medi.medicineId));
}
  //dur 조회 요청 보내기
async function requestDur(){
  if (keys.length <= 1){
    alert("두 개이상의 약을 선택해주세요!");
    setShow(true);
    return;
  }
  else{
    const params = {
      id:keys
    }
    const response = await requestGet( "/medicines/dur", params);
    console.log(response);
    if (response.isSuccess) {
      setShow((prev) => !prev);
      setDurs(response.result);
    } else {
      console.log("요청 안강");
      setShow((prev) => !prev);
    }
  }
}


function selectKeys() {
  const tmp = []
  for (let j = 0; j < medicines.length; j ++){
    tmp.push(medicines[j].medicineId);
    setKeys(keys.concat(medicines[j].medicineId));
  }
  setKeys(tmp);
  console.log(keys);
}
useEffect(() => selectKeys(),[medicines]);

  
  return (
    <>
      <DurPageTemplate
        isActive={isActive}
        requestDur={requestDur}
        cols={cols}
        Durs={Durs}
        medicines={medicines}
        searchMedicines={searchMedicines}
        handleTextChange={handleTextChange}
        onMedicineClick ={onMedicineClick}
        keyword={keyword}
        onDelete={onDelete}
        isShow={isShow}
      />
    </>
  );
  }

export default DurPage;