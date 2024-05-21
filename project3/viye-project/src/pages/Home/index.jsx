import React from 'react'
import Style from "./index.module.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from "../../conponents/Product"

const index = () => {
    return (
        <>
            <div>
                <section className={Style.welcome}>
                    <div className={Style.welcomeTitle}>
                        <h1>Welcome To EatWell</h1>
                        <p>Come and eat well with our delicious & healthy foods.</p>
                        <button><h3><b>Reservation</b></h3></button>

                    </div>
                </section>
            </div>
            <section className={Style.story}>
                <div className={Style.allContainer}>
                    <Row className={Style.row}>
                        <Col sm={12} lg={6} md={12}>
                            <div className={Style.storyInfo}>
                                <p>OUR STORY</p>
                                <h1>Welcome</h1>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    <button><h4>Learn More About Us</h4> </button>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                        <div className={Style.img}>
                            <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg" alt="" />
                        </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className={Style.products}>
                <div className={Style.productsTitle}>
                    <p>OUR OFFERS</p>
                    <h1>Our Offer This Summer</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <Product/>

        

            </section>

            <section className={Style.boxs}>
            <div className={Style.productsTitle}>
                    <p>OUR OFFERS</p>
                    <h1>Our Offer This Summer</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>

            </section>


        </>
    )
}

export default index
