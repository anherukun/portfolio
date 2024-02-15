import * as React from 'react'
import Icon from '@mdi/react';

import MediumPillIcon from './MediumPillIcon'

type Props = {
    title: string
    habItems: habilityItem[]
}

type habilityItem = {
    label: string
    glyph: string
}

const HabilitiesItem = ({ title, habItems }: Props) => {

    return (
        <div className='flex flex-col gap-1'>
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="flex flex-row gap-2 flex-wrap">
                {habItems ? (
                    habItems.map((e, index) => (
                        <MediumPillIcon label={e.label} glyph={e.glyph} />
                    ))) : ''}
            </div>
        </div>
    );
}

export default HabilitiesItem;