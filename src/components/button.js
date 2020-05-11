import React from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

function ResButton(props) {
  const history = useHistory();
  function handleClick() {
    console.log(props.search)
    props.fetchOOF(props.search, 1, props.tagtype, props.tagContains, props.tag, props.tagtype1, props.tagContains1, props.tag1, props.additives, props.ingPalmOil, props.ingMayBePalmOil, props.ingPalmOilORMayBePalmOil, props.nutriment, props.comparement, props.nutrimentValue, props.energyUnit, props.nutriment1, props.comparement1, props.nutrimentValue1, props.energyUnit1)
    history.push("/results");
  }
  return (
    <button type="button" onClick={handleClick}>
      Search
    </button>
  );
}
const mapStateToProps = (state) => {
  return {
    mainState: state.mainState
  }
}
export default connect(mapStateToProps, null)(ResButton);