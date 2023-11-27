import React from 'react'
import InputLabel from '@/Components/InputLabel'
export default function ProfilePicture() {
    return (
        <>
            <InputLabel htmlFor="profile_picture" value="Profile Picture" />
            <img src="" alt="" className='w-[200px] h-[250px]' />
            <input type="file" />
        </>
    )
}
