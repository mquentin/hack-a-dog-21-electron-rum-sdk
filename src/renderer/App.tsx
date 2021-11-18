import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { datadogRum } from '@datadog/browser-rum';

import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';

import Home from './Home';
import Dashboard from './Dashboard';

import rumToken from '../rum/token/token';

import '../App.global.css';

export default function App() {
  datadogRum.init({
    applicationId: rumToken.applicationId,
    clientToken: rumToken.clientToken,
    site: 'datadoghq.com',
    service: 'hack-a-dog-21-electron-rum',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel: 'mask-user-input',
  });

  datadogRum.startSessionReplayRecording();

  return (
    <>
      <Stack>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              hack-a-dog-21-electron-rum-sdk
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </Stack>
    </>
  );
}
