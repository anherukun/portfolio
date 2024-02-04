import * as React from 'react'
import Icon from '@mdi/react';

type Props = {
    label: string
    glyph: string
}


const PillIcon = ({ label, glyph }: Props) => {

    return (
        <div className='rounded-full w-fit h-fit outline outline-[1.75px] outline-offset-1 outline-gray-500 ease-in-out bg-gray-300 transition hover:bg-gray-500 hover:outline-gray-700'>
            <p className='flex gap-2 items-center font-light text-xs text-gray hover:text-gray-200 px-4 py-1'>
                <Icon path={glyph} size={0.5}/> {label}
            </p>
        </div>
    );
}

export default PillIcon;