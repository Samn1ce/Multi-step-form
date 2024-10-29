import { useState } from 'react';

function YourInfo() {

    const [isFocused, setIsFocused] = useState(false);

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
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className={`h-10 w-full border-1 px-4 py-1 rounded-lg ${isFocused ? 'border-[#8883B6]' : 'border-zinc-200'}`}
                    >
                        <input className="h-full w-full outline-none" type="text" id="name" name="firstName" />
                    </div>
                </div>
                {/*  */}
                <div>
                    <label for="name" className="text-xs font-semibold">Email Address</label>
                    <br />
                    <div 
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className={`h-10 w-full border-1 px-4 py-1 rounded-lg ${isFocused ? 'border-[#8883B6]' : 'border-zinc-200'}`}
                    >
                        <input className="h-full w-full outline-none" type="text" id="name" name="firstName" />
                    </div>
                </div>
                {/*  */}
                <div>
                    <label for="name" className="text-xs font-semibold">Phone Number</label>
                    <br />
                    <div 
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className={`h-10 w-full border-1 px-4 py-1 rounded-lg ${isFocused ? 'border-[#8883B6]' : 'border-zinc-200'}`}
                    >
                        <input className="h-full w-full outline-none" type="text" id="name" name="firstName" />
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