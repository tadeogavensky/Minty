import { ethers } from "ethers";

import { createContext, useState } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";

import { CardStack } from "./components/CardStack";
import { Favorites } from "./components/Favorites";
import { Trending } from "./components/Trending";
import { Friends } from "./components/Friends";

import { Routes, Route } from "react-router-dom";

const UserContext = createContext();

function App() {
 
  const [user,setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <div className="bg-[#F7F6F9] h-full mt-0 p-4  ">
        <Header />
        <Main />
        <NavBar />
        <div>
          <Routes>
            <Route path="/stack" element={<CardStack />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
