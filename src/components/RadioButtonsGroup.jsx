import React from 'react'

function RadioButtons(props) {
  const {name, values, handleChange} = props;
  // const changeCheck = (e, item) => {
  //   console.log(e.target, item)
  //   return e.target === item ? item.checked = true : item.checked = false

  // }
  return (
    <div>
    <h3>{name}</h3>
    <div>
        {values.map(item => {
          return(
            <div className='ragiogroup'>
            <label className="radioContainer">{item.label}
            <input 
            type='radio' 
            checked={item.checked} 
            name={name} value={item.value} onChange={handleChange} 
            />
            <span className='customRadio' checked={item.checked} 
            name={name} value={item.value} onChange={handleChange}></span>
            </label>
            </div>
          )
        })}
        </div>
    </div>
  )
}

export default RadioButtons;