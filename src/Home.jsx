import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

function Home() {
  const { openSideBar, openModal } = useGlobalContext();

  return (
    <main>
      <button onClick={openSideBar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
}

export default Home;
