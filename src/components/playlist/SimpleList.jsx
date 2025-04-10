import { ThumbUpOffAlt, ThumbUpAlt, ThumbDownOffAlt, ThumbDownAlt } from '@mui/icons-material'
import React from 'react'

export default function SimpleList() {
    const [like, setLike] = React.useState(false)
    const [dislike, setDislike] = React.useState(false)

    function handleLike() {
        setLike(!like)
        setDislike(false)
    }

    function handleDislike() {
        setDislike(!dislike)
        setLike(false)
    }
    return (
        <div className='flex gap-4 items-center px-4'>
            <div>
                <img src="https://th.bing.com/th/id/R.1f944c2571edeea4daae61df34a6f033?rik=TTjaOPoYAwL%2fHw&riu=http%3a%2f%2fwww.dafont.com%2fforum%2fattach%2forig%2f5%2f0%2f507496.png%3f1&ehk=cBfFhHOrc4GCk%2bQBSTpD3xgbTY1DdbXkRzGLsIU51zY%3d&risl=&pid=ImgRaw&r=0" alt=""
                    className=' h-14 w-14 rounded-sm'
                />
            </div>
            <div className='grid'>
                <span>Muốn anh đau</span>
                <span>Winno và Hustlang Robber TO LOVE AND BE LOVED</span>
            </div>

            <button onClick={handleLike}>
                {like ?
                    <ThumbUpAlt className='white' />
                    : <ThumbUpOffAlt className='white' />
                }
            </button>

            <button onClick={handleDislike}>
                {dislike ?
                    <ThumbDownAlt className='white' />
                    : <ThumbDownOffAlt className='white' />
                }
            </button>

            <div>5:23</div>
        </div>
    )
}
