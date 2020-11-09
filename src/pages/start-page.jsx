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
import Categories from "./categories.json";
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
      <Text variant="mega" block className="title">
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
                  style={{ marginTop: "0.8em", maxWidth: "600px" }}
                >
                  {Object.values(category.links).map((link) => {
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
        <SearchBox
          underlined={true}
          style={{ background: theme.palette.neutralPrimary, border: "none" }}
          placeholder="d/g/y/di/"
          onSearch={(e) => gotourl(e)}
        />
      </Stack>
      <Stack horizontal horizontalAlign="center">
        <iframe
          title="spotify"
          src="https://open.spotify.com/embed/playlist/55z05L7uSns7aPVkeHvRkO"
          width="600"
          height="280"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <iframe
          title="youtube"
          width="600"
          height="280"
          src="https://www.youtube.com/embed/szDnqw-Tz5I?controls=0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Stack>
      <h1>
        {today.getDate()}/{today.getMonth() + 1}
      </h1>
      <Clock />
    </div>
  );
};

export default StartPage;
