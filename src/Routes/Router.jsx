
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Plants from '../Pages/Plants';

export const router = createBrowserRouter([
    {
        path : '/', 
        Component : Root,
        children : [
            {index : true ,  Component : Home , loader : ()=>fetch('/topPlants.json')},
            {path:'/plants' , Component : Plants , loader : ()=>fetch('/allPlants.json')}
        ]
    }
])

