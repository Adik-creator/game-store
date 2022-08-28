import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Data from "./pages/home-page/data";
import Layout from "./components/layout/layout";

function App() {

    // const [value, setValue] = useState('')

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Data/>}/>
                </Route>

            </Routes>
        </div>
    );
}

export default App;
