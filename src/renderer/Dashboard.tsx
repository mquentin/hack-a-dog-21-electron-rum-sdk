const Dashboard = () => {
  return (
    <webview
      id="webview"
      src="https://p.datadoghq.com/sb/b4da2952-485a-11ec-a31e-da7ad0900002-50e5b6312b12e1e87e1879505eeee507?from_ts=1637240559440&to_ts=1637244159440&live=true"
      nodeintegration
      style={{ display: 'inline-flex', width: '1000px', height: '600px' }}
    />
  );
};

export default Dashboard;
