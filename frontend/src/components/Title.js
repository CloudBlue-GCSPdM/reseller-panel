import React from 'react';

const Title = ({props}) => {

console.log("here ar e the props:", {props})
  return <div>
      <section class="hero">
          <div class="hero-body">
              <p class="title">
                  {props.title}
              </p>
              <p class="subtitle">
                  {props.subtitle}
              </p>
          </div>
      </section>
  </div>;
}


export default Title;