import {connect} from 'react-redux';

import CinemaRow from "./CinemaRow";

import {prepForBookTick} from '../../actions/actionCreator';

function mapStateToProps(state) {
  return {
    currentPlace: state.todo.chosenPlaceId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    prepForBookTick: (event) => dispatch(prepForBookTick(event))
  };
}


const CinemaRowContainer = connect(mapStateToProps, mapDispatchToProps)(CinemaRow);

export default CinemaRowContainer;