import React from 'react'

export default function Footer({ decor = true, ...restProps }) {
    return (
        <footer className='background-image w-full min-h-[550px]'>
            {decor ?
                <div className='decor'>
                    <svg className='w-full h-[100px]'>
                        <ellipse cx="50%" cy="5%" rx="55%" ry="100%" fill='#f4f3ef' />
                    </svg>
                </div>
                : null
            }
        </footer>
    )
}
