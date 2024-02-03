import * as React from 'react'
import PillIcon from "@components/PillIcon"

type Props = {
    title: string
    description: string
    imageurl: string
    features? : featuresProps[]
    urls?: {
        icon: string
        label: string
        url: string
    }
}

type featuresProps = {
    glyph: string
    label: string
}

const ProjectItem = ({ title, description, imageurl, features, urls }: Props) => {

    return (
        <div className='grid grid-cols-6 gap-10 pb-12 w-fill'>
            <div className='col-span-3'>
                <img className='rounded-xl' src={imageurl}/>
            </div>
            
            <div className='col-span-3 flex flex-col gap-4 text-gray-500 font-normal'>
                <h3 className='text-xl font-bold'>{title}</h3>

                {description}

                <div className='flex flex-row flex-wrap gap-2'>
                    {features?.map((e, index) => (
                        <PillIcon label={e.label} glyph={e.glyph}/>
                    ))}
                </div>

                {urls ? (<a href={urls.url} className='text-cyan-700 font-medium'>Saber mas...</a>) : ''}
            </div>
        </div>
    );
}

export default ProjectItem;