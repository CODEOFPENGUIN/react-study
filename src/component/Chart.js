

import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Chart({id, rank, title, singer, imageUrl})  {
    return (
        <div>
            <Row style={{alignItems: "center"}} >
                <Col  md={2} style={{textAlign: 'right'}}>{id}</Col>
                <Col md={2}><img alt='' src={imageUrl}></img></Col>
                <Col md={5} style={{textAlign: 'left'}}>{title}</Col>
                <Col md={3} style={{textAlign: 'right', whiteSpace: "nowrap" ,textOverflow: "ellipsis", overflow: 'hidden'}}>{singer}</Col>
            </Row>
        </div>
    )
}

export default Chart;