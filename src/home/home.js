import React from "react";
import { useGlobal } from "reactn";

import { Breadcrumb } from "antd";

function Home() {
  // eslint-disable-next-line
  const [value, setValue] = useGlobal("value");

  return (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
      <div className="sub-content">
        <h1>You have selected {value.format("dddd, LL")}</h1>
      </div>
    </div>
  );
}

export default Home;
