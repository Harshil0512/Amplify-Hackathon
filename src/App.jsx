import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Authors from "./Authors";
import ImageSearch from "./ImageSearch";
import Error404 from './Error404';

const App = () => {
    return <>
        <Navbar />
        <Routes>
            <Route exact path="/Simple-Site-With-Menu" element={<Authors />}></Route>
            <Route path="/imageSearch" element={<ImageSearch />}></Route>
            <Route path="/*" element={<Error404 />}></Route>
            {/* <Route path= "/*" element={<Navigate to="/" />}></Route> */}
        </Routes>
    </>;
}


export default App;