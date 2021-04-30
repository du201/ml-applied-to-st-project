import { LineChart, Line } from 'recharts';
import { useState, useEffect } from 'react';
import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import ClassificationOnePage from "./pages/ClassificationOnePage";
import ClassificationTwoPage from './pages/ClassificationTwoPage';
import DataSourcePage from './pages/DataSourcePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

import './App.css';

const data = [{name: 'Page A', uv: 200, pv: 2000, amt: 2400}, {name: 'Page A', uv: 600, pv: 2400, amt: 2400}, {name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
const CLASSIFICATION_1_PAGE = "class1";
const CLASSIFICATION_2_PAGE = "class2";
const ABOUT_PAGE = "about";
const CONTACT_PAGE = "contact";
const DATA_SOURCE_PAGE = "data_source";

const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

function App() {
  const [currentPage, setCurrentPage] = useState(ABOUT_PAGE);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height:"8vh"}}>
        <div className="container-fluid">
          <a className="navbar-brand title-text" href="#"><span style={{fontSize:"2.5rem"}}></span> 
            A Survey on Machine Learning-based Software Testing Literature: <br />
            Checking the Validity of Proposed Classification Systems
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={"nav-link nav-text" + (currentPage === CLASSIFICATION_1_PAGE ? " nav-bottom-highlight" : "")} onClick={() => setCurrentPage(CLASSIFICATION_1_PAGE)} to="/classification-1-result">Classification 1 Result</Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link nav-text" + (currentPage === CLASSIFICATION_2_PAGE ? " nav-bottom-highlight" : "")} onClick={() => setCurrentPage(CLASSIFICATION_2_PAGE)} to="/classification-2-result">Classification 2 Result</Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link nav-text" + (currentPage === DATA_SOURCE_PAGE ? " nav-bottom-highlight" : "")} onClick={() => setCurrentPage(DATA_SOURCE_PAGE)} to="/data-source">Data Source</Link>
              </li>
              <li className="nav-item">
                <div className="navbar-division-line"></div>
              </li>
              <li className="nav-item">
                <Link className={"nav-link nav-text" + (currentPage === ABOUT_PAGE ? " nav-bottom-highlight" : "")} onClick={() => setCurrentPage(ABOUT_PAGE)} to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link nav-text" + (currentPage === CONTACT_PAGE ? " nav-bottom-highlight" : "")} onClick={() => setCurrentPage(CONTACT_PAGE)} to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/classification-1-result" render={(props) => <ClassificationOnePage {...props}></ClassificationOnePage>}></Route>
        <Route path="/classification-2-result" render={(props) => <ClassificationTwoPage {...props}></ClassificationTwoPage>}></Route>
        <Route path="/data-source" render={(props) => <DataSourcePage {...props}></DataSourcePage>}></Route>
        <Route path="/contact" render={(props) => <ContactPage {...props}></ContactPage>}></Route>
        <Route path="/" render={(props) => <AboutPage {...props}></AboutPage>}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
