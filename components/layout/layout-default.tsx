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
                <Header style={{maxHeight: "10vh"}} className="site-layout-sub-header-background header">
                        <div className='header-left-cnt'>
                            <p style={{color: "white"}}>Flickr Image</p>
                        </div>
                </Header>
                <Layout style={{ padding: '24px 24px 24px', maxHeight: "90vh", overflowY: "scroll"}}>
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