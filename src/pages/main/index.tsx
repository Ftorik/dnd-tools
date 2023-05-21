import React, { useState } from "react";
import {
    TeamOutlined,
    FireFilled,
    BugFilled,
    PictureFilled,
    TrophyFilled,
    ReadFilled,
    HourglassFilled,
    CustomerServiceFilled,
    SnippetsFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Encounter } from "widgets/encounter";

const { Footer, Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#f7eaba",
};

const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const FONT_SIZE = "1.2em";

const items: MenuItem[] = [
    getItem("Start Encounter", "1", <FireFilled style={{ fontSize: FONT_SIZE, color: "orange" }} />),
    getItem("Bestiary", "2", <BugFilled style={{ fontSize: FONT_SIZE, color: "white" }} />),
    getItem("Team", "sub2", <TeamOutlined style={{ fontSize: FONT_SIZE, color: "white" }} />, [
        getItem("Team 1", "3"),
        getItem("Team 2", "4"),
    ]),
    getItem("Notes", "5", <SnippetsFilled style={{ fontSize: FONT_SIZE, color: "white" }} />),
    getItem("Map", "6", <PictureFilled style={{ fontSize: FONT_SIZE, color: "white" }} />),
    getItem("Loot", "7", <TrophyFilled style={{ fontSize: FONT_SIZE, color: "white" }} />),
    getItem("Languages", "8", <ReadFilled style={{ fontSize: FONT_SIZE, color: "white" }} />),
    getItem("Timer", "9", <HourglassFilled style={{ fontSize: FONT_SIZE, color: "white" }} />),
    getItem("Audio", "10", <CustomerServiceFilled style={{ fontSize: FONT_SIZE, color: "white" }} />),
];

export function Main() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
            </Sider>
            <Layout>
                {/* <Content style={contentStyle}>Content</Content> */}
                <Content style={contentStyle}>
                    <Encounter />
                </Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Layout>
    );
}
