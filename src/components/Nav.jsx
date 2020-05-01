import React from 'react';
function Nav(props) {
  return (
    <ul className="navigation">
      {props.children.map((item, i) => i !== props.children.length - 1 ? <li><a>{item}</a></li> : <div className='check'>{item}</div>)}
    </ul>
  )
}
export default Nav;