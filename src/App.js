import { Button, Card, DatePicker, Form, Input } from "antd";
import { useState } from "react";
import "./App.css";
import Confirmed from "./Components/Confirmed/Confirmed";

function App() {
  const [cardHolderName, setCardHolderName] = useState("John Wick");
  const [cardExpiration, setCardExpiration] = useState("00/00");
  const [cvcNumber, setCvcNumber] = useState("000");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [form] = Form.useForm();

  const onContinue = (value) => {
    setCardHolderName("John Wick");
    setCardExpiration("00/00");
    setCardNumber("0000 0000 0000 0000");
    setCvcNumber("000");
    setIsConfirmed(value);
  };
  return (
    <div className="App">
      <div className="DivOne">
        <div className="Card">
          <Card className="FrontCard">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  marginTop: "15px",
                  width: "50px",
                  height: "50px",
                  background: "aliceblue",
                  borderRadius: "100%",
                }}></div>
              <div
                style={{
                  marginTop: "15px",
                  marginLeft: "3%",
                  width: "20px",
                  height: "20px",
                  border: "2px solid aliceblue",
                  borderRadius: "100%",
                }}></div>
            </div>
            <p
              style={{
                fontSize: "26px",
                marginTop: "18%",
                color: "aliceblue",
                width: "90%",
                wordSpacing: "12px",
                letterSpacing: "3px",
                fontFamily: "monospace",
              }}>
              {cardNumber}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}>
              <p
                style={{
                  marginTop: -10,
                  color: "aliceblue",
                  fontFamily: "monospace",
                  fontSize: "16px",
                }}>
                {cardHolderName}
              </p>
              <p
                style={{
                  marginTop: -10,
                  marginRight: "10%",
                  color: "aliceblue",
                  fontFamily: "monospace",
                  fontSize: "16px",
                }}>
                {cardExpiration}
              </p>
            </div>
          </Card>
          <Card className="BackCard">
            <div
              style={{
                backgroundColor: "#181823",
                marginLeft: "-24px",
                width: "110.2%",
                height: "50px",
                background: "#181823",
              }}></div>
            <div
              style={{
                borderRadius: 3,
                backgroundColor: "#181823",
                marginTop: "15px",
                width: "100%",
                height: "40px",
                background: "#7F8487",
                textAlign: "right",
              }}>
              <p
                style={{
                  fontSize: 20,
                  fontFamily: "monospace",
                  color: "aliceblue",
                  paddingTop: 4,
                  marginRight: 10,
                }}>
                {cvcNumber}
              </p>
            </div>
          </Card>
        </div>
      </div>
      {!isConfirmed ? (
        <div className="DivTwo">
          <div style={{ width: "50%", marginTop: "12%", marginLeft: "14%" }}>
            <p
              style={{
                fontFamily: "fantasy",
                color: "#7F8487",
                wordSpacing: "5px",
                letterSpacing: "3px",
              }}>
              CARDHOLDER NAME
            </p>
            <Form form={form}>
              <Input
                placeholder="eg. John Wick"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                  height: 40,
                  marginTop: -8,
                }}
                onChange={(e) => {
                  setCardHolderName(e.target.value);
                }}
              />
              <p
                style={{
                  marginTop: 30,
                  fontFamily: "fantasy",
                  color: "#7F8487",
                  wordSpacing: "5px",
                  letterSpacing: "3px",
                }}>
                CARD NUMBER
              </p>
              <Input
                placeholder="eg. 0000 0000 0000 0000"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                  height: 40,
                  marginTop: -8,
                }}
                onChange={(e) => {
                  const strLength = e.target.value.length;
                  if (strLength < 5) {
                    setCardNumber(
                      `${e.target.value}${"0".repeat(4 - strLength)}` +
                        ` ${"0".repeat(4)}`.repeat(3)
                    );
                  } else if (strLength > 4 && strLength < 9) {
                    const prefix = `${e.target.value.slice(
                      0,
                      4
                    )} ${e.target.value.slice(4)}${"0".repeat(8 - strLength)}`;
                    setCardNumber(`${prefix} ` + ` ${"0".repeat(4)}`.repeat(2));
                  } else if (strLength > 8 && strLength < 13) {
                    const prefix = `${e.target.value.slice(
                      0,
                      4
                    )}  ${e.target.value.slice(4, 8)} ${e.target.value.slice(
                      8
                    )}${"0".repeat(12 - strLength)}`;
                    setCardNumber(`${prefix} ` + ` ${"0".repeat(4)}`.repeat(1));
                  } else if (strLength > 12 && strLength < 17) {
                    const prefix = `${e.target.value.slice(
                      0,
                      4
                    )}  ${e.target.value.slice(4, 8)} ${e.target.value.slice(
                      8,
                      12
                    )}  ${e.target.value.slice(12)}${"0".repeat(
                      16 - strLength
                    )}`;
                    setCardNumber(`${prefix}`);
                  }
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ width: "38%" }}>
                  <p
                    style={{
                      marginTop: 30,
                      fontFamily: "fantasy",
                      color: "#7F8487",
                      wordSpacing: "5px",
                      letterSpacing: "3px",
                    }}>
                    EXP.DATE (MM/YY)
                  </p>
                  <div style={{ display: "flex" }}>
                    <DatePicker
                      placeholder="MM/YY"
                      onChange={(value) => {
                        let year = `${new Date(value).getFullYear()}`.slice(2);
                        let month = `${new Date(value).toLocaleDateString(
                          "en-AU"
                        )}`.slice(-7, -5);
                        setCardExpiration(`${month}/${year}`);
                      }}
                      format="MM/YY"
                      picker="month"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                        height: 40,
                        marginTop: -8,
                      }}
                    />
                  </div>
                </div>
                <div style={{ width: "60%" }}>
                  <p
                    style={{
                      marginTop: 30,
                      fontFamily: "fantasy",
                      color: "#7F8487",
                      wordSpacing: "5px",
                      letterSpacing: "3px",
                    }}>
                    CVC
                  </p>
                  <Input
                    placeholder="eg. 000"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
                      height: 40,
                      marginTop: -8,
                    }}
                    onChange={(e) => {
                      if (e.target.value.length < 4) {
                        setCvcNumber(e.target.value);
                      }
                    }}
                  />
                </div>
              </div>
              <Button
                htmlType="submit"
                onClick={() => {
                  setIsConfirmed(true);
                }}
                style={{
                  background: "rgb(69, 11, 66)",
                  width: "100%",
                  marginTop: "15%",
                  height: 45,
                  color: "white",
                  fontFamily: "sans-serif",
                  borderRadius: 5,
                }}>
                Confirm
              </Button>
            </Form>
          </div>
        </div>
      ) : (
        <Confirmed onContinue={onContinue} />
      )}
    </div>
  );
}

export default App;
