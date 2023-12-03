import React from 'react'
import InputLabel from '@/Components/InputLabel'
import profileImage from "@/assets/image/eks.jpg"
export default function ProfilePicture() {
    return (
        <>
            <InputLabel htmlFor="profile_image" value="Profile Image" />
            <img src={profileImage} alt='' className='w-[200px] h-[250px] object-cover'/>
            <input type="file" name='profile_image' id='profile_image'/>
        </>
    )
}
