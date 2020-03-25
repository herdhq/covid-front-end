import React from 'react';
import IndiaStats from './IndiaStats/IndiaStats.js'
// import TodayCases from './TodayCases/TodayCases.js'
import StatewiseCases from './StatewiseCases/StatewiseCases.js'
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import HospitalsContacts from './HospitalsContacts/HospitalsContacts.js'
import News from './News/News.js';
import Notifications from './Notifications/Notifications.js';
import ContagionGraph from './ContagionGraph/ContagionGraph.js';
import CountrywiseComparison from './CountrywiseComparison/CountrywiseComparison.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stats: true,
      healthcare: false,
      news: false,
      notifications: false,
    }
  }
  render() {
    const { stats, healthcare, news, notifications } = this.state;
    return (
      <div style={{width:'100%', overflowX:'hidden', backgroundColor:'#f2f2f2'}}>
        {/* Header */}
        <Header 
          state={stats}
          healthcare={healthcare}
          news={news}
          notifications={notifications}
        />
        <div style={{marginTop:'120px'}}> 
          {/* component for corona stats in India */}
          <IndiaStats />
          {/* component for today's cases */}
          {/* <TodayCases /> */}
          <CountrywiseComparison />
          {/* component for statewise cases */}
          <StatewiseCases />
        </div>
        <div>
          {/* component for hospital details */}
          <HospitalsContacts />
          <ContagionGraph />
        </div>
        <div>
          {/* component for notification */}
          <Notifications />
        </div>
        <div>
          {/* component for news */}
          <News />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}