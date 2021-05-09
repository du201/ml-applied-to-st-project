import React from "react";
import { useState, useEffect } from 'react';
import { Card } from 'antd';
import bolu from '../images/bolu.jpg';
import shiqi from '../images/shiqi.jpg';
import xin from '../images/xin.jpg';

const { Meta } = Card;

const ContactPage = () => {
  return (
    <div className="d-flex flex-row justify-content-around vh-100 align-items-center">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={bolu} />}
      >
        <Meta title="Boluwatife Fashina" description="Email: bfashina@purdue.edu" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={shiqi} />}
      >
        <Meta title="Shiqi Wang" description="Email: wang3849@purdue.edu" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={xin} />}
      >
        <Meta title="Xin Du" description="Email: du201@purdue.edu" />
      </Card>
    </div>
  );
};

export default ContactPage;