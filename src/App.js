import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './App.css';
import { Pagination } from 'swiper';
import dummyDatas from './dummyDatas.js';
import { useEffect, useState } from 'react';

function App() {
  const [totalPagesNums, setTotalPagesNums] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      let numsArray = [];
      for (let i = 1; i <= Math.ceil(dummyDatas.length / 4); i++) {
        numsArray.push(i);
        setTotalPagesNums(numsArray);
      }
    };

    getPosts();
  }, [dummyDatas]);

  console.log(totalPagesNums);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className='App'>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className='mySwiper'
      >
        {totalPagesNums.map((num) => (
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
      </Swiper>
    </div>
  );
}

export default App;
