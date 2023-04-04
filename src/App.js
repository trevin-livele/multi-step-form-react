import "./App.css";
import MainLayout from "../src/components/main-layout/MainLayout";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Plan from "./components/plan/StepTwoInfo";
import PersonalInfo from "./components/personal-info/StepOneInfo";
import PickAddons from "./components/pick-addons/StepThreeInfo";
import FinishUp from "./components/finish-up/StepFourInfo";
import ThankYou from "./components/thank-you/ThankYou";
const routes = createHashRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "", element: <PersonalInfo /> },
      { path: "select-plan", element: <Plan /> },
      { path: "pick-addons", element: <PickAddons /> },
      { path: "finish-up", element: <FinishUp /> },
      { path: "thank-you", element: <ThankYou /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
