import { datadogRum } from '@datadog/browser-rum';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import icon from '../../assets/icon.png';

const Home = () => {
  return (
    <div style={{ width: '100vw', padding: '20px', display: 'flex' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={icon} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            onClick={() => {
              datadogRum.addAction(
                'hack-a-dog-21-electron-rum-sdk : action 1',
                {
                  key: 'Home',
                  name: 'action 1',
                }
              );
            }}
          >
            Click Me (action 1)!
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginLeft: '20px' }}>
        <Card.Img variant="top" src={icon} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            onClick={() => {
              datadogRum.addAction(
                'hack-a-dog-21-electron-rum-sdk : action 2',
                {
                  key: 'Home',
                  name: 'action 2',
                }
              );
            }}
          >
            Click Me (action 2)!
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginLeft: '20px' }}>
        <Card.Img variant="top" src={icon} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            variant="danger"
            onClick={() => {
              throw new Error(
                'hack-a-dog-21-electron-rum-sdk : Expected unhandled error'
              );
            }}
          >
            Click Me (throw Error )!
          </Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginLeft: '20px' }}>
        <Card.Img variant="top" src={icon} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            variant="warning"
            onClick={() => {
              const start = Date.now();
              // block for 200ms
              while (Date.now() - start < 200);
            }}
          >
            Click Me (generate a long task)!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
