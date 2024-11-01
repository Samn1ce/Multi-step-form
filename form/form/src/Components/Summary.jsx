function Summary() {

    return (
        <main className="w-2/3 h-full flex flex-col justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Finishing up</h1>
                <p className="text-sm text-zinc-400">Double check everything looks OK before confirming.</p>
            </div>
            {/*  */}
            <div>
                <div className="bg-focus p-5 rounded-lg mb-3 -mt-10">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold">Arcade(Monthly)</p>
                            <p className="text-xs">change</p>
                        </div>
                        <p className="text-xs font-semibold">$9/mo</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex flex-col gap-4 font-semibold">
                        <div className="flex justify-between text-xs text-gray-400">
                            <p>Online Service</p>
                            <p>+$1/mo</p>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400">
                            <p>Online Service</p>
                            <p>+$1/mo</p>
                        </div>
                    </div>
                </div>
                {/* TOTAL */}
                <div className="flex justify-between text-xs text-gray-400 mx-5">
                    <p>Total (per month)</p>
                    <p className="text-lg text-indigo-700 font-bold">+$12/mo</p>
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

export default Summary