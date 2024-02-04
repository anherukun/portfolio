import * as React from 'react'
import PillIcon from "@components/PillIcon"
import LinkButton from "@components/IconLinkButton"
import IconLinkButton from '@components/IconLinkButton'

type Props = {
    title: string
    description: string
    imageurl: string
    features?: featuresProps[]
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
        <div className='grid grid-cols-6 gap-10 pb-12 w-fill group'>
            <div className='col-span-3'>
                <img className='rounded-xl object-cover shadow-lg transition duration-500 ease-in-out group-hover:scale-105' loading='lazy' src={imageurl} />
            </div>

            <div className='col-span-3 flex flex-col gap-3 font-normal'>
                <h3 className='text-xl font-bold'>{title}</h3>

                {description}

                {features ? (
                    <div className='flex flex-row flex-wrap gap-2 text-gray-500'>
                        {features?.map((e, index) => (
                            <PillIcon label={e.label} glyph={e.glyph} />
                        ))}
                    </div>) : ''}

                {urls ? (
                    <div className='self-start'>
                        <IconLinkButton url={urls.url} label={urls.label} glyph={urls.icon} />
                    </div>) : ''}
            </div>
        </div>
    );
}

export default ProjectItem;