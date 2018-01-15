import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';

export default class Listing extends Component {

  constructor(props) {
    super(props);
    this.renderPeople = this.renderPeople.bind(this);
  }

  renderPeople() {
    return this.props.people.map((charachter) => {
      return (
        <div className="person">
          <div className="name">Name: {charachter.name}</div>
          <div className="height">Height: {charachter.height}</div>
          <div className="mass">Mass: {charachter.mass}</div>
          <div className="hairColor">Hair color: {charachter.hair_color}</div>
          <div className="eyeColor">Eye color: {charachter.eye_color}</div>
          <div className="birthDate">Birth year: {charachter.birth_year}</div>
          <div className="gender">Gender: {charachter.gender}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="charachters">
          {this.renderPeople()}
        </div>
        <Waypoint key="infiniteScroll" onEnter={this.props.loadPeople} />
      </div>
    );
  }

}

Listing.propTypes = {
  loadPeople: PropTypes.func.isRequired,
  people: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
  })),
};

Listing.defaultProps = {
  people: [],
};
