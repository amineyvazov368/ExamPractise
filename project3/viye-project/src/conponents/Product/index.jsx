import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Style from "./index.module.css";
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { useGetFootQuery, useDeleteFootMutation } from "../../services/ProductQuerySlice"
const index = () => {
    const { data: products, error, isLoading, refetch, } = useGetFootQuery()
    const [deleteOne, { isError, isSuccess }] = useDeleteFootMutation();
    console.log(products);
    return (
        <>
            <Container className={Style.container}>
                <Row className={Style.cardBody}>

                    {
                        products && products.products   .map((product) => {
                            return (

                                <Col lg={4} md={12} sm={12}>
                                    <div className={Style.card}>
                                        <div className={Style.cardImg}>
                                            <img src={product.img} alt="" />
                                        </div>
                                        <div className={Style.cardInfo}>
                                            <h3>{product.Price}</h3>
                                            <h2>{product.title} </h2>
                                            <p>{product.discription}</p>
                                            <button onClick={async () => {
                                                if (window.confirm("delete?")) {
                                                    await deleteOne(product._id)
                                                    refetch()
                                                }
                                            }}>Delete</button>
                                            <button > <Link to={`/detail/${product._id}`}> Detail</Link></button>
                                        </div>
                                    </div>

                                </Col>

                            )
                        })
                    }


                </Row>



            </Container>



        </>
    )
}

export default index
