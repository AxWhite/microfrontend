import React from 'react';
import { Breadcrumb } from 'antd';

const GlobalBreadcrumb = ({ title }) => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Homescreen</Breadcrumb.Item>
            <Breadcrumb.Item>Movies</Breadcrumb.Item>
            <Breadcrumb.Item>Star Wars</Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default GlobalBreadcrumb;