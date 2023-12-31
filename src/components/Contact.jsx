import React from 'react'

export default function Contact() {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/a9b10670-8acd-43f0-81cc-5970a81b1d42" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>{'//'} Submit the form below or shoot me an email - furkansayyed115@gmail.com</p>
                </div>
                <input required className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input required className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea required className='bg-[#ccd6f6] p-2' placeholder='Message' name="message" rows="10"></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Lets's Collaborate</button>
            </form>
        </div>
    )
}
