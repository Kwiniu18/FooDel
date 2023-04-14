import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function WhyUs() {
  return (
    <div>
      <div>
        <h1 className="whyus-title" id="whyus">
          O Nas
        </h1>
      </div>
      <div>
        <Row className="whyus-row">
          <Col>
            <Card>
              <Card.Body>
                <img
                  id="aboutus-img"
                  src="https://th.bing.com/th/id/R.e6dfe79917576b9ec0ec6ab1e12da162?rik=0xe3mVpW%2blg8IQ&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f140000%2fvelka%2fgroup-of-young-people.jpg&ehk=cmxKwQ2Ku6XhYESkl7KkJ4lFWrQGrqLVJbcDggp8yAQ%3d&risl=&pid=ImgRaw&r=0"
                  width={"85%"}
                ></img>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <div className="whyus-desc">
              <Card>
                <Card.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default WhyUs;
