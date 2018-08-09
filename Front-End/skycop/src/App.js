import React, { Component } from 'react';
import './App.css';
import  { setResponse } from './actions';
import  { connect } from 'react-redux';
import DropDownList from './components/DropDownList'
import { Button } from 'react-bootstrap';
import 'tachyons';

const mapStateToProps = (state) => {
  return {
    response: state.response
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      fetch(`http://localhost:3001/`,{
        method: 'get',
        headers: {'Content-Type': 'application/json'}})
      .then(response => response.json())
      .then(data => {
        dispatch(setResponse(data));
      }).catch(err => console.log(err))
    } 
  }
}

class App extends Component {

  render() {
    const { response, getData } = this.props;
    return (
      <div className='App w-10 center'>
        <div className='mt6'>
          <Button bsStyle='warning' onClick={getData}>Fetch!</Button>
        </div>
        <div className='mt4'>
          <DropDownList list={response.payload}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
