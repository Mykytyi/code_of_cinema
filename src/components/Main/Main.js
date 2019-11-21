import React, {Component} from 'react';
import './MainStyles.css';
import Loader from "../Loader/Loader";
import MovieItemContainer from "../MovieItemContainer/MovieItemContainer";

class Main extends Component {

  componentDidMount() {
    this.props.getListOfFilms();
    this.props.getMoviesSessions();
  }

  render() {
    const {
      moviesList,
      requestField,
      setRequestFieldValue,
      handleChangeOfGenre,
      handleRequest,
      isLoading} = this.props;
    return (
      <React.Fragment>

        <header className="mainHeader">
          <div className="mainHeader_wrap">
            <h2>Schedule</h2>
          </div>
        </header>

        <main>
          <div className="mainWrap">
            <ul className="listOfTools">
              <li className="listItemOfSearch"><input type="text"
                                                      placeholder="Find a movie"
                                                      className="searchField"
                                                      value={requestField}
                                                      onChange={(event) => setRequestFieldValue(event)}/></li>
              <li className="listItemSelect">
                <select className="chosingGenere" onChange={(event) => handleChangeOfGenre(event)}>
                  <option value={-1}>GENRES</option>
                  <option value={0}>ACTION</option>
                  <option value={1}>ADVENTURES</option>
                  <option value={2}>COMEDY</option>
                  <option value={3}>DRAMA</option>
                  <option value={4}>HORROR</option>
                  <option value={5}>WESTERNS</option>
                </select>
              </li>
              <li className="listItemButton"><input type="button"
                                                    value='Show films'
                                                    onClick={() => handleRequest()}
              /></li>
            </ul>
            <ul className="listOfMovies">
              {moviesList.map((item) => {
                return <MovieItemContainer
                  key={item._id}
                  name={item.name}
                  pictureLink={item.pictureLink}
                  dateOfRelease={item.dateOfRelease}
                  description={item.description}
                  genre_id={item.genre_id}
                  movieId={item._id}
                />
              })}
            </ul>
          </div>
        </main>
        {isLoading && <Loader/>}
      </React.Fragment>
    );
  }
}

export default Main;