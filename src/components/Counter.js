import React, { useState, forwardRef } from 'react';

export default forwardRef( (props, ref) => {
  const [count, setCount] = useState(0);

  const addOne = () => setCount(count + 1);

  if(ref) ref.current = {addOne};

  return (
    <fieldset>
      <legend>components/Counter.js</legend>
      <div>Count: {count}</div>
      <button onClick={addOne}>Add +1</button>
    </fieldset>
  );
});