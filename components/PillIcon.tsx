import * as React from 'react'
import Icon from '@mdi/react';

type Props = {
    label: string
    glyph: string
}


const PillIcon = ({ label, glyph }: Props) => {

    return (
        <div className='rounded w-fit h-fit ease-in-out bg-gray-200 transition hover:bg-gray-500'>
            <p className='flex gap-2 items-center font-light text-xs text-gray hover:text-gray-100 px-4 py-1'>
                <Icon path={glyph} size={0.5}/> {label}
            </p>
        </div>
    );
}

export default PillIcon;