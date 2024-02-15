import * as React from 'react'
import Icon from '@mdi/react';

type Props = {
    label: string
    glyph: string
}


const MediumPillIcon = ({ label, glyph }: Props) => {

    return (
        <div className='rounded w-fit h-fit ease-in-out bg-gray-200 transition hover:bg-gray-500'>
            <p className='flex gap-2 items-center font-light text-sm text-gray hover:text-gray-100 px-4 py-1'>
                <Icon path={glyph} size={0.75}/> {label}
            </p>
        </div>
    );
}

export default MediumPillIcon;