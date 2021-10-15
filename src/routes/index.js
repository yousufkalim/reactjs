// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Auth from "../containers/Auth/index.js";

const index = () => {
  return (
    <Switch>
      {/* auth routes mainly Login signup  */}
      <Auth />
    </Switch>
  );
};

export default index;
