import React from 'react';
import { connect } from 'react-redux';

function ResButton(props) {
  return (
    <button type="button" onClick={props.handleClick}>
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