import React from 'react';
function CreatePages(props) {
  function pagination(current, last) {
    let M = [li(1, "1")]
    if (last <= 9) {
      for (let i = 2; i <= last; i++) {
        M.push(li(i, `${i}`))
      }
    }
    if (last > 9 && current < 6) {
      for (let i = 2; i <= 7; i++) {
        M.push(li(i, `${i}`))
      }
      M.push(li(current + 3, '...'), li(last, `${last}`))
    }

    if (last > 9 && current >= 6 && last - current > 3) {
      M.push(li(current - 3, '...'));
      for (let i = current - 2; i <= current + 2; i++) {
        M.push(li(i, `${i}`))
      }
      M.push(li(current + 3, '...'), li(last, `${last}`))
    }
    if (last > 9 && current >= 6 && last - current <= 3) {
      M.push(li(current - 3, '...'));
      for (let i = last - 6; i <= last; i++) {
        M.push(li(i, `${i}`))
      }
    }
    console.log(M, 'mmmmmmm')
    return M.map(item => item)
  }
  function li(page, text) {
    return <li className={props.currentPage === page
      ? 'current'
      : ''} value={page} id={page} onClick={() => props.handlePagination(page)}>{text}</li>
  }
  console.log(props, 'propssss')
  const numeratedList = pagination(props.currentPage, props.allPages)
  const newLi = props.allPages > 1
    ? <ul className="paging">
      <li value='0' id="prev" onClick={() => props.handlePagination(props.currentPage > 1
        ? (props.currentPage - 1)
        : props.currentPage)}>Prev</li>
      {numeratedList}
      <li value='' id='next' onClick={() => props.handlePagination(props.currentPage < props.allPages
        ? (props.currentPage + 1)
        : props.currentPage)}>Next</li>
    </ul>
    : null;
  console.log(props.allPages, 'props')
  return (
    props.allPages > 0 
      ? newLi 
      : null
  )
}
export default CreatePages;