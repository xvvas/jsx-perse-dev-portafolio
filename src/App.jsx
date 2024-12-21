import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingTemplate from './components/templates/LandingTemplate'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            name="Home"
            element={
              <LandingTemplate />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
