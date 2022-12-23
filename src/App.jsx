import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import Layout from "./components/Layout";
import Home from "./features/Home";
const Jokes = lazy(() => import("./features/Jokes"));
const About = lazy(() => import("./features/About"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-full h-screen">
          <MoonLoader color="#2dd4bf" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="jokes" element={<Jokes />} />
          <Route path="about" element={<About />} />
          {/* catch all */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
