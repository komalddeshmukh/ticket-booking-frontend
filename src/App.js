import { Route, Routes } from "react-router-dom/dist/umd/react-router-dom.development";
import Header from "../src/componenets/Header"
import HomePage from "./componenets/HomePage";
import Movies from "./componenets/Movies/Movies";
import Admin from "./componenets/Admin/Admin";
import Auth from "./componenets/Auth/Auth";
import { useSelector } from "react-redux";



function App() {
  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn);
  console.log("isAdminLoggedIn",isAdminLoggedIn);
  console.log("isUserLoggedIn",isUserLoggedIn);

  return (
    <div >
     <Header/>
     <section>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/auth" element={<Auth/>}/>

      </Routes>
     </section>
    </div>
  );
}

export default App;
