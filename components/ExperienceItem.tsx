import * as React from 'react'

type Props = {
    title: string
    description: string
    url?: string
    start: string
    end?: string
    elapsedTime?: string
    isCurrent: boolean
}

const ExperienceItem = ({ title, description, url, start, end, elapsedTime, isCurrent }: Props) => {

    return (
        <div className='grid grid-cols-5 gap-10 pb-12 w-fill'>
            <div className='col-span-2'>
                <h3 className='text-xl'>{title}</h3>
                <p className='text-sm text-gray-400'>{start} - {isCurrent ? 'Actualmente...' : end }</p>
                {elapsedTime ? (<p>{elapsedTime}</p>) : ''}
            </div>
            
            <div className='col-span-3 flex flex-col gap-4 text-gray-400'>
                {description}
                {url ? (<a href={url} className='text-gray-100'>Saber mas...</a>) : ''}
            </div>
        </div>
    );
}

export default ExperienceItem;