'use client'
import * as React from 'react'
import { ButtonHTMLAttributes } from "react";
import Icon from '@mdi/react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    glyph: string
}

const MinimalButton = ({ glyph, onClick }: Props) => {

    return (
        <div className='flex gap-2 items-center rounded-lg transition ease-in-out bg-gray-200 hover:bg-gray-500 w-fit h-fit'>
            <button className='font-medium text-gray-500 hover:text-gray-100 text-sm px-2 py-2' onClick={() => onclick}><Icon path={glyph} size={1}/></button>
        </div>
    );
}

export default MinimalButton;