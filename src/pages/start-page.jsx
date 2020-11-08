import React from "react";
import {
  Text,
  Icon,
  Pivot,
  PivotItem,
  Link,
  DefaultEffects,
  Stack,
  getTheme,
} from "@fluentui/react";
import "./start-page.scss";
import Categories from "./categories.json";

const theme = getTheme();

const StartPage = () => {
  return (
    <div
      id="start"
      style={{ textAlign: "center", background: theme.palette.neutralDark }}
    >
      <Text variant="mega" block className="title">
        Welcome to the internet!
        <Icon iconName="Brightness" style={{ paddingTop: "0.5em" }} />
      </Text>

      <Pivot
        aria-label="List of hypes"
        className="main-content"
        style={{
          boxShadow: DefaultEffects.elevation8,
          background: theme.palette.neutralPrimary,
        }}
      >
        {Object.values(Categories).map((category) => {
          return (
            <PivotItem
              headerText={category.categoryname}
              itemCount={category.links.length}
            >
              <Stack
                horizontal
                wrap
                horizontalAlign="space-evenly"
                style={{ marginTop: "0.8em" }}
              >
                {Object.values(category.links).map((link) => {
                  console.log(link.url);
                  return (
                    <Link className="link" href={link.url}>
                      {link.name}
                    </Link>
                  );
                })}
              </Stack>
            </PivotItem>
          );
        })}
      </Pivot>
      <div className="background"></div>
    </div>
  );
};

export default StartPage;
