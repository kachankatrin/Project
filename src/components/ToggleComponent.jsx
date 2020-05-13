import React from 'react'

function Toggle(props) {
  return (
    <div className='flex'>
      <input type="checkbox" onChange={props.handleChange} className="toggle toggle-search"></input>
      <label htmlFor='toggle'>
        <span className="toggle-span">{props.label}</span>
      </label>
    </div>
  )
}
export default Toggle;