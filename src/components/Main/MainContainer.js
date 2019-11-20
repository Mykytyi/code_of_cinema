import { connect } from "react-redux";
import Main from "./Main";
import {
  getListOfFilms,
  getMoviesSessions,
  setRequestFieldValue,
  handleChangeOfGenre,
  handleRequest} from '../../actions/actionCreator';

const mapStateToProps = (state) => {
  return {
    moviesList: state.todo.moviesList,
    requestField: state.todo.requestField,
    isLoading: state.todo.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListOfFilms: () => dispatch(getListOfFilms()),
    getMoviesSessions: () => dispatch(getMoviesSessions()),
    setRequestFieldValue: (event) => dispatch(setRequestFieldValue(event)),
    handleChangeOfGenre: (event) => dispatch(handleChangeOfGenre(event)),
    handleRequest: () => dispatch(handleRequest())
  }
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;