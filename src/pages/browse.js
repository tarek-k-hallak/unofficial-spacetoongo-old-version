import React, { Fragment } from 'react'
import { useState, useEffect } from 'react'
import { FooterContainer, HeaderContainer, HeroContainer } from '../containers'
import useContent from '../hooks/useContent'

export default function Browse() {
    const [content, setContent] = useState([])
    const [isContentReady, setIsContentReady] = useState(false)
    const { series } = useContent('series')

    useEffect(() => {
        setContent(series)
    }, [series])

    useEffect(() => {
        setIsContentReady(true)
    }, [content.length])

    return (
        <div className='font-primary bg-background'>
            <HeaderContainer isSignedIn={true} />
            <HeroContainer isSignedIn={true} />
            <h1>Browse Page </h1>
            {
                isContentReady
                    ?
                    content.map(item => (
                        <div key={item.id}>
                            <Fragment>
                                {item.id}
                            </Fragment>
                        </div>
                    ))
                    :
                    null
            }

            <FooterContainer />
        </div>
    )
}