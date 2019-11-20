import React, {Component} from 'react';

import './BookingTicketFieldStyles.css';

import CinemaRowContainer from '../CinemaRow/CinemaRowContainer';
import InfoPanelContainer from "../InfoPanel/InfoPanelContainer";

class BookingTicketField extends Component {
  render() {
    const {
      addInfForBooking,
      sessionsList,
      finishBooking,
      buyTicket,
      isInfo} = this.props;
    let price = sessionsList.ticketPrice;
    let startTime = new Date(sessionsList.startTime);
    let ho = String(startTime.getHours()).padStart(2, '0');
    let mi = String(startTime.getMinutes()).padStart(2, '0');
    let dd = String(startTime.getDate()).padStart(2, '0') ;
    let mm = String(startTime.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = startTime.getFullYear();
    let places = sessionsList.places;

    return (
      <React.Fragment>
        <div className="backgroundForBookingField">
          <div className="bookingField">
            <div className="bookingFieldMovieContainer">
              <span className="close" onClick={() => {finishBooking()}}>Delete</span>
              <section className="bookingFieldDetails">
                <div className="filmPosterContainer">
                  <img src={addInfForBooking.pictureLink}
                       alt={addInfForBooking.name}
                       title={addInfForBooking.name}/>
                </div>
                <ul className="bookingDescriptionList">
                  <li className="bookingMovieName">{addInfForBooking.name}</li>
                  <li className="screeningDate">Film starts at {ho}:{mi}({dd}-{mm}-{yyyy})</li>
                  <li className="bookingDescriptionTitle">"{addInfForBooking.description}"</li>
                  <li className="bookingTicketPrice">One ticket costs: {price/10}$</li>
                </ul>
              </section>
              <section className="hallFieldContainer">
                <div className="screenContainer">
                  <p>Screen</p>
                </div>
                <ul className="listOfPlaces">
                  {places.map((item, i) => {
                    return <CinemaRowContainer key={i} columns={item} index={i}/>
                  })}
                </ul>
                <span className="buyTicket" onClick={() => buyTicket()}>Buy ticket</span>
              </section>
            </div>
          </div>
        </div>
        {isInfo && <InfoPanelContainer/>}
      </React.Fragment>
    );
  }
}

export default BookingTicketField;