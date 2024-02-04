import * as React from 'react'

type Props = {
    url: string
}

const PictureProfile = ({url}: Props) => {
    return (
        <div className=''>
            <img src={url} alt="It's me" className='h-[128px] h-[128px] aspect-square object-cover rounded-xl' />
        </div>
    );
}

export default PictureProfile;