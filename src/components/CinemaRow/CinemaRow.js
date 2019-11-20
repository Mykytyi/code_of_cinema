import React, {Component} from 'react';

import './CinemaRowStyles.css';

class CinemaRow extends Component {
  render() {
    const {columns, index, prepForBookTick, currentPlace} = this.props;
    return (
        <li style={{position: 'relative'}}>
          <span className="rowNumericField">Row {index}</span>
          <ul className="cinemaRow">
            {columns.map((item) => {
              let isFree = item.isFree;
              let className = 'onePlace';
              if (!isFree) {
                className = 'onePlace notFree'
              } else {
                if (currentPlace === item._id) {
                  className += ' chosenPlace'
                }
              }
              return <li className={className}
                         key={item._id}
                         data-row={index}
                         data-place-position={item.position}
                         data-id={item._id}
                         onClick={(event) => {
                           if (isFree) { return prepForBookTick(event)}
                         }}
              >{item.position}</li>
            })}
          </ul>
        </li>
    );
  }
}

export default CinemaRow;