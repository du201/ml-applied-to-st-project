import React from "react";
import { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import sourceData from '../data/classification_result.json';

const PAPER_TITLE = 'Paper Title';
const PAPER_URL = 'Paper URL';
const TESTING_GENERAL_ACTIVITY = 'Testing General Activity';
const TASK_TYPE = 'Task Type';
const TESTING_LEVEL = 'Testing Level';
const TESTING_APPROACH = 'Testing Approach';
const LEARNING_TECHNIQUE = 'Learning Technique';
const TRAINING_DATA_PROPERTY = 'Training Data Property';
const AUTOMATION_DEGREE = 'Automation Degree';
const SUPERVISION = 'Supervision';
const TIME_GENERALIZATION = 'Time Generalization';
const ELEMENTS_LEARNED = 'Elements Learned';
const SOFTWARE_TESTING_FACETS = 'Software-Testing Facets';
const LEARNING_CATEGORY = 'Learning Category';
const ML_ALGORITHM = "ML Algorithm";

const columns = [
  {
    title: PAPER_TITLE,
    dataIndex: PAPER_TITLE,
    key: PAPER_TITLE
  },
  {
    title: PAPER_URL,
    dataIndex: PAPER_URL,
    key: PAPER_URL
  },
  {
    title: "Classification System 1",
    children: [ // todo:
      {
        title: "Testing Category",
        children: [
        {
          title: TESTING_GENERAL_ACTIVITY,
          dataIndex: TESTING_GENERAL_ACTIVITY,
          key: TESTING_GENERAL_ACTIVITY
        },
        {
          title: TASK_TYPE,
          dataIndex: TASK_TYPE,
          key: TASK_TYPE
        },
        {
          title: TESTING_LEVEL,
          dataIndex: TESTING_LEVEL,
          key: TESTING_LEVEL
        },
        {
          title: TESTING_APPROACH,
          dataIndex: TESTING_APPROACH,
          key: TESTING_APPROACH
        }]
      },
      {
        title: "ML Category",
        children: [
          {
            title: LEARNING_TECHNIQUE,
            dataIndex: LEARNING_TECHNIQUE,
            key: LEARNING_TECHNIQUE
          },
          {
            title: TRAINING_DATA_PROPERTY,
            dataIndex: TRAINING_DATA_PROPERTY,
            key: TRAINING_DATA_PROPERTY
          },
          {
            title: AUTOMATION_DEGREE,
            dataIndex: AUTOMATION_DEGREE,
            key: AUTOMATION_DEGREE
          },
          {
            title: SUPERVISION,
            dataIndex: SUPERVISION,
            key: SUPERVISION
          },
          {
            title: TIME_GENERALIZATION,
            dataIndex: TIME_GENERALIZATION,
            key: TIME_GENERALIZATION
          },
          {
            title: ELEMENTS_LEARNED,
            dataIndex: ELEMENTS_LEARNED,
            key: ELEMENTS_LEARNED
          }
        ]
      }
    ]
  },
  {
    title: "Classification System 2",
    children: [
      {
        title: SOFTWARE_TESTING_FACETS,
        dataIndex: SOFTWARE_TESTING_FACETS,
        key: SOFTWARE_TESTING_FACETS
      },
      {
        title: LEARNING_CATEGORY,
        dataIndex: LEARNING_CATEGORY,
        key: LEARNING_CATEGORY
      },
      {
        title: ML_ALGORITHM,
        dataIndex: ML_ALGORITHM,
        key: ML_ALGORITHM
      }
    ]
  },
];

const data = sourceData;

const DataSourcePage = () => {
  console.log(data)
  return (
    <div className="p-2">
      <p className="font-weight-bold">{data.length} papers have been classified</p>
      <p>How to read the table?</p>
      <p>Each paper that we classified occupies one row. For the sake of brevity, classification result 
        is represented using numbers. The meaning of numbers for each category is listed in both Classification 1 Result and Classification 2 Result tabs on the website header.<br />
        Whenever we think a paper should be classified as "None of Above" for a category, we would also include our reasoning inside the parenthesis after the number.<br />
        The raw data comes from <a href="url" target="_blank">https://github.com/du201/ml-applied-to-st-project/blob/master/group_classification.xlsx</a>.
      </p>
      <Table bordered columns={columns} dataSource={data} size='small'/>
    </div>
  );
};

export default DataSourcePage;