import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useSelector } from "react-redux";

import { MainPage, NotFoundPage, ReportPage } from "pages";
import { LoadingSpinnerComponent } from "components";

import { RootState } from "store/store";
import { PATHS } from "consts";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const loadings = useSelector((state: RootState) => state.loading.status);
  return (
    <div className="App">
      {!!loadings.length && <LoadingSpinnerComponent />}
      <ToastContainer
        position="bottom-right"
        theme="colored"
        autoClose={1000}
      />
      <Routes>
        <Route path={PATHS.MAIN} element={<MainPage />} />
        <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={PATHS.REPORT} element={<ReportPage />} />
        <Route
          path={PATHS.INVALID_PATH}
          element={<Navigate to={PATHS.NOT_FOUND} />}
        />
      </Routes>
    </div>
  );
}

export default App;
