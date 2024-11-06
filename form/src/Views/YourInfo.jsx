import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function YourInfo() {
    // NAVIGATE TO NEXT PAGE AFTER BUTTON IS CLICKED
    const navigate = useNavigate();

    // FOCUSED STATE
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isNumFocused, setIsNumFocused] = useState(false);

    const [form, setForm] = useState(
        {
            name: '',
            email: '',
            phoneNumber: ''
        }
    );

    const [filled, setFilled] = useState(true);

    function handleFormSubmit(e) {
        e.preventDefault()
        if (form.name === '' || form.email === '' || form.phoneNumber === '') {
            console.log('No detail was provided');
            setFilled(false)
        } else {
            localStorage.setItem('userInfo', JSON.stringify(form));
            console.log(form)
            setForm({
                name: '',
                email: '',
                phoneNumber: ''
            });
            setFilled(true)
            navigate('/layout/select-plan')
        }        
    };

    return(
        <main className="w-2/3 h-full grid">
            <div className="flex flex-col gap-2 mb-5">
                <h1 className="text-3xl font-bold">Personal Info</h1>
                <p className="text-sm text-zinc-400">Please provide your name, email address, and phone number.</p>
            </div>
            {/* INPUT FIELDS */}
            <form className="flex flex-col gap-5">
                <div>
                    <div className="flex justify-between">
                        <label htmlFor="name" className="text-xs font-semibold">Name</label>
                        <div className={`text-red-500 text-xs font-bold ${filled ? 'hidden' : 'block'} ${form.name !== '' ? 'hidden' : 'block'}`}>This field is required</div>
                    </div>
                    <input
                        onFocus={() => setIsNameFocused(true)}
                        onBlur={() => setIsNameFocused(false)}
                        className={`h-10 w-full border px-4 rounded-lg outline-none ${isNameFocused === true ? 'bg-focus border-focus' : ''}`}
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Stephen King"
                    />
                </div>

                <div>
                    <div className="flex justify-between">
                        <label htmlFor="name" className="text-xs font-semibold">Email address</label>
                        <div className={`text-red-500 text-xs font-bold ${filled ? 'hidden' : 'block'} ${form.email !== '' ? 'hidden' : 'block'}`}>This field is required</div>
                    </div>
                    <input
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={() => setIsEmailFocused(false)}
                        className={`h-10 w-full border px-4 rounded-lg outline-none ${isEmailFocused === true ? 'bg-focus border-focus' : ''}`}
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. StephenKing@lorem.com"
                    />
                </div>

                <div>
                    <div className="flex justify-between">
                        <label htmlFor="name" className="text-xs font-semibold">Phone Number</label>
                        <div className={`text-red-500 text-xs font-bold ${filled ? 'hidden' : 'block'} ${form.phoneNumber !== '' ? 'hidden' : 'block'}`}>This field is required</div>
                    </div>
                    <input
                        onFocus={() => setIsNumFocused(true)}
                        onBlur={() => setIsNumFocused(false)}
                        className={`h-10 w-full border px-4 rounded-lg outline-none ${isNumFocused === true ? 'bg-focus border-focus' : ''}`}
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                        placeholder="e.g. +1 234 567 890"
                    />
                </div>
            </form>
            {/* BUTTON */}
            <div className="flex justify-end items-end">
                <button 
                onClick={ handleFormSubmit }
                className="p-3 bg-button rounded-md text-zinc-100 font-bold hover:bg-hover transition-all">Next Step</button>
            </div>
        </main>
    );

}

export default YourInfo