import React from "react";
import ReactDOM from "react-dom";
import { setGlobal, useGlobal } from "reactn";
import { Calendar, Icon, Layout, Menu, Col, Row } from "antd";
import moment from "moment";
import "antd/dist/antd.css";
import "./index.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

setGlobal({
  value: moment()
});

function App() {
  const [value, setValue] = useGlobal("value");

  function changeDate(date) {
    setValue(date);
  }

  return (
    <Layout className="layout">
      <Sider className="sider" width={200}>
        <div className="logo" />
        <hr />
        <div>{value.format("dddd, LL")}</div>
        <div
          style={{
            border: "0px white solid",
            overflow: "auto",
            color: "#fff",
            flex: 2
          }}
        />
        <hr style={{ marginTop: "auto" }} />
        <Calendar
          className="side-cal"
          value={value}
          onSelect={changeDate}
          onPanelChange={changeDate}
          fullscreen={false}
          headerRender={({ value, type, onChange, onTypeChange }) => {
            return (
              <div
                style={{
                  paddingTop: 10,
                  paddingBottom: 5,
                  paddingRight: 12,
                  paddingLeft: 12
                }}
              >
                <Row type="flex" justify="space-between">
                  <Col>
                    <span
                      onClick={() => {
                        const newValue = value.clone().subtract(1, "month");
                        onChange(newValue);
                      }}
                    >
                      <Icon type="caret-left" theme="filled" />
                    </span>
                  </Col>
                  <Col>
                    <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                      {value.format("MMMM YYYY")}
                    </span>
                  </Col>
                  <Col>
                    <span
                      onClick={() => {
                        const newValue = value.clone().add(1, "month");
                        onChange(newValue);
                      }}
                    >
                      <Icon type="caret-right" theme="filled" />
                    </span>
                  </Col>
                </Row>
              </div>
            );
          }}
        />
      </Sider>
      <Layout>
        <Header className="header">
          <Menu
            theme="light"
            mode="horizontal"
            style={{ lineHeight: "64px" }}
            selectable={false}
          >
            <Menu.Item key="1" className="right">
              Logout
            </Menu.Item>
            <SubMenu
              // className="right"
              title={<span className="submenu-title-wrapper">Recipes</span>}
            >
              <Menu.Item key="recipes:1">Recipe Home</Menu.Item>
              <Menu.Item key="setting:2">Add Recipe</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
        <Content className="content">
          <h1>{value.format("LL")}</h1>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          App ©2019 Created by Zack Moore
        </Footer>
      </Layout>
    </Layout>
  );
}

ReactDOM.render(<App />, document.getElementById("container"));
