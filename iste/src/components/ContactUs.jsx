import React from 'react'

const ContactUs = () => {
    return (
        <div id="contact-us" className='py-20 px-8'>
            <div>
                <h1 className="text-4xl font-palanquin font-bold mt-2 mb-4">Get In Touch</h1>
            </div>
                <div className='flex flex-col gap-10 font-semibold px-20'>
                    <div className='flex items-center justify-center'>
                        <h2 className="text-2xl font-palanquin font-bold mt-5">Faculty Coordinators</h2>
                    </div>
            <div className="flex max-md:flex-col justify-around">
                    <div className='mt-5  bg-emerald-400 lg:flex-col shadow-xl rounded-xl p-10 w-80'>
                        Dr.P.RAVICHANDRAN ME.,Ph.D.<br />
                        Faculty Coordinator<br />
                        +91 9965998989<br />
                    </div>
                    <div className='mt-5  bg-emerald-400 lg:flex-col shadow-xl rounded-xl p-10 w-80'>
                        Mr. A. Ganesh M.Tech<br />
                        Faculty Coordinator<br />
                        +91 9578505841<br />
                    </div>
                </div>
                <div className="flex flex-col gap-10 font-semibold mt-10 ">
                    <div className='flex items-center justify-center'>
                        <h2 className="text-2xl font-palanquin font-bold mt-5 ">Student Coordinators</h2>
                    </div>
            <div className="flex max-md:flex-col justify-around">
                    <div className='mt-5 bg-emerald-400 lg:flex-col shadow-xl rounded-xl p-10 w-80'>
                        MR. RANJITHKUMAR<br />
                        Chairperson<br />
                        +91 9597928987<br />

                    </div>
                    <div className='mt-5  bg-emerald-400 lg:flex-col shadow-xl rounded-xl p-10 w-80'>
                        MR. SRINATH<br />
                        SECRETARY<br />
                        +91 7010768854<br />
                    </div>
                    <div className='mt-5  bg-emerald-400 lg:flex-col shadow-xl rounded-xl p-10 w-80'>
                        MS. ANUSRI<br />
                        TREASURER<br />
                        +91 9361996123
                    </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ContactUs