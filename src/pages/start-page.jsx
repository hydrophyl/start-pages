import React from "react";
import { Text } from "@fluentui/react";
import "./start-page.scss";

const StartPage = () => {
  return (
    <div>
      <Text variant="mega" block>
        Welcome to the internet!
      </Text>
      <div className="background"></div>
    </div>
  );
};

export default StartPage;
