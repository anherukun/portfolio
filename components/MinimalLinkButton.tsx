import * as React from 'react'
import Icon from '@mdi/react';

type Props = {
    url: string
    glyph: string
}


const MinimalLinkButton = ({ url, glyph }: Props) => {

    return (
        <div className='flex gap-2 items-center rounded-lg transition ease-in-out bg-gray-200 hover:bg-gray-500 w-fit h-fit'>
            <a href={url} className='font-medium text-gray-500 hover:text-gray-100 text-sm px-2 py-2' target='blank'><Icon path={glyph} size={1}/></a>
        </div>
    );
}

export default MinimalLinkButton;