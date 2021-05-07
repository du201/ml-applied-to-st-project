import React from "react";
import { useState, useEffect } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  LabelList
} from "recharts";
import softwareTestingFacetsData from '../data/software_testing_facets.json';
import MLAlgorithmData from '../data/ml_algorithm.json';
import learningCategoryData from '../data/learning_category.json';

const SOFTWARE_TESTING_FACETS = "Software Testing Facets";
const LEARNING_CATEGORY = "Learning Category";
const ML_ALGORITHM = "ML Algorithm";

const ClassificationTwoPage = () => {
  const [category, setCategory] = useState(SOFTWARE_TESTING_FACETS);
  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => setCategory(SOFTWARE_TESTING_FACETS)}>
          Software Testing Facets
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setCategory(LEARNING_CATEGORY)}>
          Learning Category
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setCategory(ML_ALGORITHM)}>
          ML Algorithm
        </a>
      </Menu.Item>
    </Menu>
  );
  let chart = (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={
          category === SOFTWARE_TESTING_FACETS ? softwareTestingFacetsData : 
          category === LEARNING_CATEGORY ? learningCategoryData :
          MLAlgorithmData
        }
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="index">
          <Label value="Category # (Please refer to the left side for description)" offset={0} position="insideBottom"/>
        </XAxis>
        <YAxis label={{ value: 'Number of Papers', angle: -90, position: 'insideLeft' }}/>
        <Tooltip formatter={(value, name, props) => [value, name]}/>
        {/* <Legend /> */}
        <Bar dataKey="amt" fill="#8884d8" name="Number of Papers" minPointSize={5}>
          <LabelList dataKey="amt" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
  let categoryDescription = (
    category === SOFTWARE_TESTING_FACETS ? 
    <p>
      0. Compatibility Testing <br />
      1. Conformance Testing<br />
      2. Detection of Metamorphic Relations<br />
      3. Mutation Testing Automation<br />
      4. Test Case Design<br />
      5. Test Case Evaluation<br />
      6. Test Case Prioritization<br />
      7. Test Case Refinement<br />
      8. Test Oracle Construction<br />
      9. Testing Cost Estimation<br />
      10. Test Harness<br />
      11. Testing Technique Selection<br />
      12. None of the Above.<br />
    </p>
    : 
    category === LEARNING_CATEGORY ? 
    <p>
      0. Meta-algorithm<br />
      1. Semi-supervised<br />
      2. Supervised<br />
      3. Supervised and semi-supervised<br />
      4. Unsupervised<br />
      5. None of the Above.<br />
    </p>
    :
    <p>
      0. ANN<br />
      1. Bayesian<br />
      2. Clustering<br />
      3. Decision Tree<br />
      4. Ensemble Algorithm<br />
      5. Instance Based<br />
      6. Learning Finite Automata<br />
      7. Regression<br />
      8. None of the Above.<br />
    </p>
  );

  return (
    <div className="d-flex">
      <div style={{width:"17vw", height:"92vh", padding:"1rem"}}>
        <p className="dropdown-title-above">Select a Category<br /> to Visualize:</p>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            {category} <DownOutlined />
          </a>
        </Dropdown>
        <hr style={{borderTop: '1.5px solid #bbb', margin: '2rem 0rem'}}></hr>
        {categoryDescription}
      </div>
      <div style={{width:"83vw", height:"92vh", padding:"2rem"}}>
        {chart}
      </div>
    </div>
  );
};

export default ClassificationTwoPage;