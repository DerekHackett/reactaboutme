import React, { } from 'react';
import { Layout, Menu, Card, Col, Row, Image } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

function App() {
  const { Meta } = Card;
  const handleBlogClick = () => window.open('http://www.derekhackett.com', '_blank');
  const handleHomeClick = () => window.location.href = "";
  const { Header, Footer, Content } = Layout;

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
            <Menu.Item key="1" onClick={handleHomeClick}>Home</Menu.Item>
            <Menu.Item key="2" onClick={handleBlogClick}>Blog</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ paddingTop: '10px' }} className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={6}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://i2.wp.com/derekhackett.com/wp-content/uploads/2018/01/DerekHackett-Chrop.jpg" />}
                  onClick={handleBlogClick}
                >
                  <Meta title="Derek Hackett" description="www.derekhackett.com" />
                </Card>
              </Col>
              <Col span={18}>
                <Row>
                  <div>
                    <h2>About:</h2>
                  </div>
                </Row>
                <Row>
                  <div style={{ width: 650 }}>
                    <span>
                      <p>Hi, I am Derek and I am a fan of cool technology.</p>
                      <p>I am also a follower of Jesus, a devoted husband, and a loving father. I work as a software architect during the day and work on fun problems at night. I am a fan of hard problems to solve. I love to find ways to make the world a better place for all mankind.</p>
                      <p>Who wants to help me?</p>
                    </span>
                  </div>
                </Row>
                <Row>
                  <div>
                    <h2>Certifications:</h2>
                  </div>
                </Row>
                <Row>
                  <Col>
                    <Image width={200} src="https://images.youracclaim.com/size/200x200/images/38ac16bb-aba0-449f-912d-a0112adc5657/MCSD-App_Builder.png" />
                  </Col>
                  <Col>
                    <Image width={200} src="https://images.youracclaim.com/size/200x200/images/421ca115-c03d-403d-893c-da7652bb8619/MCSA_Web_Applications-01.png" />
                  </Col>
                </Row>
                <Row>
                  <h2>A Few Project Highlights:</h2>
                </Row>
                <Row >
                  <Col>
                    <Card
                      hoverable
                      style={{ width: 650 }}
                      cover={<img alt="example" src="https://i1.wp.com/derekhackett.com/wp-content/uploads/2019/11/ida.jpg" />}
                      onClick={() => window.open('https://www.microsoft.com/en-us/ai/ai-lab-project-ida', '_blank')}
                    >
                      <Meta title="IDA" description="IDA is an out-of-the-box, newsroom ready solution that uses Azure AI to rapidly index vast quantities of data including documents, photos, emails, PDFs, audio and video. Then it extracts key entities like people, places, things and date, and intelligently find connections between them. Easy to deploy, and results are presented in easy to navigate visualizations." />
                    </Card>
                  </Col>
                </Row>
                <Row style={{ paddingTop: '10px' }}>
                  <Card
                    hoverable
                    style={{ width: 650 }}
                    cover={<img alt="example" src="https://i0.wp.com/derekhackett.com/wp-content/uploads/2019/11/NetworkSiouxFalls.jpg" />}
                    onClick={() => window.open('https://github.com/DerekHackett/Network-Sioux-Falls', '_blank')}
                  >
                    <Meta title="Network Sioux Falls" description="This is a local networking page for technology topic in Sioux Falls." />
                  </Card>
                </Row>
                <Row style={{ paddingTop: '10px' }}>
                  <Card
                    hoverable
                    style={{ width: 650 }}
                    cover={<img alt="example" src="https://i0.wp.com/derekhackett.com/wp-content/uploads/2018/01/GravanaHomePage.png" />}
                    onClick={() => window.open('http://www.gravana.org/', '_blank')}
                  >
                    <Meta title="Gravana" description="A writing and grammar learning platform built from scratch with lessons, quizzing and grading." />
                  </Card>
                </Row>
                <Row style={{ paddingTop: '10px' }}>
                  <Card
                    hoverable
                    style={{ width: 650 }}
                    cover={<img alt="example" src="https://i0.wp.com/derekhackett.com/wp-content/uploads/2018/01/KoGHomePage.png" />}
                    onClick={() => window.open('http://www.kingofglorysf.org/', '_blank')}
                  >
                    <Meta title="King of Glory" description="King of Church church site built on top of Squarespace platform." />
                  </Card>
                </Row>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Derek Hackett @{new Date().getFullYear()}</Footer>
      </Layout>
    </div>
  );
}

export default App;
