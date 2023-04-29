import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { Button } from "antd";

const Confirmed = (props) => {
  return (
    <div
      style={{
        position: "relative",
        display: "block",
        justifyContent: "center",
        textAlign: "center",
        margin: "150px auto 0 auto",
      }}>
      <div
        style={{
          margin: "10px auto 0px auto",
          fontSize: 40,
          width: 80,
          height: 80,
          borderRadius: "100%",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgba(24, 43, 124, 1) 18%,  rgba(252, 69, 70, 1) 78%)",
        }}>
        <CheckOutlined />
      </div>
      <Title level={2}>THANK YOU</Title>
      <Title
        level={5}
        style={{ color: "#8f8f8f", marginTop: 0, marginBottom: 35 }}>
        We have added your card details!
      </Title>
      <div>
        <Button
          onClick={() => {
            props.onContinue(false);
          }}
          type="ghost"
          style={{
            fontWeight: 400,
            fontSize: 18,
            width: 350,
            height: 40,
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
          }}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Confirmed;
