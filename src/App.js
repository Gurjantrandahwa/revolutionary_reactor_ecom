import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";
import SearchNav from "./components/SearchNav/SearchNav";
import Banner from "./components/Banner/Banner";

function App() {


    return <div className={"app"}>
        <Header/>
        <div className={"container"}>
            <SearchNav/>
            <Banner/>
        </div>

    </div>
}

export default App;
