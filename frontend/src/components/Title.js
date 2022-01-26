import React from 'react';

const Title = ({props}) => {

  return <div>
      <section className="hero">
          <div className="hero-body">
              <p className="title">
                  {props.title}
              </p>
              <p className="subtitle">
                  {props.subtitle}
              </p>
          </div>
      </section>
  </div>;
}


export default Title;