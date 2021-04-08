import './App.css';
import React from 'react';
import Navbar from './navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/home';
import BuildersGuide from './components/pages/buildersGuide';
import News from './components/pages/news';
import Shop from './components/pages/shop';
import SuggestedBuilds from './components/pages/suggestedBuilds';
import cpu from './parts/cpu';
import Case from './parts/case';
import cpuCooler from './parts/cpuCooler';
import memory from './parts/memory';
import motherboard from './parts/motherboard';
import operatingSystem from './parts/operatingSystem';
import opticalDrive from './parts/opticalDrive';
import powerSupply from './parts/powerSupply';
import storage from './parts/storage';
import videoCard from './parts/videoCard';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/buildersGuide' component={BuildersGuide} />
        <Route path='/PC-MegaMind' component={Home} />
        <Route path='/news' component={News} />
        <Route path='/shop' component={Shop} />
        <Route path='/suggestedBuilds' component={SuggestedBuilds} />
        <Route path='/cpu' component={cpu} />
        <Route path='/case' component={Case} />
        <Route path='/cpuCooler' component={cpuCooler} />
        <Route path='/memory' component={memory} />
        <Route path='/motherboard' component={motherboard} />
        <Route path='/operatingSystem' component={operatingSystem} />
        <Route path='/opticalDrive' component={opticalDrive} />
        <Route path='/powerSupply' component={powerSupply} />
        <Route path='/storage' component={storage} />
        <Route path='/videoCard' component={videoCard} />

      </Switch>
    </Router>
  );
}

export default App;
