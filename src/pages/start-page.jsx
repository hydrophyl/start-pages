import React from "react";
import { Text, Icon, Pivot, PivotItem, Label, Link } from "@fluentui/react";
import "./start-page.scss";

const StartPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Text variant="mega" block>
        Welcome to the internet!
        <Icon iconName="Brightness" style={{ paddingTop: "0.5em" }} />
      </Text>

      <Pivot aria-label="List of hypes">
        <PivotItem headerText="Grandweg" itemCount={1}>
          <Label>Grandweg Wohnanlage</Label>
          <Link
            className="link"
            href="https://docs.google.com/spreadsheets/d/1yRncrPSWK4jXz4R6M8Y5_Wnp3e3WVjHi3q_Ksz8vzlY/edit#gid=759655960"
          >
            Waschmaschinen List
          </Link>
        </PivotItem>
        <PivotItem headerText="HAW" itemCount={3}>
          <Label>HAW Links</Label>
          <Link className="link" href="https://haw-mailer.haw-hamburg.de/owa">
            HAW-Mailer
          </Link>
          <Link
            className="link"
            href="https://myhaw.haw-hamburg.de/qisserver/pages/cs/sys/portal/hisinoneStartPage.faces?chco=y"
          >
            myHAW
          </Link>
          <Link className="link" href="https://emil.haw-hamburg.de/my/">
            EMIL
          </Link>
        </PivotItem>
      </Pivot>
      <div className="background"></div>
    </div>
  );
};

export default StartPage;
