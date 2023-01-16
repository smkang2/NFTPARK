import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import { Main } from "./main/Main";
import { Mypage } from "./mypage/Mypage";
import { Detail } from "./detail/Detail";
import UserContextProvider from "./User/UserContextProvider";
import { Marketplace } from "./marketplace/Marketplace";
import { Emptypage } from "./component/Emptypage";

function App() {
  return (
    <>
      <UserContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/marketplace/*" element={<Marketplace />} />
          <Route path="*" element={<Emptypage />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </>
  );
}

export default App;
