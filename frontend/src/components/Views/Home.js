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



componentDidUpdate(){
}

  render() {
    const { vendors } = this.props.props;

    return <div>
        {/* <div>   %tbsn 1- This is the homepage</div> */}
      <Title props={{ 'title': 'Welcome to the landing page', 'subtitle': `Vendors you work with: ${vendors}.` }} />
      <Grid props={{ "vendors": [...vendors] }} />
      

    

    </div>;
  }
}
