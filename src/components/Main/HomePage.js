import React from "react";
import { Typography, Statistic, Col, Row } from "antd";
const HomePage = () => {
  return (
    <>
      <Typography.Title level={2} className="heading">
        Gloabl Crypto State
      </Typography.Title>
      <Row>
        <Col span="12">
          <Statistic title="Total Crypto Cirrencies" value="10" />
        </Col>
        <Col span="12">
          <Statistic title="Total Exchanges" value="20" />
        </Col>
        <Col span="12">
          <Statistic title="Total Market Cap" value="35" />
        </Col>
        <Col span="12">
          <Statistic title="Total 24h volume" value="80" />
        </Col>
        <Col span="12">
          <Statistic title="Total Markets" value="5" />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
