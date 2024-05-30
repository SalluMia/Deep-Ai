import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

function MainHeading({link, title, flag}) {
    
  return (
    <>
          <Link href={`/${link}`}
            className="font-varino text-lg">
                 <h1 className={clsx('text-white', { 'text-[#00A7E1]': flag })}> {title}</h1> 
          </Link>
    </>
  )
}

export default MainHeading