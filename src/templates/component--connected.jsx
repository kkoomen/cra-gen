import React, { Component } from 'react';

class %NAME% extends Component {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="%NAME%">
        Dummy connected component with state: %NAME%
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
};

export default connect(mapStateToProps)(%NAME%);
