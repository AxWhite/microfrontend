import React from "react";
import { Card, Row, Col, Spin, Timeline } from 'antd';
import Character from "./Сharacter";


const MovieDetails = ({ isLoading, movie }) => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries())
    let bgColor = '';
    if ('color' in params) {
        bgColor = params.color;
    }
    let content = null;

    if (movie) {
        content = (
            <Row gutter={[16, 16]} style={{ backgroundColor: `#${bgColor}`}}>
                <Col span={18} push={6}>
                    <Card title="Description">
                        <p>{movie.opening_crawl}</p>
                    </Card>
                    <Card title="Characters">
                        <div style={{ display: 'flex', 'flexWrap': 'wrap', gap: '2em' }}>
                            {movie.characters.map((refLink, index) => <Character key={index} refLink={refLink} />)}
                        </div>
                    </Card>
                </Col>
                <Col span={6} pull={18}>
                    <Card title={movie.title}>
                        <ul>
                            <li>"director": {movie.director}</li>
                            <li>"producer": {movie.producer}</li>
                            <li>"release_date": {movie.release_date}</li>
                        </ul>
                    </Card>

                    <Card>
                        <Timeline>
                            <Timeline.Item>Created: {movie.created}</Timeline.Item>
                            <Timeline.Item>Modified: {movie.edited}</Timeline.Item>
                        </Timeline>
                    </Card>
                </Col>
            </Row>
        )
    }

    if (isLoading) {
        content = <Spin />;
    }

    return content
}

export default MovieDetails;