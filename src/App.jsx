import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Main from "./pages/main/index.jsx"
import GlobalStyles from "./styles/global.jsx"
import Login from "@/pages/login/index.jsx";
import SelectPlanet from "@/pages/selectPlanet/index.jsx";
import StarPlace from "@/pages/starPlace/index.jsx";
import Interview from "@/pages/interview/index.jsx";
import Admin from "@/pages/admin/index.jsx";
import AdminQuestion from "@/pages/admin/question/index.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/planet" element={<SelectPlanet />} />
          <Route path="/startplace" element={<StarPlace />} />
          <Route path="/interview/:planet/:step" element={<Interview />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/question" element={<AdminQuestion />} />
          <Route path="/admin/question/update" element={<AdminQuestion />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
