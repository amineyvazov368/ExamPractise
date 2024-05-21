import PageRoot from "../pages/PageRoot"
import Home from "../pages/Home"
import Add from '../pages/Add'
import Basket from "../pages/Basket"
import Detail from "../pages/Detail"

export const ROUTES=[
    {
       path:"/" ,
       element:<PageRoot/>,
       children:[
        {
           index:true,
            element:<Home/>
        },
        {
            path:"add",
            element:<Add/>
        },
        {
            path:"basket",
            element:<Basket/>
        },
        {
            path:"detail/:id",
            element:<Detail/>
        },
       ]
    }
]