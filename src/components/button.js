import React from 'react'
import { useHistory } from "react-router-dom";
// import {emptyInput} from '../store/actions/SomeAction';
import { connect } from 'react-redux';

function ResButton(props) {
  const history = useHistory();
  function handleClick() {
    console.log(props.search)
    props.fetchOOF(props.search, 1)
    props.emptyInput()
    history.push("/results");
  }

  return (
    <button type="button" onClick={handleClick}>
      search
    </button>
  );
}
const mapStateToProps = (state) => {
  return{
    staff: state.staff
  }
}
// const mapDispatchToProps = {
  
// }
export default connect(mapStateToProps, null)(ResButton);