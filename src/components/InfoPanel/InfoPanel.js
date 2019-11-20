import React, {Component} from 'react';

import './InfoPanelStyles.css';

class InfoPanel extends Component {
  render() {
    const {info, removeInfo} = this.props;
    return (
      <div className="backgroundInfopanel">
        <div className="infoPanel">
          <p>Code: {info}</p>
          <span className="removeInfo" onClick={() => removeInfo()}>ok</span>
        </div>
      </div>
    );
  }
}

export default InfoPanel;