import { useState } from 'react';

function YourInfo() {
    // FOCUSED STATE
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isNumFocused, setIsNumFocused] = useState(false);

    return(
        <main className="w-2/3 h-full grid">
            <div className="flex flex-col gap-2 mb-5">
                <h1 className="text-3xl font-bold">Personal Info</h1>
                <p className="text-sm text-zinc-400">Please provide your name, email address, and phone number.</p>
            </div>
            {/* INPUT FIELDS */}
            <form className="flex flex-col gap-5">
                <div>
                    <label for="name" className="text-xs font-semibold">Name</label>
                    <br/>
                    <div 
                        onFocus={() => setIsNameFocused(true)}
                        onBlur={() => setIsNameFocused(false)}
                        className={`h-10 w-full border-1 px-4 py-1 rounded-lg hover:border-[#8883B6] transition-all ${isNameFocused ? 'border-[#8883B6]' : 'border-zinc-200'}`}
                    >
                        <input className="h-full w-full outline-none" type="text" id="name" name="firstName" placeholder="e.g. Stephen King" />
                    </div>
                </div>
                {/*  */}
                <div>
                    <label for="email" className="text-xs font-semibold">Email Address</label>
                    <br />
                    <div 
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={() => setIsEmailFocused(false)}
                        className={`h-10 w-full border-1 px-4 py-1 rounded-lg hover:border-[#8883B6] transition-all ${isEmailFocused ? 'border-[#8883B6]' : 'border-zinc-200'}`}
                    >
                        <input className="h-full w-full outline-none" type="text" id="email" name="emailAddress" placeholder="e.g. StephenKing@lorem.com" />
                    </div>
                </div>
                {/*  */}
                <div>
                    <label for="number" className="text-xs font-semibold">Phone Number</label>
                    <br />
                    <div 
                        onFocus={() => setIsNumFocused(true)}
                        onBlur={() => setIsNumFocused(false)}
                        className={`h-10 w-full border-1 px-4 py-1 rounded-lg hover:border-[#8883B6] transition-all ${isNumFocused ? 'border-[#8883B6]' : 'border-zinc-200'}`}
                    >
                        <input className="h-full w-full outline-none" type="text" id="number" name="phoneNumber" placeholder="e.g. +1 234 567 890" />
                    </div>
                </div>
            </form>
            {/* BUTTON */}
            <div className="flex justify-end items-end">
                <button className="p-3 bg-button rounded-md text-zinc-100 font-bold hover:bg-hover transition-all">Next Step</button>
            </div>
        </main>
    );

}

export default YourInfo