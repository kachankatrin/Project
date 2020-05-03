import React from 'react';

function Select(props) {
  return (
    <form>
      <label>
        <select value={props.value} onChange={props.handleChange}>
          {props.options.map(item => {
            return (<option value={Object.keys(item)}>{Object.values(item)}</option>)
          })}
        </select>
      </label>
    </form>
  )
}

export default Select;