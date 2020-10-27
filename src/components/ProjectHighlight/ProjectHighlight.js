import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import './ProjectHighlight.css';

export default function ProjectHighlight(props) {
    const { Meta } = Card;
  return(
    <Card
    hoverable
    style={{ width: 650 }}
    cover={<img alt="example" src={props.imageSource} />}
    onClick={() => window.open(props.url, '_blank')}
  >
    <Meta title = {props.title} description = {props.description} />
  </Card>
  )
}