import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () => (
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div
      className="inner"
      style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}
    >
      <h1>Client Name</h1>
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://vimeo.com/event/33904/embed"
          frameBorder={0}
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            marginBottom: '20px',
          }}
        />
      </div>
      <br />
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://app.sli.do/event/ljhsmpln/live/questions"
          frameBorder={0}
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      {/* <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Learn more
            </a>
          </Scroll>
        </li>
      </ul> */}
    </div>
  </section>
);

export default Introduction;
