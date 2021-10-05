import DurPageTemplate from "../../components/templates/DurPageTemplate";
import { requestGet } from "../../api";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function DurPage(){
  const dispatch = useDispatch();
  const isActive = 1;
  const cols = {'id':'번호','name':'약이름','delete':'삭제'};
  const [medicines, setMedicine ] = useState([]);
  const nextId = useRef(1);
  const sample = {
    'durs':[{'medicine_id':'1234','content':'1234는 먹지마!'}],
    'preg':[{'medicine_id':'1234','content':'임부주의'}],
    'child':[{'medicine_id':'1234','content':'살 이하는 먹지마','age':'15'}],
    'time':[{'medicine_id':'1234','content':'오래먹지마'}],
    'capa':[{'medicine_id':'1234','content':'많이먹지마'}],
    'overlap':[{'medicine_id':'1234','content':'5678이랑 중복된다야'}],
  }
  const [Durs, setDurs ] = useState(sample);
  //목록에서 삭제 요청
  const onDelete = (id) => {
    setMedicine(medicines.filter( medicine=> medicine.id !== id));
    console.log(id);
  }

  //dur 조회 요청 보내기
  async function requestDur() {
    if (medicines.length === 0) {
      alert("약을 선택해주세요!");
      return;
    }
    const params = {}
    for (const medicine of medicines) {
      params.id = medicine.id;
    }
    const response = await requestGet( "/medicines/dur", params);
    if (response.isSuccess) {
      setDurs(response.result);
    } else {
      console.log("요청 안강");
    }
  }

  
  return (
    <>
      <DurPageTemplate
        isActive={isActive}
        medicines={medicines}
        requestDur={requestDur}
        onDelete={onDelete}
        cols={cols}
        Durs={Durs}
      />
    </>
  );
  }

export default DurPage;