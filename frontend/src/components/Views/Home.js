import React, { Component } from 'react'


import Title from '../Title';
import Grid from '../Tiles/Grid';


export default class Home extends Component {

constructor(...args){
  super(...args);

  this.state = {
    tileClicked: null,
    vendors: []
  }
}

componentDidMount(){

}

//TODO:
// action function that loads the 



  render() {
    const { vendors } = this.props.props;

    return <div>
      <Title props={{ 'title': 'Welcome to the landing page', 'subtitle': `Vendors you work with: ${vendors}.` }} />

      {/* outer div */}
      <div style={{ paddingLeft: 25, paddingRight: 25 }}>
        <div>Create a files scrolling</div>
        <Grid props={{ "vendors": [...vendors] }} />
      </div>

    </div>;
  }
}
