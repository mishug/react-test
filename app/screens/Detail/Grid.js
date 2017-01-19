import React, {Component, PropTypes} from 'react';
import Row from './Row';
import RowHead from './RowHead';

export default class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {data: this.props.data}

  }

  componentWillMount(){
  }

  render() {
    var rows = [];
    var self = this;
    this.state.data.instagramMatchGroups.forEach(function (val, k){
      var o = {

        instagramMatchGroups : self.props.data.instagramMatchGroups[k].influencers.join(","),
        twitterMatchGroups : self.props.data.twitterMatchGroups[k].influencers.join(","),
        keywords : self.props.data.instagramMatchGroups[k].keywords.join(","),
        name : self.props.data.instagramMatchGroups[k].name
      }
      console.log(o)
      rows.push(JSON.stringify(o));
      // rows.push(<div><Row data={o} /></div>);
    })
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            Groups
          </div>
          <div className="panel-body">
            <div className="">
            <code>
            {rows}
            </code>
            </div>
          </div>
        </div>
      </div>
    );
  }
}