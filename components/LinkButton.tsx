import * as React from 'react'

type Props = {
    url: string
    label: string
}


const LinkButton = ({ url, label }: Props) => {
    return (
        <div className='rounded-lg transition ease-in-out bg-sky-500 hover:bg-sky-700 px-4 py-2 w-fit h-fit'>
            <a href={url} className='font-medium text-sm text-white'>{label}</a>
        </div>
    );
}

export default LinkButton;