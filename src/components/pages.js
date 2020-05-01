import React from 'react';


// export let doted;
function CreatePages(props) {
  let obj = {};
  function pagination(c, m) {
    // let delta = 2,
    //     range = [],
    //     rangeWithDots = [],
    //     l;
    //     console.log(l)
    // range.push(1)  
    // for (let i = c - delta; i <= c + delta; i++) {
    //     if (i < m && i > 1) {
    //         range.push(i);
    //     }
    // }  
    // range.push(m);
    // for (let i of range) {
    //   console.log(i, range)
    //     if (l) {
    //       console.log(l)
    //         if (i - l === 2) {
    //             rangeWithDots.push(l + 1);
    //         } else if (i - l !== 1) {
    //             rangeWithDots.push('...');
    //         }
    //     }
    //     console.log(rangeWithDots)
    //     rangeWithDots.push(i);
    //     l = i;
    // }
    let M = [li(1, "1")]
    if(m <= 9) {
      for(let i = 2; i<=m; i++) {
        M.push(li(i, `${i}`))
      }
    }
    if(m>9 && c < 6) {
      for(let i = 2; i<=7; i++) {
        M.push(li(i, `${i}`))
      }
      M.push(li(c + 3, '...'), li(m, `${m}`))
    }

    if (m>9 && c >= 6 && m-c > 3) {
      M.push(li(c - 3, '...'));
      for (let i = c - 2; i <= c+2; i++) {
        M.push(li(i, `${i}`))
      }
      M.push(li(c + 3, '...'), li(m, `${m}`))
    } 
    if (m>9 && c >= 6 && m-c <= 3) {
      M.push(li(c - 3, '...'));
      for(let i = m-6; i <=m; i++) {
        M.push(li(i, `${i}`))
      }
    }
    // else if(c < 6) {
    //   for(let i = 2; i <= c; i++) {
    //     M.push(li(i, `${i}`))
    //   }
    // }
    console.log(M, 'mmmmmmm')
    // const onlyDottedRnge = rangeWithDots.filter(item => item === '...')
    // console.log("RENDER", onlyDottedRnge)
    // rangeWithDots.map(item => <li value={item} onClick={() => props.handlePagination(item)}>{item}</li>)
    // return rangeWithDots.map((item,index) => {
    //   if ((index < rangeWithDots.indexOf(props.currentPage)) && (item === '...')) {
    //     console.log("RRRRR: LEFT!")
    //   } else if ((index > rangeWithDots.indexOf(props.currentPage)) && (item === '...')) {
    //     console.log("RRRRR: RIGHT!")

    //   } else {
    //     console.log("RRRRR: JUST_NUMBER!")
    //   }
    //   obj[index] = item;
    //   // doted = i > rangeWithDots.indexOf(c) ? c + 3 : c - 3;
    //   console.log(index, item) 
    //   return <li value={item} id={index} onClick={() => props.handlePagination(item, onlyDottedRnge)}>{item}</li>})
    // ;
    return M.map(item => item)
  }

  function li(page, text) {
    return <li className={props.currentPage === page ? 'current' : ''} value={page} id={page} onClick={() => props.handlePagination(page)}>{text}</li>
  }

  console.log(props, 'propssss')
  // let arr = [];
  // for (let i = 1; i <= props.allPages; i++) {
  //   arr.push(i)
  // }
  // let newArr = [];
  const numeratedList = pagination(props.currentPage, props.allPages)
  const newLi = props.allPages > 1
    ? <ul className="paging">
        <li value='0' id="prev" onClick={() => props.handlePagination(props.currentPage > 1 ? (props.currentPage - 1) : props.currentPage)}>Prev</li>
        {numeratedList}
        <li value='' id='next' onClick={() => props.handlePagination(props.currentPage < props.allPages ? (props.currentPage + 1) : props.currentPage)}>Next</li>
    </ul>
    : null;
  console.log(props.allPages, 'props')
  return (
    props.allPages > 0 ? newLi : null
  )
}

export default CreatePages;
// arr.map(arr.length <= 10 ? item => <li value={item} onClick={() => props.handlePagination(item)}>{item}</li> : item => item <=7 || item === arr.length ? <li value={item} onClick={() => props.handlePagination(item)}>{item}</li> : newArr.push(item) && <li>{null}</li>)