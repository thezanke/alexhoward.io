import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './lib/register-service-worker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
