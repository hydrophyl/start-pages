import React from "react";
import {
  Text,
  Pivot,
  PivotItem,
  Link,
  DefaultEffects,
  Stack,
  SearchBox,
  getTheme,
} from "@fluentui/react";
import "./start-page.scss";
import Clock from "../components/clock";
import { readCategories, filterLinkWithCategory } from "./actions.jsx";
const theme = getTheme();

const StartPage = () => {
  const gotourl = (e) => {
    window.location.replace("https://duckduckgo.com/?q=" + e);
    return null;
  };
  const today = new Date();
  return (
    <div id="start" style={{ textAlign: "center" }}>
      <div className="background" />
      <Text variant="xxLarge" block className="title">
        Welcome to the abyss!
      </Text>
      <Stack
        className="nav-board"
        style={{
          boxShadow: DefaultEffects.elevation8,
          background: theme.palette.neutralPrimary,
        }}
      >
        <Pivot aria-label="List of hypes" className="pivot-board">
          {Object.values(readCategories()).map((category) => {
            return (
              <PivotItem headerText={category}>
                <Stack
                  horizontal
                  wrap
                  horizontalAlign="space-evenly"
                  style={{ marginTop: "0.8em", maxWidth: "600px" }}
                >
                  {Object.values(filterLinkWithCategory(category)).map(
                    (link) => {
                      return (
                        <Link className="link" href={link.url}>
                          {link.name}
                        </Link>
                      );
                    }
                  )}
                </Stack>
              </PivotItem>
            );
          })}
        </Pivot>
        <SearchBox
          underlined={true}
          style={{ background: theme.palette.neutralPrimary, border: "none" }}
          placeholder="d/g/y/di/"
          onSearch={(e) => gotourl(e)}
        />
      </Stack>
      <Stack horizontal horizontalAlign="center">
        Put something here
      </Stack>
      <h1>
        {today.getDate()}/{today.getMonth() + 1}
      </h1>
      <Clock />
    </div>
  );
};

export default StartPage;
