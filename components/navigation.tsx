import React from 'react'

import Link from 'next/link' 

type linktype = {
    name: string,
    hash: string
}


export default function Navigation ({name,hash}: linktype){
     return (
     <li className="h-3/4 flex items-center justify-center relative">
        <Link 
            className="flex items-center justify-center px-9 py-3 hover:text-blue-950 transition dark:text-gray-500 dark:hover:text-gray-300" 
            href={hash}>
        {name} </Link> 
    </li>
    )
}
