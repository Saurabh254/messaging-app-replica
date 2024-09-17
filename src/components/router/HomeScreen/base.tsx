import Header from "../../common/Header/Header";
import MainView from "./MainView";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <MainView />
    </>
  );
};

export default HomeScreen;
