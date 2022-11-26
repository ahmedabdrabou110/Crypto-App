import React from "react";
import "./App.css";
import {
  Navbar,
  HomePage,
  Exchange,
  CryptoCurrencies,
  News,
  CryptoDetails,
} from "./components";
import { Layout, Typography, Space } from "antd";
import { Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/exchange" element={<Exchange />} />

              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />

              <Route path="/crypto/:crtptoId" element={<CryptoDetails />} />

              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "#fff", textAlign: "center" }}
          >
            cryptoverse <br />
            All Rights Reversed
            <br /> created By Ahmed Abdrabou
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchange">Exchange</Link>
            <Link to="/news">News</Link>
            <Link to="/cryptocurriencies">CryptoCurrencies</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
