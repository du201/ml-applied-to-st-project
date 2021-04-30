import React from "react";
import { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import sourceData from '../data/test.json';

const columns = [
  {
    title: 'Paper Url',
    dataIndex: 'paper url',
    key: 'paper url'
  },
  {
    title: "Classification System 1",
    children: [ // todo:
      {
        title: "Testing Category",
        children: [
        {
          title: 'Testing General Activity',
          dataIndex: 'SOFTWARE-TESTING FACETS',
          key: 'SOFTWARE-TESTING FACETS'
        },
        {
          title: 'Task Type',
          dataIndex: 'Learning Category',
          key: 'Learning Category'
        },
        {
          title: 'Testing Level',
          dataIndex: 'ML Algorithm',
          key: 'ML Algorithm'
        },
        {
          title: 'Testing Approach',
          dataIndex: 'ML Algorithm',
          key: 'ML Algorithm'
        }]
      },
      {
        title: "ML Category",
        children: [
          {
            title: 'Learning Technique',
            dataIndex: 'Learning Category',
            key: 'Learning Category'
          },
          {
            title: 'Training Data Property',
            dataIndex: 'ML Algorithm',
            key: 'ML Algorithm'
          },
          {
            title: 'Automation Degree',
            dataIndex: 'ML Algorithm',
            key: 'ML Algorithm'
          },
          {
            title: 'Supervision',
            dataIndex: 'ML Algorithm',
            key: 'ML Algorithm'
          },
          {
            title: 'Time Generalization',
            dataIndex: 'ML Algorithm',
            key: 'ML Algorithm'
          },
          {
            title: 'Elements Learned',
            dataIndex: 'ML Algorithm',
            key: 'ML Algorithm'
          }
        ]
      }
    ]
  },
  {
    title: "Classification System 2",
    children: [
      {
        title: 'Software Testing Facets',
        dataIndex: 'SOFTWARE-TESTING FACETS',
        key: 'SOFTWARE-TESTING FACETS'
      },
      {
        title: 'Learning Category',
        dataIndex: 'Learning Category',
        key: 'Learning Category'
      },
      {
        title: 'ML Algorithm',
        dataIndex: 'ML Algorithm',
        key: 'ML Algorithm'
      }
    ]
  },
];

const data = sourceData;

const DataSourcePage = () => {
  return (
    <div className="p-2">
      <p className="text-center font-weight-bold">{data.length} papers have been classified</p>
      <Table bordered columns={columns} dataSource={data} />
    </div>
  );
};

export default DataSourcePage;