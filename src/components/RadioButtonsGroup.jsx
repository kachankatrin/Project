import React from 'react'

function RadioButtons(props) {
  const { name, values, handleChange } = props;
  return (
    <div>
      <h3>{name}</h3>
      <div>
        {values.map(item => {
          return (
            <div className='radio-group'>
              <label className="radio-container">{item.label}
                <input
                  type='radio'
                  checked={item.checked}
                  name={name} value={item.value} onChange={handleChange}
                />
                <div className={'radio-bg ' + props.darkClass}>
                  <span className='custom-radio' checked={item.checked}
                    name={name} value={item.value} onChange={handleChange}></span>
                </div>
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RadioButtons;