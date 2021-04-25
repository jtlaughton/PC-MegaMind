import './App.css';
import React from 'react';
import Navbar from './navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'

import Home from './components/pages/home';
import BuildersGuide from './components/pages/buildersGuide/buildersGuide';
import News from './components/pages/newsMenu/news';
import Shop from './components/pages/shop/shop';
import SuggestedBuilds from './components/pages/buildersGuide/suggestedBuilds/suggestedBuilds';
import newsExample from './components/pages/newsMenu/newsExample';

import cpu_buildersGuide from './components/pages/buildersGuide/cpu/cpu';
import Case_buildersGuide from './components/pages/buildersGuide/case/case';
import cpuCooler_buildersGuide from './components/pages/buildersGuide/cpuCooler/cpuCooler';
import memory_buildersGuide from './components/pages/buildersGuide/memory/memory';
import motherboard_buildersGuide from './components/pages/buildersGuide/motherboard/motherboard';
import operatingSystem_buildersGuide from './components/pages/buildersGuide/operatingSystem/operatingSystem';
import opticalDrive_buildersGuide from './components/pages/buildersGuide/opticalDrive/opticalDrive';
import powerSupply_buildersGuide from './components/pages/buildersGuide/powerSupply/powerSupply';
import storage_buildersGuide from './components/pages/buildersGuide/storage/storage';
import videoCard_buildersGuide from './components/pages/buildersGuide/videoCard/videoCard';
import exampleBuild_buildersGuide from './components/pages/buildersGuide/suggestedBuilds/exampleBuild';
import cart_example from './components/pages/buildersGuide/suggestedBuilds/cartPage'

import cpu_news from './components/pages/newsMenu/cpu/cpu';
import Case_news from './components/pages/newsMenu/case/case';
import cpuCooler_news from './components/pages/newsMenu/cpuCooler/cpuCooler';
import memory_news from './components/pages/newsMenu/memory/memory';
import motherboard_news from './components/pages/newsMenu/motherboard/motherboard';
import operatingSystem_news from './components/pages/newsMenu/operatingSystem/operatingSystem';
import opticalDrive_news from './components/pages/newsMenu/opticalDrive/opticalDrive';
import powerSupply_news from './components/pages/newsMenu/powerSupply/powerSupply';
import storage_news from './components/pages/newsMenu/storage/storage';
import videoCard_news from './components/pages/newsMenu/videoCard/videoCard';

import cpu_shop from './components/pages/shop/cpu/cpu';
import Case_shop from './components/pages/shop/case/case';
import cpuCooler_shop from './components/pages/shop/cpuCooler/cpuCooler';
import memory_shop from './components/pages/shop/memory/memory';
import motherboard_shop from './components/pages/shop/motherboard/motherboard';
import operatingSystem_shop from './components/pages/shop/operatingSystem/operatingSystem';
import opticalDrive_shop from './components/pages/shop/opticalDrive/opticalDrive';
import powerSupply_shop from './components/pages/shop/powerSupply/powerSupply';
import storage_shop from './components/pages/shop/storage/storage';
import videoCard_shop from './components/pages/shop/videoCard/videoCard';
import cart_shop from './components/pages/shop/cartPage'


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/buildersGuide' component={BuildersGuide} />
        <Route path='/PC-MegaMind' component={Home} />
        <Route path='/news' component={News} />
        <Route path='/shop' component={Shop} />
        <Route path='/suggestedBuilds' component={SuggestedBuilds} />
        <Route path='/cpu_buildersGuide' component={cpu_buildersGuide} />
        <Route path='/case_buildersGuide' component={Case_buildersGuide} />
        <Route path='/cpuCooler_buildersGuide' component={cpuCooler_buildersGuide} />
        <Route path='/memory_buildersGuide' component={memory_buildersGuide} />
        <Route path='/motherboard_buildersGuide' component={motherboard_buildersGuide} />
        <Route path='/operatingSystem_buildersGuide' component={operatingSystem_buildersGuide} />
        <Route path='/opticalDrive_buildersGuide' component={opticalDrive_buildersGuide} />
        <Route path='/powerSupply_buildersGuide' component={powerSupply_buildersGuide} />
        <Route path='/storage_buildersGuide' component={storage_buildersGuide} />
        <Route path='/videoCard_buildersGuide' component={videoCard_buildersGuide} />
        <Route path='/exampleBuild' component={exampleBuild_buildersGuide} />
        <Route path='/newsExample' component={newsExample} />
        <Route path='/cart_example' component={cart_example} />

        <Route path='/cpu_news' component={cpu_news} />
        <Route path='/case_news' component={Case_news} />
        <Route path='/cpuCooler_news' component={cpuCooler_news} />
        <Route path='/memory_news' component={memory_news} />
        <Route path='/motherboard_news' component={motherboard_news} />
        <Route path='/operatingSystem_news' component={operatingSystem_news} />
        <Route path='/opticalDrive_news' component={opticalDrive_news} />
        <Route path='/powerSupply_news' component={powerSupply_news} />
        <Route path='/storage_news' component={storage_news} />
        <Route path='/videoCard_news' component={videoCard_news} />

        <Route path='/cpu_shop' component={cpu_shop} />
        <Route path='/case_shop' component={Case_shop} />
        <Route path='/cpuCooler_shop' component={cpuCooler_shop} />
        <Route path='/memory_shop' component={memory_shop} />
        <Route path='/motherboard_shop' component={motherboard_shop} />
        <Route path='/operatingSystem_shop' component={operatingSystem_shop} />
        <Route path='/opticalDrive_shop' component={opticalDrive_shop} />
        <Route path='/powerSupply_shop' component={powerSupply_shop} />
        <Route path='/storage_shop' component={storage_shop} />
        <Route path='/videoCard_shop' component={videoCard_shop} />
        <Route path='/cart_shop' component={cart_shop}/>

      </Switch>
    </HashRouter>
  );
}

export default App;
