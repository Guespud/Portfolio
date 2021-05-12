import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>Mis Habilidades</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={80}
          text="Javascript"
        />
        <ProgressBar
          percent={80}
          text="HTML"
        />
        <ProgressBar
          percent={80}
          text="CSS"
        />
        <ProgressBar
          percent={60}
          text="ReactJS"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={50}
          text="Spring"
        />
        <ProgressBar
          percent={60}
          text="PHP"
        />
        <ProgressBar
          percent={78}
          text="SQL"
        />
        <ProgressBar
          percent={80}
          text="Wordpress"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
