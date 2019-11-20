import {connect} from 'react-redux';
import MovieItem from "./MovieItem";

import {getSessionsOfMovie} from '../../actions/actionCreator';

function mapStateToProps(state) {
  return {
    isBookingTicket: state.todo.isBookingTicket
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSessionsOfMovie: (event) => dispatch(getSessionsOfMovie(event))
  };
}


const MovieItemContainer = connect( mapStateToProps, mapDispatchToProps)(MovieItem);

export default MovieItemContainer;