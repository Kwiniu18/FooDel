import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Content() {
  const cards = [
    {
      image_url: "",
      card_name: "",
    },
    {
      image_url: "",
      card_name: "",
    },
    {
      card_name: "produkt3",
    },
    {
      card_name: "produkt4",
    },
    {
      card_name: "produkt5",
    },
  ];

  return (
    <div className="content-section">
      <div className="content-title">Zacznij zamawiać</div>
      <div className="content-btn">
        <Button variant="success" className="start-btn">
          Start
        </Button>
      </div>
      <div className="content-cards">
        <Row>
          {cards.map((e) => (
            <Col>
              <div className="card">
                <img src={e.image_url} width={"100%"}></img>
                {/* {e.card_name} */}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Content;
