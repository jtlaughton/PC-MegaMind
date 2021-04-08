import './App.css';
import React from 'react';
import Navbar from './navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/home';
import BuildersGuide from './components/pages/buildersGuide';
import News from './components/pages/news';
import Shop from './components/pages/shop';
import SuggestedBuilds from './components/pages/suggestedBuilds';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/buildersGuide' component={BuildersGuide} />
        <Route path='/news' component={News} />
        <Route path='/shop' component={Shop} />
        <Route path='/suggestedBuilds' component={SuggestedBuilds} />

      </Switch>
    </Router>
  );
}

export default App;
