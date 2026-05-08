const domContainer = document.querySelector("#root");

const Increment = () =>{

      const [count, setCount] = React.useState(0);
      
      return (
        <div>
            <h1 id = "display" >{count}</h1>
                <div>
                    <button id = "button" onClick={ () => setCount(count + 1)}>
                        
                      Increment +
                    </button>
                </div>
        </div>
      );
    };

ReactDOM.render(<Increment />, domContainer);

