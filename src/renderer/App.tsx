import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { datadogRum } from '@datadog/browser-rum';

import Home from './Home';
import Dashboard from './Dashboard';

import rumToken from '../rum/token/token';

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
    <BrowserRouter>
      <div className="menu">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/dashboard">
          <h2>Dashboard</h2>
        </Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
