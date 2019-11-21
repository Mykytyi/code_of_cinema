import React, {Component} from 'react';
import './MovieItemStyles.css';

import BookingTicketFieldContainer from "../BookingTicketField/BookingTicketFieldContainer";

class MovieItem extends Component {
  render() {
    const {
      name,
      pictureLink,
      dateOfRelease,
      description,
      movieId,
      getSessionsOfMovie,
      isBookingTicket} = this.props;
    let release =  new Date(dateOfRelease);
    let dd = String(release.getDate()).padStart(2, '0') ;
    let mm = String(release.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = release.getFullYear();
    return (
      <React.Fragment>
        <li className="listItemContainer" data-movie-id={movieId}>
          <div className="filmsPosterContainer" hidden={!dateOfRelease} onClick={(event) => getSessionsOfMovie(event)}>
            <img src={pictureLink} alt={name} title={name} data-movie-id={movieId}/>
          </div>
          <ul className="descriptionList">
            <li className="movieName"
                onClick={(event) => getSessionsOfMovie(event)}
                data-movie-id={movieId}>{name}</li>
            <li className="movieRelease">{!!dateOfRelease && `Release: ${dd}-${mm}-${yyyy}`}</li>
            <li className="descriptionTitle">{!!dateOfRelease && description}</li>
          </ul>
        </li>
        {isBookingTicket && <BookingTicketFieldContainer/>}
      </React.Fragment>
    );
  }
}

export default MovieItem;