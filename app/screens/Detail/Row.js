import React, {Component, PropTypes} from 'react';

export default class Row extends Component {
  constructor(props) {
    super(props)
    this.state = {data: this.props.data}

  }

  componentWillMount(){
    console.log(this.props.data)
  }

  render() {
    return (
      <div  className="row">
          <div className="col-sm-3">
            Group Name
          </div>
          <div className="col-sm-3">
            twitterMatchGroups
          </div>
          <div className="col-sm-3">
            instagramMatchGroups
          </div>
          <div className="col-sm-3">
            Keywords
          </div>
      </div>
    );
  }
}