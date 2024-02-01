import * as React from 'react'
import Icon from '@mdi/react';

type Props = {
    label: string
    glyph: string
}


const PillIcon = ({ label, glyph }: Props) => {

    return (
        <div className='rounded-full outline outline-[1.75px] outline-offset-1 outline-slate-500 transition ease-in-out bg-slate-700 hover:bg-slate-500 hover:outline-slate-700 w-fit h-fit'>
            <p className='flex gap-2 items-center font-light text-xs text-slate-400 hover:text-slate-900 px-4 py-1'>
                <Icon path={glyph} size={0.5}/> {label}
            </p>
        </div>
    );
}

export default PillIcon;