import { useState, useEffect } from 'react'
import useContent from '../hooks/useContent'

import {
    ContentContainer,
    FooterContainer,
    HeaderContainer,
    HeroContainer,
    LoadingContainer
} from '../containers'


export default function Brows() {
    const { series } = useContent('series')
    const [content, setContent] = useState([])

    useEffect(() => {
        setContent(series)
    }, [series])

    return (
        content.length <= 0
            ?
            <LoadingContainer />
            :
            <>
                <HeaderContainer />
                <HeroContainer isSignedIn={true} />
                <ContentContainer content={content} />
                <FooterContainer />
            </>
    )
}
