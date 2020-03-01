import React, { useState } from 'react';
const UseStateHook = () => {
  // we can do like this passing only number to the useState
  //https://www.youtube.com/watch?v=9xhKH43llhU&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM
  // const [count, setCount] = useState(10);
  // we can also pass object holding two counts
  // {count} we destructor the count from the object inside useState
  // const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 });
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
  function increment() {
    // setCount(count + 1);
    // we can also pass a function to the setState
    // currentCount is the same as count in the useStates
    // setCount(currentCount => ++currentCount);
    // setCount(countStateObj => ({
    //   ...countStateObj,
    //   count1: ++countStateObj.count1,
    //   count2: ++countStateObj.count2,
    // }));

    setCount(c => ++c);
    setCount2(c => ++c);
  }
  return (
    <div>
      <h4>{count}</h4>
      <h4>{count2}</h4>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default UseStateHook;
