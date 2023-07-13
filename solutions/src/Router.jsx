
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import Contact from "./components/Contact";
import More from "./components/More";
import Header from "./components/Header";

function Router(){
    return(
        <div>
              <BrowserRouter>
                    <Header/>
                    <Routes>
                    <Route exact path="/Home" element={<Home/>}></Route>
                    <Route exact path="/About" element={<About/>}></Route>
                    <Route exact path="/Contact" element={<Contact/>}></Route>
                    <Route exact path="/More" element={<More/>}></Route>
                    </Routes>
                </BrowserRouter>

        </div>
    )
}

export default Router;