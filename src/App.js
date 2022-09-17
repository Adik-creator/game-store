import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Data from "./pages/home-page/data";
import Layout from "./components/layout/layout";
import {GamePage} from "./pages/GamePage";
import {OrderPage} from "./pages/OrderPage";

function App() {

    // const [value, setValue] = useState('')

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Data/>}/>
                    <Route path={'/app/:title'} element={<GamePage/>}/>
                    <Route path={'/order'} element={<OrderPage/>}/>
                </Route>

            </Routes>
        </div>
    );
}

export default App;
