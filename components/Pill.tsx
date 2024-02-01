import * as React from 'react'

type Props = {
    label: string
}


const Pill = ({ label }: Props) => {

    return (
        <div className='flex gap-2 items-center rounded-full outline outline-[1.75px] outline-offset-1 outline-slate-500 transition ease-in-out bg-slate-700 hover:bg-slate-500 hover:outline-slate-700 w-fit h-fit'>
            <p className='font-light text-xs text-slate-400 hover:text-slate-900 px-4 py-1'>{label}</p>
        </div>
    );
}

export default Pill;