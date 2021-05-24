

import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import { getChartDetail } from './api/sing/api';

function Detail()  {
    const { id } = useParams();
    console.log('id', id)

    const [chartDetail, setChartDetail] = useState();
    const getDetail = async () => {
        const chartD = await getChartDetail(id);
        setChartDetail(chartD.chart);
        console.log('chartDetail', chartD);
        
      }
    useEffect(() => {
        getDetail();
    }, [])

    return (
        <div>
           {chartDetail && (
               <div style={{textAlign: 'center'}}>
                   <h2> {chartDetail.title} </h2>
                   <span> {chartDetail.singer} </span>  

                   <div style={{marginTop: '50px'}}> 
                   <Container>
                      <Row> 
                            <Col md={2} />
                           <Col  md={2} style={{textAlign: "right"}}><h4>작사</h4></Col>  
                           <Col md={1} /> 
                           <Col md={5} style={{textAlign: "left"}}><span>{chartDetail.lyricist}</span></Col>                       
                      </Row>

                      <Row> 
                            <Col md={2} />
                           <Col  md={2} style={{textAlign: "right"}}><h4>작곡</h4></Col>  
                           <Col md={1} /> 
                           <Col md={5} style={{textAlign: "left"}}><span>{chartDetail.melodizer}</span></Col>                       
                      </Row>

                      <Row> 
                            <Col md={2} />
                           <Col  md={2} style={{textAlign: "right"}}><h4>장르</h4></Col>  
                           <Col md={1} /> 
                           <Col md={5} style={{textAlign: "left"}}><span>{chartDetail.genre}</span></Col>                       
                      </Row>
                   </Container>
  

                   </div>
                </div>   
           )}
        </div>
    )
}

export default Detail;