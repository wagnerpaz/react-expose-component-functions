import React, { useRef } from 'react';

import Counter from './components/Counter';

export default () => {
  const counterRef = useRef(null);

  return (
    <fieldset>
      <legend>App.js</legend>
      <Counter ref={counterRef} />
      <button onClick={() => counterRef.current.addOne()}>Parent ref to Counter.addOne()</button>
    </fieldset>
  );
};