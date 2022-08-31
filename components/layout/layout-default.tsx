import React, {ReactNode, useEffect, useState} from 'react'
import Head from 'next/head'
import {Grid, Image, Layout, Menu, Tag, Typography, Breadcrumb, Badge, Avatar } from 'antd';
const {Header, Content, Footer, Sider} = Layout;

type Props = {
    children?: ReactNode
    
}

export default function LayoutDefault({children} : Props) {
    return(
        <Layout>
            <Head>
                <title>Flickr Image</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Layout>
                <Header className="site-layout-sub-header-background header">
                        <div className='header-left-cnt'>
                            <p style={{color: "white"}}>Flickr Image</p>
                        </div>
                </Header>
                <Layout style={{ padding: '24px 24px 24px', height: "100vh", maxHeight: "100vh" }}>
                        <Content
                            className="site-layout-background"
                        >
                            {children}
                        </Content>
                    </Layout>
            </Layout>
        </Layout>
    )
}