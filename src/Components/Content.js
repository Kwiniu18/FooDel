import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Content() {
  const cards = [
    {
      image_url:
        "https://th.bing.com/th/id/R.42eb1a45e62905ca458a5d32f9408d8d?rik=c7UXU69YgHLJWQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fncE%2f4qz%2fncE4qz4cA.png&ehk=tmp%2bjxF5cplTnkGj7o%2fIWjw6uX3Ik8zMDYAFv83ZkUE%3d&risl=&pid=ImgRaw&r=0",
      card_name: "",
    },
    {
      image_url:
        "https://webstockreview.net/images/garbage-clipart-crushed-water-bottle-10.png",
      card_name: "",
    },
    {
      image_url:
        "https://th.bing.com/th/id/R.c77fefa8c601bbc30e03803b98697717?rik=YT3UudA4ID5yUg&riu=http%3a%2f%2fclipartmag.com%2fimages%2ftomato-clipart-32.png&ehk=%2fqw5xNu1SyEiUN%2be4q0ANIaOZh0tMRxlIMqXQ%2f1sq0s%3d&risl=&pid=ImgRaw&r=0",
      card_name: "produkt3",
    },
    {
      image_url:
        "https://images.vexels.com/media/users/3/152573/isolated/preview/b930f8320c1554af3fc7d2bb7bab3f17-old-teddy-bear-illustration-by-vexels.png",
      card_name: "produkt4",
    },
    {
      image_url:
        "https://th.bing.com/th/id/R.58d9fa2983d5f91f1a345d0849a8f5c1?rik=9eiNpmzAw9emiA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffree-png-pizza-slice-pizza-slice-clipart-1800.png&ehk=JMKx9dWiw5I46i7dFVF4V4xxuiMrHe69p8RW4xyHn2E%3d&risl=&pid=ImgRaw&r=0",
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
        <Row className="content-row">
          {cards.map((e) => (
            <Col className="content-col">
              <div className="cards">
                <img
                  src={e.image_url}
                  width={"80%"}
                  alt="img"
                  id="card-img"
                ></img>
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
