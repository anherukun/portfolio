import * as React from 'react'

type Props = {
    title: string
    school: string
    exp: number
    profesionId?: string
    note?: string
}

const EducationItem = ({ title, school, exp, profesionId, note }: Props) => {

    return (
        <div className='flex flex-col pb-6 w-fill'>
            <div className='grid grid-cols-4'>
                <h3 className='text-xl font-semibold col-span-3'>{school}</h3>
                <p className='text-end self-center'>{exp}</p>
            </div>
            <p className='text-gray-500'>{title}</p>

            {profesionId ? (<p className='text-gray-500'>Cedula Prof.: {profesionId}</p>) : '' }
        </div>
    );
}

export default EducationItem;