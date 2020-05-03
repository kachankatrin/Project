import React from 'react'

function Toggle(props) {
  return (
    <div className='flex'>
      <input type="checkbox" onChange={props.handleChange} className="toggle toggleSearch"></input>
      <label htmlFor='toggle'><span className="toggle-span">{props.label}</span></label>
    </div>
  )
}
export default Toggle;

// <div>
//             <input type="checkbox" onChange={props.handleChange} id={props.id} className="toggle"></input>
//             <label htmlFor='toggle'><span className="naviItem">Switch</span></label>
// </div>


// <div>
//    <h2>Switch</h2>
//     <label className="switch">
//     <input type="checkbox" onChange={props.handleChange} id={props.id}/>
//     <span className="slider round">
//     </span>
//     </label>
//   </div>