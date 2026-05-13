const domContainer = document.querySelector("#root");


const Increment = () =>{


      const [count, setCount] = React.useState(0);
      
      return (
        <div>
            <h1 id = "display" >{count}</h1>
                <div>
                    <button id = "button" onClick={ 
                      () => setCount(count + 1)
                      }>
                      Increment +
                    </button>
                     <button id = "button" onClick={ 
                      () => setCount(count - 1)
                      }>
                      Decrement +
                    </button>

                    <button id = "button" onClick={ 
                      () => setCount(count - count )
                      }>
                      reset 
                    </button>

                </div>
        </div>
      );

  };


ReactDOM.render(
    <div className = "container">
         <Increment />
    </div>,
    domContainer
);

