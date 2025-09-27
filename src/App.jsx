import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Main from "./pages/main/index.jsx"
import GlobalStyles from "./styles/global.jsx"
import Login from "@/pages/login/index.jsx";
import SelectPlanet from "@/pages/selectPlanet/index.jsx";
import StarPlace from "@/pages/starPlace/index.jsx";
import Interview from "@/pages/interview/index.jsx";

function App() {
  return (
   <BrowserRouter>
    <GlobalStyles />
     <Routes>
       <Route path="/" element={<Main />} />
       <Route path="/login" element={<Login />} />
       <Route path="/planet" element={<SelectPlanet />} />
        <Route path="/startplace" element={<StarPlace />} />
       <Route path="/interview/:planet/:step" element={<Interview />} />
     </Routes>
   </BrowserRouter>
  )
}

export default App
