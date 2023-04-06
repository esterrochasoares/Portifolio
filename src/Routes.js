import  {BrowserRouter as Router, Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from './components/Home';
import Projetos from './components/Projetos';
import Tecnologias from './components/Tecnologias';

export const Routes = () => {
    return (
        <Router>
            <ReactRoutes>
                <Route path="/" element={<Home/> }/>
                <Route path="/Projetos" element={<Projetos/>} />
                <Route path="/Tecnologias" element={<Tecnologias/>} />
            </ReactRoutes>
        </Router>
    );
};

export default Routes;