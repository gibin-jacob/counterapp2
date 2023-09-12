import Counter from "./components/Counter";

import { useState } from "react";

function App() {
   const [count, setCount] = useState(0);

   const onIncrement = () => {
      if (count >= 0 && count < 10) {
         // setCount(count++);
         setCount((prev) => prev + 1);
      }
   };
   const onDecrement = () => {
      if (count > 0) {
         // setCount(count--);
         setCount((prev) => prev - 1);
      }
   };
   return (
      <div className="App">
         <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
      </div>
   );
}

export default App;
