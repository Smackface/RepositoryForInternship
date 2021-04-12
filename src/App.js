import React from 'react';
import './index.css' 

class App extends React.Component {
  state ={
    size: 'medium',
    glutenFree: false,
    topping: '',
    intructions: ''
  };

  setSize = event => {
    this.setState({
      size: event.target.value
    });
  };

  setGlutenFree = event => {
    this.setState({
      glutenFree: event.target.checked
    });
  };

  setTopping = event => {
    this.setState({
      topping: event.target.value
    });
  };

  setInstructions = event => {
    this.setState({
      instructions: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const {
      size,
      glutenFree,
      topping,
      instructions
    } =this.setState;

    alert(`Your order:
    Size: ${size}
    Gluten free? ${glutenFree ? 'yes' : 'no'}
    Topping: ${topping || 'none'}
    Instructions: ${instructions || 'none'}`);
  };

  render() {
    const {
      size,
      glutenFree,
      instructions,
      topping
    } = this.setState;
    return(
      <div className="wrapper">
        <div className="form-wrapper">
        <h1> Order your pizza</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="radio"
              value="small"
              checked={size === 'small'}
              onChange={this.setSize}/>
              Small
          </label>
        <label>
            <input
              type="radio"
              value="medium"
              checked={size === 'medium'}
              onChange={this.setSize}/>
              Medium
          </label>
          <label>
            <input
              type="radio"
              value="large"
              checked={size === 'large'}
              onChange={this.setSize}/>
              Large
          </label>
          <br/>
          <br/>
          <label>
            Topping
            <br/>
            <select onChange={this.setTopping} value={topping}>
              <option value="">- Pick a topping -</option>
              <option value="pepperoni">Pepperoni</option>
              <option value="peppers+onions">Peppers and Onions</option>
              <option value="notpineapplethatdoesntbelongonpizza">Pineapple Does Not Belong On Pizza</option>
            </select>
          </label>
            <br/>
            <br/>
          <label>
            <input type="checkbox"
            checked={glutenFree}
            onChange={this.setGlutenFree}/>
            Gluten Free
          </label>
            <br/>
            <br/>
          <label>
            Special Instructions:
            <br/>
            <textarea 
              value={instructions}
              onChange={this.setInstructions}/>
          </label>
            <br/>
            <br/>
            <button type="submit">Send Order</button>
        </form>
      </div>
    </div>
    );
  }
}

export default App;