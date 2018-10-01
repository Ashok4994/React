React 1 : https://jscomplete.com/playground/xs163746

React 2 : https://jscomplete.com/playground/xs163746

// Write JavaScript here and press Ctrl+Enter to execute



const Result = (props) => {
return(
<div>
<h1> Registration Component </h1>
<p>First Name : <input type = "text"/></p>
<p>Last Name : <input type = "text"/></p>
<input type = "button" value = "Submit"/>
</div>
);
};

const Login = (props) => {
return(
<div>
<hr />
<h1> Login Component </h1>
<p>User Name : <input type = "text"/></p>
<p>Password : <input type = "password"/></p>
<input type = "button" value = "Submit"/>
</div>
);
};


class Button extends React.Component {

  
  render() {
  return(
  <button onClick={() => this.props.onClickFunction(this.props.increment)}>
  		+{this.props.increment}</button>
  	);
  }
}

const CounterComp = (props) => {
return(
<div>{props.counter}</div>
);
}
class App extends React.Component {
  state = {counter: 0};
  incrementCounter = (increment) => {
  this.setState((prevState) => ({
  	counter: prevState.counter + increment
  }));
  }
render() {
return (
<div>
<Result />
<Login />
<Button increment = {1} onClickFunction = {this.incrementCounter}/>
<Button increment = {2} onClickFunction = {this.incrementCounter}/>
<Button increment = {3} onClickFunction = {this.incrementCounter}/>
<CounterComp counter={this.state.counter} />
</div>
);
}

}

ReactDOM.render(<App />,mountNode);

