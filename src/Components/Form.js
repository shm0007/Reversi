import React, {Component} from 'react';
class Form extends Component{
 constructor(props){
    super(props);
    this.state = {
      inputValue: '' ,
      labelValue : "HELLO"
    }
  }

  handleChange (event) {
      this.setState({
          inputvalue: event.target.value,
          labelValue: event.target.value
      })
  }
  render() {
    return (
      <div className="App">
          <form >
              <label>Namedsdsd</label>
              <input type="text" value={this.state.inputvalue} onChange={this.handleChange.bind(this)}/>
              <label>{this.state.labelValue}</label>
              <input type="submit" value="Submit"/>
          </form>
      </div>
    );
  }
}
export default Form;