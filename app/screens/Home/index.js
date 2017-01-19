import React, {Component} from 'react';

export default class Home extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.context.router.push({pathname: `/detail/`+this.state.randomId});
  }
  
  constructor(props){
    super(props);
    this.state= {'randomId':''}
  }
  generateId(){
    var format = "00000001-0002-0003-0004-1000000"+Math.floor(Math.random()*90000);
    this.setState({'randomId':format})
  }
  render() {
    return (
      <section className="container home">
        <form
          className="form-inline"
          role="form"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter a user id..."
                className="form-control main-txtbox"
                required="required"
                onChange={(e)=> this.setState({'randomId':e.target.value})}
                value={this.state.randomId}
                ref={ref => (this._input = ref)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Go!
          </button>
          <br/>
          <br/>
          <br/>
          <button type="button" className="btn btn-primary" onClick={this.generateId.bind(this)}>
            Generate new user id
          </button>
          <br/>
          
        </form>
      </section>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
