import { ACTIONS } from '../constants';

export const getListOfFilms = () => {
  return (dispatch) => {
    dispatch(startLoading());
    let movieList = [];
    window.location.hash = `movies`;
    fetch('https://cinema-api-test.herokuapp.com/movies')
      .then(response => {
        return response.text()
      })
      .then(response => {
        movieList = JSON.parse(response);
        setTimeout(() => dispatch(finishLoading()), 1100);
        dispatch(setListOfFilms(movieList));
      });
  }
};

const setListOfFilms = (moviesList) => {
  if (moviesList.length === 0) {
    moviesList = [{name: 'oh, there\'s nothing here :(', id:`1a`}];
  }
  return {
    type: ACTIONS.SET_LIST_OF_FILMS,
    moviesList,
    requestField: ''
  }
};

export const getMoviesSessions = () => {
  return dispatch => {
    let sessionsList = [];
    fetch('https://cinema-api-test.herokuapp.com/movieShows')
      .then(response => {
        return response.text()
      })
      .then(response => {
        sessionsList = JSON.parse(response);
        dispatch(setListOfsessions(sessionsList));
      });
  }
};

const setListOfsessions = (sessionsList) => {
  return {
    type: ACTIONS.SET_MOVIE_SESSIONS,
    sessionsList
  }
};

export const setRequestFieldValue = (event) => {
  let requestField = event.target.value;
  return {
    type: ACTIONS.SET_REQUEST_FIELD_VALUE,
    requestField
  }
};

export const handleChangeOfGenre = (event) => {
  let chosenGenre = event.target.value;
  return {
    type: ACTIONS.CHANGING_GENRE_IN_SELECT,
    chosenGenre
  }
};

//Handling user's request with information about name or\and genre
export const handleRequest = () => {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let chosenGenre = getState().todo.chosenGenre;
    let requestField = getState().todo.requestField;


    if (chosenGenre < 0 && requestField.length <= 0) {
      let movieList = [];
      window.location.hash = `movies`;
      fetch('https://cinema-api-test.herokuapp.com/movies')
        .then(response => {
          return response.text()
        })
        .then(response => {
          movieList = JSON.parse(response);
          setTimeout(() => dispatch(finishLoading()), 1100);
          dispatch(setListOfFilms(movieList));
        });
    } else {
      if (chosenGenre >= 0 && requestField.length <= 0) {
        window.location.hash = `movies/find?name&genres=${chosenGenre}`;
        let movieList = [];
        fetch(`https://cinema-api-test.herokuapp.com/movies/find?name&genres=${chosenGenre}`)
          .then(response => {
            return response.text()
          })
          .then(response => {
            movieList = JSON.parse(response);
            setTimeout(() => dispatch(finishLoading()), 1100);
            dispatch(setListOfFilms(movieList));
          });
      }
      if (chosenGenre < 0 && requestField.length > 0) {
        window.location.hash = `movies/find?name=${requestField}&genres`;
        let movieList = [];
        fetch(`https://cinema-api-test.herokuapp.com/movies/find?name=${requestField}&genres`)
          .then(response => {
            return response.text()
          })
          .then(response => {
            movieList = JSON.parse(response);
            setTimeout(() => dispatch(finishLoading()), 1100);
            dispatch(setListOfFilms(movieList));
          });
      }
      if (chosenGenre >= 0 && requestField.length > 0) {
        window.location.hash = `movies/find?name=${requestField}&genres=${chosenGenre}`;
        let movieList = [];
        fetch(`https://cinema-api-test.herokuapp.com/movies/find?name=${requestField}&genres=${chosenGenre}`)
          .then(response => {
            return response.text()
          })
          .then(response => {
            movieList = JSON.parse(response);
            setTimeout(() => dispatch(finishLoading()), 1100);
            dispatch(setListOfFilms(movieList));
          });
      }
    }
  }
};

export const getSessionsOfMovie = (event) => {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let movieId = event.target.dataset.movieId;
    window.location.hash = `movieShows?movie_id=${movieId}`;
    let addInf = getState().todo.moviesList.find(item => item._id === movieId);
    let sessionsList = [];
    fetch(`https://cinema-api-test.herokuapp.com/movieShows?movie_id=${movieId}`)
      .then(response => {
        return response.text()
      })
      .then(response => {
        sessionsList = JSON.parse(response);
        setTimeout(() => dispatch(finishLoading()), 1100);
        dispatch(startBookingTicket(sessionsList, movieId, addInf));
      });
  }
};

const startBookingTicket = (sessionsList, movieId, addInfForBooking) => {
  return{
    type: ACTIONS.BOOKING_TICKET,
    sessionsList,
    movieId,
    addInfForBooking
  }
};

const startLoading = () => {
  return {
    type: ACTIONS.START_LOADING
  }
};

const finishLoading = () => {
  return {
    type: ACTIONS.FINISH_LOADING
  }
};

export const finishBooking = () => {
  return {
    type: ACTIONS.FINISH_BOOKING
  }
};

export const prepForBookTick = (event) => {
  return (dispatch, getState) => {
    let currentPlaceNum = event.target.dataset.id;
    let row = event.target.dataset.row;
    let place_position = event.target.dataset.placePosition;
    console.log(currentPlaceNum, row, place_position);
    dispatch(currentPlace(currentPlaceNum, row, place_position));
  }
};

const currentPlace = (currentPlaceNum, row_id, place_position) => {
  return {
    type: ACTIONS.CURRENT_PLACE,
    chosenPlaceId: currentPlaceNum,
    row_id: row_id,
    place_position: place_position
  }
};

export const buyTicket = () => {
  return (dispatch, getState) => {
    dispatch(startLoading());
    window.location.hash = `bookingPlace`;
    const {movieId,
      row_id,
      place_position} = getState().todo;
    console.log(getState().todo);
    fetch('https://cinema-api-test.herokuapp.com/bookingPlace', {
      method: 'POST',
      body: JSON.stringify({
        movieShow_id : movieId,
        row_id: row_id,
        place_position: place_position,
        isFree: false
      }),
    })
      .then(response => {
        setTimeout(() => dispatch(finishLoading()), 1100);
        setTimeout(() => dispatch(showInfo(response.status)),1000);
      })
  }
};

export const showInfo = (info) => {
  return {
    type: ACTIONS.SHOW_INFO,
    info: info
  }
};

export const removeInfo = () => {
  window.location.hash = `movies`;
  return {
    type: ACTIONS.REMOVE_INFO
  }
};