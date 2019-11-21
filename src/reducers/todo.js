import { ACTIONS } from '../constants';
import {initialState} from './initialState';

export function todo(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SET_LIST_OF_FILMS:
      return {
        ...state,
        moviesList: action.moviesList,
        requestField: ''
      };
    case ACTIONS.SET_MOVIE_SESSIONS:
      return {
        ...state,
        sessionsList: action.sessionsList
      };
    case ACTIONS.SET_REQUEST_FIELD_VALUE:
      return {
        ...state,
        requestField: action.requestField
      };
    case ACTIONS.CHANGING_GENRE_IN_SELECT:
      return {
        ...state,
        chosenGenre: action.chosenGenre
      };
    case ACTIONS.BOOKING_TICKET:
      return {
        ...state,
        sessionsList: action.sessionsList,
        movieId: action.movieId,
        addInfForBooking: action.addInfForBooking,
        isBookingTicket: true
      };
    case ACTIONS.START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case ACTIONS.FINISH_LOADING:
      return {
        ...state,
        isLoading: false
      };
    case ACTIONS.FINISH_BOOKING:
      return {
        ...state,
        isBookingTicket: false
      };
    case ACTIONS.PREPARE_FOR_BOOKING_TICKET:
      return {
        ...state
      };
    case ACTIONS.CURRENT_PLACE:
      return {
        ...state,
        chosenPlaceId: action.chosenPlaceId,
        row_id: action.row_id,
        place_position: action.place_position
      };
    case ACTIONS.SHOW_INFO:
      return {
        ...state,
        isInfo: true,
        info: action.info
      };
    case ACTIONS.REMOVE_INFO:
      return {
        ...state,
        isInfo: false,
        sessionsList: [],
        movieId: null,
        isBookingTicket: false,
        addInfForBooking: null,
        chosenPlaceId: null,
        row_id: null,
        place_position: null,
        info: null
      };
    default:
      return {
        ...state
      }
  }
}