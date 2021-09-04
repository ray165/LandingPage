import React, { useEffect } from 'react';


export default function MotionPicture(props) {
    const { anime, setAnime } = props

    useEffect(() => {
        if (anime) {
            // Then move the image happily for X seconds. SetAnime false after
        }
        return () => {
            setAnime(false)
        }
    }, [anime])

    return(
        <>
        </>
    )
}