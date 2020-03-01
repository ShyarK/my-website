import React, { useEffect } from 'react';

const Greeting = () => {
  useEffect(() => {
    console.log('render');
    // using clean up function when unmounting
    return () => {
      console.log('unmount');
    };
  }, []);

  return <div>Hello</div>;
};

export default Greeting;
