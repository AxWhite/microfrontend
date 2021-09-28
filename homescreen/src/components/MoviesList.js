import React, { useState, useEffect } from "react";
import { Empty, Skeleton, Card, Avatar, Table  } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

import Movie from "./Movie";
import { Link, useHistory, useLocation } from "react-router-dom";

const { Meta } = Card;

const MoviesList = (props) => {
    const [query, setQuery] = useState({
        column: '',
        direction: ''
    })
    const history = useHistory();
    const location = useLocation();

    console.log('LOCATION', location);

    let content = <Empty />;
    let tableContent = [];

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    if (props.movies && props.movies.length) {
        content = props.movies.map((movie, i) => {
            tableContent.push({
                key: i + 1,
                title: movie.title,
                releaseDate: movie.release_date,
                director: movie.director,
                producer: movie.producer,
                episodeId: movie.episode_id,
                color: <div style={{width: "30px", height: "30px", backgroundColor: getRandomColor()}} />
            })

            return <Movie key={movie.episode_id} movie={movie} />
        });
    }

    if (props.isLoading) {
        content = (
            <Card
                style={{ width: 300, marginTop: 16 }}
                actions={[
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Skeleton loading={props.isLoading} avatar active>
                    <Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Skeleton>
            </Card>
        )
    }

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            sorter: true,
            render: (text, record) => <Link to={getUrl(record)}>{text}</Link>,
        },
        {
            title: 'Release Date',
            dataIndex: 'releaseDate',
            key: 'releaseDate',
            sorter: true
        },
        {
            title: 'Director',
            dataIndex: 'director',
            key: 'director',
            sorter: true
        },
        {
            title: 'Producer',
            dataIndex: 'producer',
            key: 'producer',
            sorter: true
        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color'
        }
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        const { columnKey, order } = sorter;

        if (columnKey && order) {
            setQuery({
                column: columnKey,
                direction: order
            })
        }
    }

    const getUrl = (record) => {
        const colorValue = record.color.props.style.backgroundColor.substring(1);
        return `/details/${record.key}?color=${colorValue}`;
    }

    useEffect(() => {
        const params = new URLSearchParams()
        if (query.column && query.direction) {
            params.append(query.column, query.direction)
            history.push({search: params.toString()})
        } else {
            params.delete(query.column)
        }
    }, [query, history])

    return (
        <>
            <Table
                locale={{ emptyText: 'Waiting for list of cool movies...' }}
                dataSource={tableContent}
                columns={columns}
                onChange={onChange} />
            <div style={{display: "none", gap: '1em', flexWrap: "wrap"}}>{content}</div>
        </>
    )
}

export default MoviesList;