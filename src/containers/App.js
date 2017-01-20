import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadPeople } from '../actions';
import Listing from '../components/Listing';

class App extends Component {

  componentWillMount() {
    this.props.loadPeople();
  }

  render() {
    return (
      <div>
        <hr />
        <Listing loadPeople={this.props.loadPeople} people={this.props.people.people} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  people: state.people,
});

export default connect(mapStateToProps, { loadPeople })(App);

App.propTypes = {
  loadPeople: PropTypes.func.isRequired,
  people: {
    isFetching: PropTypes.boolean,
    next: PropTypes.string,
    people: PropTypes.array,
  },
};

App.defaultProps = {
  people: {
    people: [],
  },
};
