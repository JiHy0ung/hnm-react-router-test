import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const ProductAll = () => {

    const [productList, setProductList] = useState([]);

    const getProducts = async() => {
        let url = `https://my-json-server.typicode.com/JiHy0ung/hnm-react-router-test/products`
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

  return (
    <div className='product-all'>
        <Container fluid style={{paddingInline: 160, paddingBottom: 40}}>
            <Row>
                {productList.map((menu) => (
                    <Col lg={3} >
                        <ProductCard item={menu}/>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default ProductAll