/*import React, { useState } from "react";

function Challenge() {
  const [result, setResult] = useState(0);

  const handleCLick = () => {
    const a = 20;
    const b = 30;
    const sum = a + b;
    setResult(sum);
  };

  return (
    <div>
      <h1>Challenge</h1>
      <p>Soma de 2 valores:</p>
      <p>20 + 30</p>

      <button onClick={handleCLick}>SOMAR</button>
      <p>Resultado: {result}</p>
    </div>
  );
}

export default Challenge; */

import React from "react";

const Challenge = () => {
  const a = 20;
  const b = 30;

  return (
    <div>
      <h1>Bem vindo ao Challenge!</h1>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={() => console.log(a + b)}>Somar os Valores</button>
    </div>
  );
};

export default Challenge;
