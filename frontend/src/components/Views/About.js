import React from 'react';
import Title from '../Title';
import { FaReact, FaPython} from "react-icons/fa"

const About = () => {
  return <div>

    <Title props={{ "title": "About us", "subtitle": "This is the about page." }}></Title>


    <section className='hero'>

      <div style={{paddingLeft: 50}}>
        Built with react.js <FaReact size="2em"/> and python <FaPython  size="2em"/>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </section>
  </div>;
}

export default About;