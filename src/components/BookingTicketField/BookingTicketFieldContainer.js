import {connect} from 'react-redux';

import BookingTicketField from "./BookingTicketField";

import {finishBooking, buyTicket} from '../../actions/actionCreator';

function mapStateToProps(state) {
  return {
    addInfForBooking: state.todo.addInfForBooking,
    sessionsList: state.todo.sessionsList,
    isInfo: state.todo.isInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    finishBooking: () => dispatch(finishBooking()),
    buyTicket: () => dispatch(buyTicket())
  };
}


const BookingTicketFieldContainer = connect(mapStateToProps, mapDispatchToProps)(BookingTicketField);

export default BookingTicketFieldContainer;