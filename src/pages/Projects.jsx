import React, { useEffect, useState } from 'react';
import data from '../assets/data/products';
import { Col, Container, Row } from 'reactstrap';
import "./scss/project.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const [trendingProduct, setTrendingProduct] = useState([]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };


  useEffect(() => {
    // const filterData = data.filter(
    //   (data) => (data.category === 'mobile' || data.category === 'sofa') && data.avgRating > 4.3
    // );
    // setTrendingProduct(filterData);
    setTrendingProduct(data);
  }, []);

  return (
    <Container>
      <Row className='projects flex'>
        {trendingProduct.map((item, index) => (
          <Col  key={index} md='6' >
            <div className='project-cart'>
              <div
              onMouseEnter={()=>handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="cart-img">
                <img src={item.imgUrl} alt={item.productName} />
              </div>
              <div className="cart-title"
              style={{
                opacity: hoveredIndex=== index ? '2' : "-1",
                bottom :hoveredIndex=== index ? '20px' :'-15px'

              }}
              >
                 <span>{item.productName}</span>
              </div>
             
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
