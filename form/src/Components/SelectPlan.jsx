import { useState } from 'react';

function SelectPlan() {

    const [selected, setSelected] = useState(0);

    const [plans] = useState([
        {
            id: 1,
            icon: './assets/icon-arcade.svg',
            title: 'Arcade',
            duration: '9/mo'
        },
        {
            id: 2,
            icon: './assets/icon-advanced.svg',
            title: 'Advanced',
            duration: '12/mo'
        },
        {
            id: 3,
            icon: './assets/icon-pro.svg',
            title: 'Pro',
            duration: '15/mo'
        },
    ]);

    const [duration, setDuration] = useState(false);

    function toggleDuration() {
        if (!duration) {
            setDuration(false)
        }  else {
            setDuration(true)
        }
    }

    return (
        <main className="w-2/3 h-full flex flex-col justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Selct Your Plan</h1>
                <p className="text-sm text-zinc-400">You have the option of monthly or yearly billing.</p>
            </div>
            {/* PLANS */}
            <div className="-mt-12">
                <div className="flex justify-center items-center gap-4 mb-5">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.id}
                            onClick={() => setSelected(index)}
                            className={`w-4/12 h-36 p-4 cursor-pointer border hover:border-indigo-500 
                            ${selected === index ? 'bg-indigo-50 border-indigo-500' : 'border-gray-200'}
                            flex flex-col justify-between rounded-md transition-all`}
                        >
                            {/* Plan Icon - assuming it's an image path */}
                            <img
                                src={plan.icon}
                                alt={plan.title}
                                className="w-10 h-10"
                            />

                            {/* PLAN DETAIL */}
                            <div>
                                <h5 className="font-bold text-indigo-800">{plan.title}</h5>
                                <p className="text-xs text-gray-400 font-bold">${plan.duration}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/*  */}
                <div className="w-full py-3 flex gap-2 items-center justify-center bg-[#F8F9FE] rounded-lg text-xs font-bold">
                    <p>Monthly</p>
                    <div className="w-12 h-5 bg-button rounded-full flex gap-2 p-1">
                        <div 
                            onClick={toggleDuration}
                            className={`w-1/2 h-full bg-white rounded-full ${!duration ? 'translate-x-6' : ''}`}></div>
                        <div className="w-1/2 h-full rounded-full"></div>
                    </div>
                    <p>Yearly</p>
                </div>
            </div>
            {/* BUTTON */}
            <div className="flex justify-between items-baseline">
                <button className="p-3 text-button rounded-md font-bold hover:bg-hover transition-all">Go Back</button>
                <button className="p-3 bg-button rounded-md text-zinc-100 font-bold hover:bg-hover transition-all">Next Step</button>
            </div>
        </main>
    );

}

export default SelectPlan