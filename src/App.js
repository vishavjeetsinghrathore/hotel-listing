
import './App.css';
import Home from "./pages/Home"
import PropertyDetail from "./pages/PropertyDetail"
import Header from "./components/Header"
import {Routes,Route} from "react-router-dom"
import { propertiesData } from './properties';
import {useState} from 'react'

function App() {

  const [tabdata, setTabdata] = useState(propertiesData[0].tabdata);
  return (
      
       <div className="bg-blue-50 flex flex-col  min-h-screen">
         <Header/>

         <Routes>

            <Route path="/" element={<Home tabdata={tabdata} setTabdata={setTabdata}/>}></Route>
            <Route path="/property/:id" element={<PropertyDetail tabdata={tabdata}/>}></Route>
         </Routes>
       </div>
  );
}

export default App;
