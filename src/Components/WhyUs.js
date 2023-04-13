import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function WhyUs() {
  return (
    <div>
      <div>
        <h1 className="whyus-title" id="whyus">
          Jak działamy?
        </h1>
        <Row>
          <div className="cart-img">
            <Col>
              <img
                src="https://th.bing.com/th/id/R.8f898b93026ed80bf4d54e5994ab778d?rik=jg0pph0lhQzFow&pid=ImgRaw&r=0"
                width={"15%"}
              ></img>
            </Col>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default WhyUs;
