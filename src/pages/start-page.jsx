import React from "react";
import { useHistory } from "react-router-dom";
import {
  Text,
  Pivot,
  PivotItem,
  Link,
  DefaultEffects,
  Stack,
  Icon,
  FontIcon,
  SearchBox,
  getTheme,
} from "@fluentui/react";
import "./start-page.scss";
import Categories from "./categories.json";

const theme = getTheme();

const StartPage = () => {
  const history = useHistory();
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
        <SearchBox
          onSearch={(e) => history.push("https://duckduckgo.com/?q=" + { e })}
          underlined={true}
          style={{ background: theme.palette.neutralPrimary, border: "none" }}
          placeholder="d/g/y/di/"
        />
      </Stack>
      <iframe
        title="spotify"
        src="https://open.spotify.com/embed/playlist/55z05L7uSns7aPVkeHvRkO"
        width="600"
        height="280"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        style={{ margin: "auto" }}
      ></iframe>
    </div>
  );
};

export default StartPage;
