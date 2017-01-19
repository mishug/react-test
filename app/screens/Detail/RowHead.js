import React, {Component, PropTypes} from 'react';

export default class RowHead extends Component {
  constructor(props) {
    super(props)
    this.state = {data: this.props.data}

  }

  componentWillMount(){
  }

  render() {
    return (
      <div  className="row">
          <div className="col-sm-3 text-left">
            Group Name
          </div>
          <div className="col-sm-3 text-left">
            
            twitterMatchGroups
            
          </div>
          <div className="col-sm-3 text-left">
            
            instagramMatchGroups
            
          </div>
          <div className="col-sm-3 text-left">
            
            Keywords
            
          </div>
      </div>
    );
  }
}