import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState(result);
  };

  render() {
    const {
      total,
      next,
      operation,
    } = this.state;

    return (
      <section id="calculator-container">
        <div id="input-result">
          {next || operation || total || 0}
        </div>

        <div id="btn-container">
          <button type="button" onClick={this.handleClick} className="btn">AC</button>
          <button type="button" onClick={this.handleClick} className="btn">+/-</button>
          <button type="button" onClick={this.handleClick} className="btn">%</button>
          <button type="button" onClick={this.handleClick} className="btn oprand">÷</button>
          <button type="button" onClick={this.handleClick} className="btn">7</button>
          <button type="button" onClick={this.handleClick} className="btn">8</button>
          <button type="button" onClick={this.handleClick} className="btn">9</button>
          <button type="button" onClick={this.handleClick} className="btn oprand">x</button>
          <button type="button" onClick={this.handleClick} className="btn">4</button>
          <button type="button" onClick={this.handleClick} className="btn">5</button>
          <button type="button" onClick={this.handleClick} className="btn">6</button>
          <button type="button" onClick={this.handleClick} className="btn oprand">-</button>
          <button type="button" onClick={this.handleClick} className="btn">1</button>
          <button type="button" onClick={this.handleClick} className="btn">2</button>
          <button type="button" onClick={this.handleClick} className="btn">3</button>
          <button type="button" onClick={this.handleClick} className="btn oprand">+</button>
          <button type="button" onClick={this.handleClick} className="btn">0</button>
          <button type="button" onClick={this.handleClick} className="btn">.</button>
          <button type="button" onClick={this.handleClick} className="btn oprand">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
