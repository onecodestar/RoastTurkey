import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import ReactWOW from 'react-wow';
// import { Link } from 'react-router-dom';
import EChartOne from '../chart/eChart';
// import EChartTwo from '../chart/eChart2';
import OwlCarousel from 'react-owl-carousel2';
import $ from 'jquery';
import iconsCoin from '../../assets/images/icons/l.png';

class TokenDetails extends Component {
  componentDidMount() {
    $(".tokes-chart-slider .cart-list").hover(function () {
      $(this).closest(".tokes-chart-slider").addClass("active");
    }, function () {
      $(this).closest(".tokes-chart-slider").removeClass("active");
    });
  }
  render() {
    const options = {
      slideSpeed: 500,
      autoplay: false,
      rewind: true,
      margin: 0,
      nav: true,
      dots: false,
      // navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      navText: ['', ''],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        }
      }
    };
    let contents = (
      <Row>
        <Col lg={12} md={12} sm={12} className="col-xs-12">
          <div className="section-heading">
            <h2>Distribution of Tokens</h2>
          </div>
        </Col>
        <Col lg={8} md={8} sm={12} className="col-xs-12 col-lg-offset-2 col-md-offset-2">
          <div className="tokes-chart-slider">
            <OwlCarousel ref="carousel" options={options}>
              <div className="cart-list">
                <Col sm={6} className="chart">
                  <EChartOne />
                  <div className="imgs">
                    <img src={iconsCoin} alt="" />
                  </div>
                </Col>
                <Col sm={6} style={{paddingLeft:'10%'}}>
                  <div className="label-chatrs">
                    <div className="lsits">
                      <span className="clabels-text">50%</span>
                      <p>Pre-Sale participants</p>
                    </div>
                    <div className="lsits">
                      <span className="clabels-text">25%</span>
                      <p>Public-sale participants</p>
                    </div>
                    <div className="lsits">
                      <span className="clabels-text">10%</span>
                      <p>Founders, Team</p>
                    </div>
                    <div className="lsits">
                      <span className="clabels-text">15%</span>
                      <p>Marketing</p>
                    </div>
                  </div>
                </Col>
              </div>
              
              {/* <div className="cart-list">
                <Col sm={6} className="chart">
                  <EChartTwo />
                  <div className="imgs">
                    <img src={iconsCoin} alt="" />
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="label-chatrs">
                    <div className="lsits">
                      <span className="clabels-text">85%</span>
                      <p>For participants of Pre-Sale and ICO</p>
                    </div>
                    <div className="lsits">
                      <span className="clabels-text">8%</span>
                      <p>Reserved for the team.</p>
                    </div>
                    <div className="lsits">
                      <span className="clabels-text">4%</span>
                      <p>Reserved for the consultants.</p>
                    </div>
                    <div className="lsits">
                      <span className="clabels-text">3%</span>
                      <p>Bounty campaign</p>
                    </div>
                  </div>
                </Col>
              </div> */}
            </OwlCarousel>
          </div>
          <div className="contents text-center">
            <h2>The issued tokens will be distributed as follows:</h2>
            <a className="btn1" href="/AOR.pdf" target="_blank">Download WhitePaper</a>
          </div>
        </Col>
      </Row>
    )
  
    return (
      <div className="token-details section">
        <Container>
          {contents}
        </Container>
      </div>
    );
  }
}

export default TokenDetails;