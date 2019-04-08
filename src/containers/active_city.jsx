import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {

  if (!this.props.activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }
    return (
      <div className="active-city">
        <h1>{this.props.activeCity.name}</h1>
        <p>{this.props.activeCity.address}</p>
        <img width="100%" src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
