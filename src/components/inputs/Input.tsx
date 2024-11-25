import { cn } from '@/libs/utils'
import React from 'react'

interface InputInterface {
    label: string,
    type: InputType,
    placeHolder: string,
    className: string,
    isDisable: boolean
    onChange: (e:any)=>void
}

export enum InputType {
    Text= 'text',
    Password= 'password',
    Email= 'email',
    TelePhone= 'tel',
    Time='time'
}


function Input({label,type,placeHolder,className, isDisable}:InputInterface) {
    return (
        <div className={cn('flex flex-col gap-2',className)} >
            <label className="text-gray-700 font-medium mb-1">{label}</label>
            <input type={type} placeholder={placeHolder} className={"w-full p-3 border rounded-md bg-gray-100 text-gray-600 focus:outline-none"} disabled={isDisable} />
        </div>
    )
}

export default Input