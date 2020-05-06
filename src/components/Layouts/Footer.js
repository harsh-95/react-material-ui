import React from "react";
import { withContext } from '../../context';
import { AppBar, Tabs, Tab } from "@material-ui/core";

const Footer = ({category, muscles, onSelectCategory}) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  return (
    <AppBar position="static">
      <Tabs
        value={index}
        onChange={(e, index) =>
          index !== 0 ? onSelectCategory(muscles[index - 1]) : onSelectCategory("")
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
export default withContext(Footer);
