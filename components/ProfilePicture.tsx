import * as React from 'react'

type Props = {
    url: string
}

const PictureProfile = ({url}: Props) => {
    return (
        <div className=''>
            <img src={url} alt="It's me" className='h-[100px] h-[100px] aspect-square object-cover rounded-xl' />
        </div>
    );
}

export default PictureProfile;