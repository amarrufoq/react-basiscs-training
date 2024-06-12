
import styles from "./styles.module.scss";
// import { PokeballIconSmall } from "../../assets/logoPokemon"
import { useState, useEffect } from "react";

export const Home = () => {

  let [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count+1);
  const handleDecrement = () => {
    setCount(count-1);
  };

  useEffect(() => { console.log('Count has changed!') }, [count])

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };


  return (
  <>
    <div className={styles.home}>
      <header>
        <div>
          <span>Listado de Pokemones</span>
        </div>
      </header>
      <div>
        <h4>Recarga monedas aquí</h4>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <h5>Resultado: {count}</h5>
      </div>
    </div>
    
    {/* <div>
      <div>
        <label >Enter Text:</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      <div >
        <label>You typed: {inputValue}</label>
      </div>
    </div> */}
    </>
  );
};
