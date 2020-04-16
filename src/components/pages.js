import React from 'react';

function CreatePages(props) {
console.log(props, 'propssss')
  // const handlePagination = (e) => {
  //   if (e.target.id === "prev" && props.currentPage > 1) {
  //     props.setState({
  //       currentPage: props.currentPage - 1
  //     })
  //   } else if (e.target.id === "next" && props.currentPage < 5) {
  //     props.setState({
  //       currentPage: props.currentPage + 1
  //     })
  //   } else if (e.target.id !== "next" && e.target.id !== "prev") {
  //     props.setState({
  //       currentPage: parseInt(e.target.getAttribute("value"))
  //     })
  //   }
  // }

  let arr = [];
  for (let i = 1; i <= props.allPages; i++) {
    arr.push(i)
  }
  const numeratedList = arr.map(item => <li value={item} onClick={() => props.handlePagination(item)}>{item}</li>)
  const newLi = arr.length > 1 
  ?  <ul>
      <li value='0' id="prev" onClick={() => props.handlePagination(props.currentPage > 1 ? (props.currentPage - 1) : props.currentPage)}>Prev</li>
      {numeratedList}
      <li value='' id='next' onClick={() => props.handlePagination(props.currentPage < props.allPages ? (props.currentPage + 1) : props.currentPage)}>Next</li></ul>
  : null;
  console.log(props.allPages, 'props')
  return (
    arr.length > 0 ? newLi : null
  )
}

export default CreatePages;