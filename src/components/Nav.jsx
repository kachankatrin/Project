import React from 'react';
function Nav(props) {
  const menuOpen = props.isMenuOpen ? 'display' : '';
  // const myStyle = props.isMenuOpen ? {display: 'flex'} :{display: 'none'}
  return (
    <ul className='menu-navigation'>
      <div className='sandwitch-menu' onClick={props.handleMenuOpen}>
        <i class="fas fa-bars"></i>
      </div>
      <div className={"navigation " + menuOpen}>
        {props.children.map((item, i) => i !== props.children.length - 1 ? <li><a>{item}</a></li> : <div className='check'>{item}</div>)}
      </div>
    </ul>
  )
}
export default Nav;