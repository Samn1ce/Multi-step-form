function AddOns() {

    return (
        <main className="w-2/3 h-full flex flex-col justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Pick add-ons</h1>
                <p className="text-sm text-zinc-400">Add-ons helps enhance your gaming experience.</p>
            </div>
            {/* ADD-ONS */}
            <div className="w-full flex flex-col gap-4 mb-5">
                {/*  */}
                <div className="w-full border bg-focus flex justify-between items-center py-3 px-5 rounded-lg">
                    <input type="checkbox" />
                    <div>
                        <h5 className="font-bold text-indigo-800">Online Service</h5>
                        <p className="text-xs text-gray-400 font-bold">Access to multiplayer games</p>
                    </div>
                    <p className="text-xs text-purple">+$1/mo</p>
                </div>
                <div className="w-full border bg-focus flex justify-between items-center py-3 px-5 rounded-lg">
                    <input type="checkbox" />
                    <div>
                        <h5 className="font-bold text-indigo-800">Online Service</h5>
                        <p className="text-xs text-gray-400 font-bold">Access to multiplayer games</p>
                    </div>
                    <p className="text-xs text-purple">+$1/mo</p>
                </div>
                <div className="w-full border bg-focus flex justify-between items-center py-3 px-5 rounded-lg">
                    <input type="checkbox" />
                    <div>
                        <h5 className="font-bold text-indigo-800">Online Service</h5>
                        <p className="text-xs text-gray-400 font-bold">Access to multiplayer games</p>
                    </div>
                    <p className="text-xs text-purple">+$1/mo</p>
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

export default AddOns