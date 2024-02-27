import * as React from 'react'
import Icon from '@mdi/react';

import MediumPillIcon from './MediumPillIcon'
import { mdiTranslate } from '@mdi/js';

type Props = {
    title: string
    level: string
}

const LanguageItem = ({ title, level }: Props) => {
    let label = title + ' - ' + level
    return (
        <MediumPillIcon label={label} glyph={mdiTranslate}/>
    );
}

export default LanguageItem;