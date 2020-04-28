import React from "react";

import { Paper, Tabs, Tab } from "@material-ui/core";

const Footer = ({ muscles, category, onSelect }) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={(e, index) =>
          index !== 0 ? onSelect(muscles[index - 1]) : onSelect("")
        }
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map((muscle, i) => (
          <Tab key={i} label={muscle} />
        ))}
      </Tabs>
    </Paper>
  );
};
export default Footer;
