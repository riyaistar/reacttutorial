import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './component/Greet'
import Welcome from './component/Welcome'
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import Usergreeting from './conditional/Usergreeting';
import NameList from './Listrendering/NameList';
import PersonList from './Listrendering/PersonList';
import Form from './form/Form';
import ReactLifecycleA from './reactlifecycle/ReactLifecycleA';
import ErrorBoundary from './error/ErrorBoundary';
import Hero from './error/Hero';
import ClickCounter from './hoc/ClickCounter';
import HoverCounter from './hoc/HoverCounter';
function App() {
  return (
//     <main role="main">
//         <div className="container">
//         <div className="row">
//       <div className="col-md-4">
//         <Greet></Greet>
//         <ParentComponent></ParentComponent>
//         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
//         <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
//       </div>
//       <div className="col-md-4">
//        <Welcome></Welcome>
//         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
//         <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
//       </div>
//       <div className="col-md-4">
//         <h2>Heading</h2>
//         <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
//         <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
//         <FunctionClick></FunctionClick>
//         <ClassClick></ClassClick>
//         <EventBind></EventBind>
//       </div>
//     </div>

// </div>
// </main>
//<Usergreeting></Usergreeting>
//<NameList></NameList>
//<PersonList></PersonList>
//<Form></Form>
//<ReactLifecycleA/>
// <ErrorBoundary>
 // <Hero heroName="Batman"></Hero>
 // <Hero heroName="Superman"></Hero>
 // <Hero heroName="Joker"></Hero>

//</ErrorBoundary>
<React.Fragment>
<ClickCounter/>
<HoverCounter/>
</React.Fragment> 
  );
}

export default App;
