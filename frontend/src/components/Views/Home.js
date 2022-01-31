import React, { Component } from 'react'


import Title from '../Title';
import Grid from '../Tiles/Grid';
import Layout from '../Layout';
import SubTitle from '../SubTitle';


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


        <br />
        <Layout />
        <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>

          <SubTitle props={{ "subtitle": "List of vendors:" }} />
        </div>
        <Grid props={{ "vendors": [...vendors] }} />

      </div>

    </div>;
  }
}
