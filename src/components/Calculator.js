import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setResult] = useState({ total: 0, next: null, operation: null });

  const showResult = (e) => {
    setResult(calculate(obj, e.target.value));
  };

  let { total, operation, next } = obj;
  if (!operation) {
    operation = '';
  }
  if (!next) {
    next = '';
  }
  if (!total && total !== 0) {
    total = '';
  }
  return (
    <div className="Calculator">
      <span className="input">{`${total} ${operation} ${next}`}</span>
      <button type="button" value="AC" className="char" onClick={showResult}>
        AC
      </button>
      <button value="+/-" type="button" className="char" onClick={showResult}>
        +/-
      </button>
      <button value="%" type="button" className="char" onClick={showResult}>
        %
      </button>
      <button
        value="÷"
        type="button"
        className="char orange"
        onClick={showResult}
      >
        ÷
      </button>
      <button type="button" value="7" className="char" onClick={showResult}>
        7
      </button>
      <button value="8" type="button" className="char" onClick={showResult}>
        8
      </button>
      <button value="9" type="button" className="char" onClick={showResult}>
        9
      </button>
      <button
        value="x"
        type="button"
        className="char orange"
        onClick={showResult}
      >
        x
      </button>
      <button value="4" type="button" className="char" onClick={showResult}>
        4
      </button>
      <button value="5" type="button" className="char" onClick={showResult}>
        5
      </button>
      <button value="6" type="button" className="char" onClick={showResult}>
        6
      </button>
      <button
        value="-"
        type="button"
        className="char orange"
        onClick={showResult}
      >
        -
      </button>
      <button value="1" type="button" className="char" onClick={showResult}>
        1
      </button>
      <button value="2" type="button" className="char" onClick={showResult}>
        2
      </button>
      <button value="3" type="button" className="char" onClick={showResult}>
        3
      </button>
      <button
        value="+"
        type="button"
        className="char orange"
        onClick={showResult}
      >
        +
      </button>
      <button value="0" type="button" className="zero" onClick={showResult}>
        0
      </button>
      <button value="." type="button" className="char" onClick={showResult}>
        .
      </button>
      <button
        value="="
        type="button"
        className="char orange"
        onClick={showResult}
      >
        =
      </button>
    </div>
  );
};

export default Calculator;
