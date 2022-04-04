import React, { useEffect, useState } from 'react';
import './App.css';
import ReactPaginate from 'react-paginate';
import dummyDatas from './dummyDatas.js';

const App = (props) => {
  const [pageCount, setpageCount] = useState();
  const [titleShown, setTitleShown] = useState([0, 1, 2, 3]);

  useEffect(() => {
    // prettier-ignore
    setpageCount(Math.ceil(dummyDatas.length / 4))
  }, [dummyDatas, pageCount]);

  const handlePageClick = (event) => {
    // prettier-ignore
    const newArray = [(event.selected) * 4, ((event.selected) * 4) + 1, ((event.selected) * 4) + 2, ((event.selected) * 4) + 3];
    setTitleShown(newArray);
  };

  console.log(titleShown);

  return (
    <div className='App'>
      <div className='titleWrapper'>
        {titleShown.map((index) => {
          return dummyDatas[index] !== undefined ? (
            <div className='title'>{dummyDatas[index].title}</div>
          ) : (
            <div className='title'></div>
          );
        })}
      </div>
      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={''}
        pageCount={pageCount}
        marginPagesDisplayed={0}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default App;
