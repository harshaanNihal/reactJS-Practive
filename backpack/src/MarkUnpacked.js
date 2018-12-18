import React, { Component, Fragment } from 'react';

class MarkUnpacked extends Component{
  render(){
    return(
      <Fragment>
        <button className="mark_unpacked" onClick={this.props.handleMarkUnpacked} >Mark All UnPacked</button>
      </Fragment>
    )
  }
}

export default MarkUnpacked;