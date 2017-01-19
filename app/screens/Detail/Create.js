import React, {Component, PropTypes} from 'react';

export default class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {"randomId": this.props.params.randomId,"gname": "", "igifs":"", "twifs":"", "keywords":""}
  }

  componentWillMount(){
  }

createGroup(e){
e.preventDefault();
var o= {
  userId: this.state.randomId,
  info: {
    "email": "email@example.com",
    "firstName": "f",
    "lastName": "l"
  },
  "twitterMatchGroups": [
    {
      "name": this.state.gname,
      "influencers": this.state.twifs.split(','),
      "keywords": this.state.keywords.split(',')
    }
  ],
  "instagramMatchGroups": [
    {
      "name": this.state.gname,
      "influencers": this.state.igifs.split(','),
      "keywords": this.state.keywords.split(',')
    }
  ]
}
this.prepare(o);
}
prepare(current){
    $.ajax({
      url: "http://108.168.180.148/userconfig/"+this.state.randomId,
      cache: false,
      success: function(data) {

          this.createnew(data, current);

      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({successpost:false});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });  

}
createnew(old, newdata){

    var concat = Object.assign({},old, newdata);
    if(old.twitterMatchGroups){
      console.log('init')
      concat.twitterMatchGroups = concat.twitterMatchGroups.concat(old.twitterMatchGroups);}

    if(old.instagramMatchGroups) concat.instagramMatchGroups = concat.instagramMatchGroups.concat(old.instagramMatchGroups);

    $.ajax({
      url: "http://108.168.180.148/userconfig",
      data:JSON.stringify(concat),
      method:'put',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data)
        this.context.router.push({pathname: `/detail/`+this.state.randomId});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });  
}
  render() {
    return (
      <div className="container">
        <form onSubmit={this.createGroup.bind(this)}>
          <div className="form-group">
            <div className="col-sm-6 text-right">
              Group Name: 
            </div>
            <div className="col-sm-6">
              <input type="text" required="required"
                onChange={(e)=> this.setState({'gname':e.target.value})}
                />
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <div className="form-group">
            <div className="col-sm-6 text-right">
              Keywords (keep them comma seprated): 
            </div>
            <div className="col-sm-6">
              <input type="text" required="required"
                onChange={(e)=> this.setState({'keywords':e.target.value})}
                />
            </div>
          </div>
          <br/>
          <br/>
          <div className="form-group">
            <div className="col-sm-6 text-right">
              Instagarm influencers (keep them comma seprated): 
            </div>
            <div className="col-sm-6">
              <input type="text" required="required"
                onChange={(e)=> this.setState({'igifs':e.target.value})}
                />
            </div>
          </div>
          <br/>
          <br/>
          <div className="form-group">
            <div className="col-sm-6 text-right">
              Twitter influencers (keep them comma seprated): 
            </div>
            <div className="col-sm-6">
              <input type="text" required="required"
                onChange={(e)=> this.setState({'twifs':e.target.value})}
                />
            </div>
          </div>
          <br/>
          <br/>
          <center>
          <button> submit</button>
          </center>
        </form>

      </div>
    );
  }
}

Create.contextTypes = {
  router: React.PropTypes.object.isRequired,
}