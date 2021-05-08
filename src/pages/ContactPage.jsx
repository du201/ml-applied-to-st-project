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
        <Meta title="Boluwatife Fashina" description="Purdue ECE Graduate Student" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={shiqi} />}
      >
        <Meta title="Shiqi Wang" description="Purdue ECE Undergraduate Student" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={xin} />}
      >
        <Meta title="Xin Du" description="Purdue ECE Undergraduate Student" />
      </Card>
    </div>
  );
};

export default ContactPage;