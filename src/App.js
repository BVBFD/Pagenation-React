import { useEffect, useState } from 'react';
import './App.css';
import dummyDatas from './dummyDatas.js';

function App() {
  const [totalPagesNums, setTotalPagesNums] = useState([]);
  const [chosenPosts, setChosenPosts] = useState([]);
  const [chosenPageNum, setChosenPageNum] = useState(1);

  // for (let i = 1; i <= Math.ceil(dummyDatas.length / 4); i++) {
  //   console.log(i);
  //   // prettier-ignore
  //   for (let j = (i * 4) - 4; j <= (i * 4) - 1; j++) {
  //     console.log(dummyDatas[j]);
  //   }
  // }

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

  useEffect(() => {
    let postsArray = [];
    for (let i = chosenPageNum * 4 - 4; i <= chosenPageNum * 4 - 1; i++) {
      postsArray.push(dummyDatas[i]);
      setChosenPosts(postsArray);
    }
  }, [chosenPageNum]);

  console.log(chosenPosts);

  return (
    <div className='App'>
      <div className='titlePageNumWrapper'>
        {chosenPosts.map((post) => {
          return <div className='title'>{post.title}</div>;
        })}

        <div className='pagenationNumWrapper'>
          {totalPagesNums.map((num) => {
            return (
              <span
                className='pagenationNum'
                onClick={(e) => setChosenPageNum(e.target.innerText)}
              >
                {num}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
