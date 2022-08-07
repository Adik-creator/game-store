import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import HomePage from "./pages/home-page/home-page";
import Layout from "./components/layout/layout";

function App() {

    // const [value, setValue] = useState('')

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                </Route>

            </Routes>
        </div>
    );
}

export default App;
