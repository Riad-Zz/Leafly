
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Plants from '../Pages/Plants';
import PlantDetails from '../Pages/PlantDetails';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Profile from '../Pages/Profile';
import PrivateRoutes from '../Provider/PrivateRoute/PrivateRoutes';

export const router = createBrowserRouter([
    {
        path : '/', 
        Component : Root,
        children : [
            {index : true ,  Component : Home , loader : ()=>fetch('/topPlants.json')},
            {path:'/plants' , Component : Plants , loader : ()=>fetch('/allPlants.json')},
            {path :'/details/:id' , element : <PrivateRoutes><PlantDetails></PlantDetails> </PrivateRoutes> ,loader:()=>fetch('/allPlants.json')},
            {path:'/login' , Component:Login , loader : ()=>fetch('/topPlants.json')}, //Fake loader
            {path : '/register' , Component : Register , loader : ()=>fetch('/topPlants.json')}, //Fake Loader
            {path :'/profile' , element : <PrivateRoutes><Profile></Profile> </PrivateRoutes>,loader : ()=>fetch('/topPlants.json') }, //Fake Loader for Visual Loading Screen
        ]
    }
])

