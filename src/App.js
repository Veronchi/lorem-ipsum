import React, { useState } from 'react';
import data from './data';

function App() {
  const [textData, setTextData] = useState(data);
  const [inputValue, setInputValue] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = parseInt(inputValue);

    if(inputValue <= 0) {
      amount = 1;
    }
    if(inputValue > 8) {
      amount = 8;
    }

    setParagraphs(textData.slice(0, amount));
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input type='number' name='amount' id='amount' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {paragraphs.map((p, id) => {
          return (
            <p key={`pId${id}`}>{p}</p>
          );
        })}
      </article>
    </section>
  );
}

export default App;
