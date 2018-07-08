import React, { Component } from 'react';
import { connect } from 'react-redux';

class %NAME% extends Component {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="%NAME%">
        Dummy connected container: %NAME%
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
};

export default connect(mapStateToProps)(%NAME%);
