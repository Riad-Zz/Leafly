
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Plants from '../Pages/Plants';
import PlantDetails from '../Pages/PlantDetails';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

export const router = createBrowserRouter([
    {
        path : '/', 
        Component : Root,
        children : [
            {index : true ,  Component : Home , loader : ()=>fetch('/topPlants.json')},
            {path:'/plants' , Component : Plants , loader : ()=>fetch('/allPlants.json')},
            {path :'/details/:id' , Component : PlantDetails ,loader:()=>fetch('/allPlants.json')},
            {path:'/login' , Component:Login},
            {path : '/register' , Component : Register}
        ]
    }
])

