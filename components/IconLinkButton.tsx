import * as React from 'react'
import Icon from '@mdi/react';

type Props = {
    url: string
    label: string
    glyph: string
}


const IconLinkButton = ({ url, label, glyph }: Props) => {

    return (
        <div className='flex gap-2 items-center text-white rounded-lg transition ease-in-out bg-sky-500 hover:bg-sky-700 px-4 py-2 w-fit h-fit'>
            <Icon path={glyph} size={1}/>
            <a href={url} className='font-medium text-sm' target='blank'>{label}</a>
        </div>
    );
}

export default IconLinkButton;