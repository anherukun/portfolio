import * as React from 'react'

type Props = {
    url: string
    title: string
}


const LinkButton = ({ url, title }: Props) => {
    return (
        <a href={url} className='rounded outline outline-2 outline-white px-8 py-8' style={{
            // paddingLeft: 16,
            // paddingRight: 16,
            // paddingTop: 8,
            // paddingBottom: 8,
        }}>{title}</a>
    );
}

export default LinkButton;