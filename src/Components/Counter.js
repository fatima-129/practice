import React, { Component, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

//   const counterAction = (type) => {
//     if (type == "inc") {
//       setCount(count + 1);
//     } else if (type == "dec") {
//       setCount(count - 1);
//     } else if (type == "inc_by_10") {
//       setCount(count + 10);
//     }
//   };
  return (
    <div>
      <div>count-{count}</div>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>decrement</button>
      <button onClick={() => setCount(count+10)}>Increment by 10</button>
    </div>
  );
};

//  class Counter extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             count:0
//         }
//     }
//     increment(){
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//   render() {
//     return (
//       <div>
//         <div>count - {this.state.count}</div>
//         <button onClick = {()=> this.increment()}>Increment</button>
//       </div>
//     )
//   }
// }

export default Counter;
