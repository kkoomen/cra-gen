import React from 'react';
import { connect } from 'react-redux';

const %NAME% = (props) => {
  return (
    <div className="%NAME%">
      Dummy stateless connected component: %NAME%
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {};
}

export default connect(mapStateToProps)(%NAME%);
