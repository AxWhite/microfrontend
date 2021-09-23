import React from "react";
import { Card } from "antd";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const { Meta } = Card;

const Movie = ({ movie }) => {
    const openDeepLink = () => {
        // window.location.assign(`${window.location.origin}/details/${movie.episode_id}`)


    }

    return (
        <>
            <Card
                style={{ width: 300 }}
                onClick={openDeepLink}
            >
                <Meta
                    title={movie.title}
                    description={movie.release_date}
                />
            </Card>
        </>
    )
}

export default Movie;