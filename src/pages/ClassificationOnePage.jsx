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
import testing_general_activity from '../data/testing_general_activity.json';
import task_type from '../data/task_type.json';
import testing_level from '../data/testing_level.json';
import testing_approach from '../data/testing_approach.json';
import learning_technique from '../data/learning_technique.json';
import training_data_property from '../data/training_data_property.json';
import automation_degree from '../data/automation_degree.json';
import supervision from '../data/supervision.json';
import time_generalization from '../data/time_generalization.json';
import elements_learned from '../data/elements_learned.json';

const TESTING_GENERAL_ACTIVITY = "testing_general_activity";
const TASK_TYPE = "task_type";
const TESTING_LEVEL = "testing_level";
const TESTING_APPROACH = "testing_approach";
const LEARNING_TECHNIQUE = "learning_technique";
const TRAINING_DATA_PROPERTY = "training_data_property";
const AUTOMATION_DEGREE = "automation_degree";
const SUPERVISION = "supervision";
const TIME_GENERALIZATION = "time_generalization";
const ELEMENTS_LEARNED = "elements_learned";

const ClassificationOnePage = () => {
  const [category, setCategory] = useState(TESTING_GENERAL_ACTIVITY);
  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => setCategory(TESTING_GENERAL_ACTIVITY)}>
          Testing General Activity
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setCategory(TASK_TYPE)}>
          Task Type
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setCategory(TESTING_LEVEL)}>
          Testing Level
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setCategory(TESTING_APPROACH)}>
          Testing Approach
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setCategory(LEARNING_TECHNIQUE)}>
          Learning Technique
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setCategory(TRAINING_DATA_PROPERTY)}>
          Training Data Property
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setCategory(AUTOMATION_DEGREE)}>
          Automation Degree
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setCategory(SUPERVISION)}>
          Supervision
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setCategory(TIME_GENERALIZATION)}>
          Time Generalization
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setCategory(ELEMENTS_LEARNED)}>
          Elements Learned
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
          category === TESTING_GENERAL_ACTIVITY ? testing_general_activity : 
          category === TASK_TYPE ? task_type :
          category === TESTING_LEVEL ? testing_level : 
          category === TESTING_APPROACH ? testing_approach :
          category === LEARNING_TECHNIQUE ? learning_technique : 
          category === TRAINING_DATA_PROPERTY ? training_data_property :
          category === AUTOMATION_DEGREE ? automation_degree : 
          category === SUPERVISION ? supervision :
          category === TIME_GENERALIZATION ? time_generalization : 
          elements_learned
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
    category === TESTING_GENERAL_ACTIVITY ? 
    <p>
      1.Testing planning<br />
      2.Test case management<br />
      3.debugging <br />
      4.none of above<br />
    </p>
    : 
    category === TASK_TYPE ? 
    <p>
      Test Planning:<br />
      1.Testing cost estimation<br /><br />

      Test Case Management:<br />
      2.test case prioritization<br />
      3.test case design<br />
      4.test case reduction<br />
      5.test case refinement<br />
      6.test case evaluation<br /><br />

      Debugging:<br />
      7.fault localization <br />
      8.bug prioritization <br />
      9.fault prediction<br /><br />
      
      10.none of above<br />
    </p>
    :
    category === TESTING_LEVEL ? 
    <p>
      1.Acceptance testing<br />
      2.system testing <br />
      3.integration testing <br />
      4.module testing <br />
      5.unit testing <br />
      6.regression testing <br />
      7.none of above<br />
    </p>
    :
    category === TESTING_APPROACH ? 
    <p>
      1.Black box<br />
      2.White box<br />
      3.Grey box<br />
      4.None of above<br />
    </p>
    :
    category === LEARNING_TECHNIQUE ? 
    <p>
      1.DT (decision tree):<br />
      2.ANN (artificial neural network):<br />
      3.GA  (genetic algorithm):<br />
      4.BL (Bayesian Learning):<br />
      5.IBL (Instance base learning):<br />
      6.Clustering:<br />
      7.Hybrid (combination of techniques)<br />
      8. None of above<br />
    </p>
    :
    category === TRAINING_DATA_PROPERTY ? 
    <p>
      Choose one from 1 and 2. Choose one from 3 and 4<br />
      1. small<br />
      2. large<br />
      3. noisy<br />
      4. accurate<br />
      5. None of Above<br />
    </p>
    :
    category === AUTOMATION_DEGREE ? 
    <p>
      1.automatic<br />
      2.semi-automatic<br />
      3.none of above<br />
    </p>
    :
    category === SUPERVISION ? 
    <p>
      1.supervised<br />
      2.unsupervised<br />
      3.none of above<br />
    </p>
    :
    category === TIME_GENERALIZATION ? 
    <p>
      Choose one from 1 and 2. Choose one from 3 and 4<br />
      1. online<br />
      2. offline<br />
      3. lazy <br />
      4. eager <br />
      5. none of above<br />
    </p>
    :
    <p>
      1.software metrics<br />
      2.CFG (control flow graph)<br />
      3.Call Graph<br />
      4.Test case<br />
      5.execution data<br />
      6.failure reports<br />
      7.coverage data<br />
      8.software specification<br />
      9.None of above<br />
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

export default ClassificationOnePage;