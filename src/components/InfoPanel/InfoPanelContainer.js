import {connect} from 'react-redux';

import InfoPanel from "./InfoPanel";

import {removeInfo} from '../../actions/actionCreator';

function mapStateToProps(state) {
  return {
    info: state.todo.info
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeInfo: () => dispatch(removeInfo())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel);