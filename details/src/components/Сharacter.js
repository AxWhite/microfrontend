import React, { useEffect, useState } from "react";
import useHttp from './../hooks/use-http';
import { Card, Skeleton } from 'antd';

const { Meta } = Card;

const Character = ({ refLink }) => {
    const [character, setCharacter] = useState();
    const { isLoading, error, sendRequest: fetchCharacterData } = useHttp();

    useEffect(() => {
        fetchCharacterData(
            { url: refLink },
            (character) => setCharacter(character)
        );
    }, [setCharacter, fetchCharacterData, refLink]);

    let content = null;

    if (character) {
        return <Meta title={character.name} />
    }

    if (isLoading) {
        return (
            <Skeleton loading={isLoading} avatar active>
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Skeleton>
        )
    }

    return (
        <Card style={{ width: 240 }}>
            {content}
        </Card>
    )
}

export default Character;