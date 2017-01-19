import React, {Component, PropTypes} from 'react';
import Grid from './Grid';
import Create from './Create';

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {randomId: this.props.params.randomId, data:{}, isShowData:false}

  }

  componentWillMount(){
    this.getData();
  }
  getData(){
    $.ajax({
      url: "http://108.168.180.148/userconfig/"+this.state.randomId,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data)
        this.setState({data: data,isShowData:true});

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {

    return (
      <div className="container">
        <div className="row">
        <div className="col-sm-12">
          <br/>
          <br/>
          <br/>
          <div className="pull-left btn btn-success">
            User: {this.state.randomId}
          </div>
          <div className="pull-left btn btn-default gotohome">
            <a href="/">
            Change user
            </a>
          </div>

          {
          this.state.isShowData
          ? 
          <div className="pull-right btn btn-primary">
            <a href={"/create/"+this.state.randomId} className="pagelink">
            + Add New Group
            </a>
          </div>
          :
          ''
          }
        </div>
        </div>
        <br/>
        <br/>

        <div className="row">
        <div className="col-sm-12">

        {this.state.isShowData
          ? 
            this.state.data.info.email
            ?
            <Grid data={this.state.data}/>
            :
            <center> <div>
              No Data found click top right button to add new 
            </div></center>
            
          : 
            <center> <div>Loading....</div></center>
        }
            </div>                
            </div>

      </div>
    );
  }
}