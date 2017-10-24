import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Project from './Project';
import portfolio from '../data/portfolio.json';

export default function Home() {
  console.log('portfolio', portfolio);

  return (
    <Router>
      <div>
        home
        <ul>
          <li><Link to="/hitchcock">Hitchcock</Link></li>
        </ul>

        
        <Switch>
          <Route path="/hitchcock" component={Project}/>
        </Switch>
      </div>
    </Router>
  );
}


// /* {portfolio.forEach(project => {
//   return (
//     <li key={project.id}>
//       <Link to={project.path}>
//         {project.title}
//       </Link>
//     </li>
//   );
// })} */


// {portfolio.forEach(project => {
//   return <Route key={project.id} path={project.path} render={() => <Project project={project} />} />;
// })}