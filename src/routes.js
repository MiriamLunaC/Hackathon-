import EspeciesComponent from './components/Especies/EspeciesComponent';
import Home from './components/Home/HomeComponent';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/Hackathon-',
    exact: true,
    component: Home
  },
  {
    path: '/Hackathon-/especies',
    exact: true,
    component: EspeciesComponent
  }
];

export default routes;