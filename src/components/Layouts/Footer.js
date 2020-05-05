import React from "react";

import { AppBar, Tabs, Tab } from "@material-ui/core";

const Footer = ({ muscles, category, onSelect }) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  return (
    <AppBar position="static">
      <Tabs
        value={index}
        onChange={(e, index) =>
          index !== 0 ? onSelect(muscles[index - 1]) : onSelect("")
        }
        indicatorColor="secondary"
        textColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="All" />
        {muscles.map((muscle, i) => (
          <Tab key={i} label={muscle} />
        ))}
      </Tabs>
    </AppBar>
  );
};
export default Footer;
