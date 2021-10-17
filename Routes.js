import React from "react";

import { Switch, Route, Link } from 'react-router-dom';

//import Routes from './Routes';

import Home from './Pages/Home';
import Config from './Pages/Config';
import FugaResistencia from './Pages/FugaResistencia';
import Paroquia from './Pages/Paroquia';
import LargoAndorinhas from './Pages/LargoAndorinhas';



export default () => {
    return (
        <Switch>
            <Route exact path = "/">
                <Home/>
            </Route>


            <Route exact path = "/Config">
                <Config/>
            </Route>


            <Route exact path = "/FugaResistencia">
                <FugaResistencia/>
            </Route>


            <Route exact path = "/Paroquia">
                <Paroquia/>
            </Route>

            <Route exact path = "/LargoAndorinhas">
             <LargoAndorinhas/>

            </Route>



        </Switch>


    );
}
