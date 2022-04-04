import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './App.css';
import { Pagination } from 'swiper';
import dummyDatas from './dummyDatas.js';
import { useEffect, useState } from 'react';

function App() {
  // const [totalPagesNums, setTotalPagesNums] = useState([]);
  const [chosenPagesNums, setChosenPagesNums] = useState([1, 2, 3, 4]);

  // useEffect(() => {
  //   const getPosts = () => {
  //     let numsArray = [];
  //     for (let i = 1; i <= Math.ceil(dummyDatas.length / 4); i++) {
  //       numsArray.push(i);
  //       setTotalPagesNums(numsArray);
  //     }
  //   };

  //   getPosts();
  // }, [dummyDatas, chosenPagesNums]);

  useEffect(() => {}, [chosenPagesNums]);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const nextBtn = () => {
    const nextArray = chosenPagesNums.map((num) => num + 4);
    // prettier-ignore
    if (dummyDatas[(nextArray.at(0) * 4) - 4] === undefined) {
      return;
    }
    setChosenPagesNums(nextArray);
    const spanNums = document.querySelectorAll('.swiper-pagination-bullet');
    spanNums.forEach((spanNum) => {
      // prettier-ignore
      // console.log(parseInt(spanNum.innerText) + 8);
      // console.log(parseInt(spanNums[3].innerText));
      // console.log(totalPagesNums.at(-1));
      // prettier-ignore
      return parseInt(spanNum.innerText = parseInt(spanNum.innerText) + 4);
    });
  };

  const prevBtn = () => {
    const prevArray = chosenPagesNums.map((num) => num - 4);
    if (prevArray.at(0) < 1) {
      return;
    }
    setChosenPagesNums(prevArray);
    const spanNums = document.querySelectorAll('.swiper-pagination-bullet');
    spanNums.forEach((spanNum) => {
      return (spanNum.innerText = parseInt(spanNum.innerText) - 4);
    });
  };

  return (
    <div className='App'>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className='mySwiper'
      >
        <span onClick={prevBtn} className='navigationButton prevBtn'>
          앞
        </span>
        {chosenPagesNums.map((num) => (
          <SwiperSlide>
            <div className='page'>
              {/* prettier-ignore */}
              <div>{dummyDatas[(num * 4) - 4] ? dummyDatas[(num * 4) - 4].title : null}</div>
              {/* prettier-ignore */}
              <div>{dummyDatas[(num * 4) - 3] ? dummyDatas[(num * 4) - 3].title : null}</div>
              {/* prettier-ignore */}
              <div>{dummyDatas[(num * 4) - 2] ? dummyDatas[(num * 4) - 2].title : null}</div>
              {/* prettier-ignore */}
              <div>{dummyDatas[(num * 4) - 1] ? dummyDatas[(num * 4) - 1].title : null}</div>
            </div>
          </SwiperSlide>
        ))}
        <span onClick={nextBtn} className='navigationButton nextBtn'>
          뒤
        </span>
      </Swiper>
    </div>
  );
}

export default App;
