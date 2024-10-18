import { Route, Routes } from "react-router-dom"
import { RouterSet } from "./route/routerSet"
import Home from "./pages/home/Home"
import Signup from "./auth/signup/signup"



function App() {
  return (
    <div>
      <Routes>
         {RouterSet.map((item , index)=>{
          return(<Route key={index} path={item.path} element={item.element}/>)
         })

         }
      </Routes>
    </div>
  )
}

export default App

