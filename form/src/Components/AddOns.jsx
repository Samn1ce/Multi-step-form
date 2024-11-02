import { useState } from "react";

function AddOns() {

    const [addOns, setAddOns] = useState([
        {
            id: 1,
            title: 'Online Service',
            service: 'Access to multiplayer games',
            price: '1/mo'
        },
        {
            id: 2,
            title: 'Larger Storage',
            service: 'Extra 1TB of cloud storage',
            price: '2/mo'
        },
        {
            id: 3,
            title: 'Customizable Profile',
            service: 'Customize theme on your profile',
            price: '2/mo'
        },
    ]);

    const [isChecked, setIsChecked] = useState(false)

    return (
        <main className="w-2/3 h-full flex flex-col justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Pick add-ons</h1>
                <p className="text-sm text-zinc-400">Add-ons helps enhance your gaming experience.</p>
            </div>
            {/* ADD-ONS */}
            <div className="w-full flex flex-col gap-4 mb-5">
                {/*  */}
                {addOns.map((a, index) => (
                    <div 
                        key={a.id}
                        className="w-full border flex justify-between items-center py-3 px-5 rounded-lg hover:border-focus cursor-pointer"
                    >
                        <input type="checkbox" />
                        <div>
                            <h5 className="font-bold text-indigo-800">{a.title}</h5>
                            <p className="text-xs text-gray-400 font-bold">{a.service}</p>
                        </div>
                        <p className="text-xs text-purple">+${a.price}</p>
                    </div>
                ))}
            </div>
            {/* BUTTON */}
            <div className="flex justify-between items-baseline">
                <button className="p-3 text-button rounded-md font-bold hover:bg-hover transition-all">Go Back</button>
                <button className="p-3 bg-button rounded-md text-zinc-100 font-bold hover:bg-hover transition-all">Next Step</button>
            </div>
        </main>
    );

}

export default AddOns