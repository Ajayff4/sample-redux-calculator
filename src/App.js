import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, sub, mul } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n1: 0,
      n2: 0,
      res: null
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <>
        {/* () => this.props.dispatch({ type: "ADD", payload: { n1: 5, n2: 7 } }) */}
        <input type="text" value={this.props.n1} onChange={this.onChange} name="n1" /><br />
        <input type="text" value={this.props.n2} onChange={this.onChange} name="n2" /><br />
        <input type="text" value={this.props.res} onChange={this.onChange} name="res" /><br />
        <button name="add" onClick={this.props.add}>add</button>
        <button name="sub" onClick={this.props.sub}>sub</button>
        <button name="mul" onClick={this.props.mul}>mul</button>
      </>
    )
  }
}

const mapStateToProps = state => ({
  n1: state.n1,
  n2: state.n2,
  res: state.res
});

const mapDispatchToProps = { add, sub, mul };

export default connect(mapStateToProps, mapDispatchToProps)(App);