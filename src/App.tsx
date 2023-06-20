import { useState, Suspense, lazy } from "react";
import "./styles.css";
const MicroApp1 = lazy(() => import("microapp1/App"));
const MicroApp2 = lazy(() => import("microapp2/AppV2"));

const App = () => {
  const [showMicroApp1, setShowMicroApp1] = useState(false);
  const [showMicroApp2, setShowMicroApp2] = useState(false);
  return (
    <div className="flex-container-verticle ">
      <h2>Environment: {process.env.environment}</h2>
      <div className="flex-container">
        <button
          className="btn btn-primary"
          onClick={() => setShowMicroApp1((prev) => !prev)}
        >
          {!showMicroApp1 ? "Show" : "Hide"} MicroApp1
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setShowMicroApp2((prev) => !prev)}
        >
          {!showMicroApp2 ? "Show" : "Hide"} MicroApp2
        </button>
      </div>
      <div className="flex-container">
        <div className="card">
        {showMicroApp1 && (
          <Suspense fallback={<>Loading... </>}>
            <MicroApp1 />
          </Suspense>
        )}
        </div>
        <div className="card">
        {showMicroApp2 && (
          <Suspense fallback={<>Loading... </>}>
            <MicroApp2 />
          </Suspense>
        )}
        </div>
      </div>
    </div>
  );
};

export default App;

/**
 * We can use this function to delay load the component just for development use and testing.
 */
// function delayForDemo(promise) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }
