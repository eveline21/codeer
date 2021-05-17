import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React, { FC, ReactNode } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";

interface Props {
    children: ReactNode;
}

export const Page: FC<Props> = ({ children }) => {
    return (
        <Layout>
            <Header>
                <Link to="/"><img src={logo} style={{ width: '150px' }} className="App-logo" alt="logo" /></Link>
            </Header>
            <Content style={{ height: "100%", margin: "2em" }}>{children}</Content>
        </Layout>
    );
};
