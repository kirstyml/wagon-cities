import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions';

class City extends Component {
  handleClick = () => {
    debugger
    this.props.setActiveCity(this.props.city);
  };

  render() {
    return (
    <div className="list-group-item" onClick={this.handleClick}>
      <p>{this.props.city.name}</p>
    </div>
  );
  }
};

function mapStatetoProps(state) {
  return {
    activeCity: state.activeCity
  };
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
   { setActiveCity: setActiveCity },
   dispatch
 );
}


export default connect(mapStatetoProps, mapDispatchToProps)(City);
