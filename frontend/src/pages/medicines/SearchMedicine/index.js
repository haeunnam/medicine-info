import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import SearchMedicineTemplate from "../../../components/templates/SearchMedicineTemplate";
import {
  getSearchMedicines,
  doNotRefresh,
  doRefresh,
  setSearchKeyword,
} from "../../../modules/medicine";

function SearchMedicine() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const searchMedicines = useSelector(
    (state) => state.medicineReducer.searchMedicines
  );
  const needRefresh = useSelector((state) => state.medicineReducer.needRefresh);
  const searchKeyword = useSelector(
    (state) => state.medicineReducer.searchKeyword
  );

  useEffect(() => {
    if (!needRefresh) {
      setKeyword(searchKeyword);
    }
  }, []);

  useEffect(() => {
    if (!searchKeyword) {
      dispatch(doRefresh());
    }
  }, [keyword]);

  const handleTextChange = (e) => {
    setKeyword(e.target.value);
    dispatch(setSearchKeyword(e.target.value));
    if (e.target.value.length) {
      dispatch(getSearchMedicines(e.target.value));
    }
  };

  function onMedicineClick(medicineId) {
    dispatch(setSearchKeyword(keyword));
    dispatch(doNotRefresh());
    history.push(`/medicines/${medicineId}`);
  }

  return (
    <SearchMedicineTemplate
      handleTextChange={handleTextChange}
      keyword={keyword}
      searchMedicines={searchMedicines}
      onMedicineClick={onMedicineClick}
    />
  );
}

export default SearchMedicine;
