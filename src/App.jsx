import "./App.css";
import MyBody from "./Components/MyBody";
import MyFooter from "./Components/MyFooter";
import MyNavBar from "./Components/MyNavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import TvShows from "./Components/TvShows";
import Movies from "./Components/Movies";
import DetailsCard from "./Components/DetailsCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="MyBody" element={<MyBody />} />
          <Route path="TvShows" element={<TvShows />} />
          <Route path="Movies" element={<Movies />} />
          <Route path="Details/:id" element={<DetailsCard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
