import { datadogRum } from '@datadog/browser-rum';

import icon from '../../assets/icon.svg';
import './App.css';

const Home = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <button
          type="button"
          onClick={() => {
            console.log('Click Me!');
            datadogRum.addAction('Click Me!', {
              key: 'fou',
            });
          }}
        >
          Click Me!
        </button>
      </div>
    </div>
  );
};

export default Home;
