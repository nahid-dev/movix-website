import { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import NotFoundPage from "./pages/404/NotFoundPage";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:mediaType/:id" element={<Details></Details>}></Route>
        <Route
          path="/search/:query"
          element={<SearchResult></SearchResult>}
        ></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
