import { useState } from 'react';

function SelectPlan() {

    const [isArcadeFocused, setIsArcadeFocused] = useState(false);
    const [isAdvancedFocused, setIsAdvancedFocused] = useState(false);
    const [isProFocused, setIsProFocused] = useState(false);

    function focusState() {
        if (!isArcadeFocused) {
            setIsAdvancedFocused = useState(false)
        } else {
            setIsArcadeFocused(true)
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
                <div className="w-full flex gap-4 mb-5">
                    {/* ARCADE */}
                    <div
                        onClick={focusState}
                        className={`w-4/12 h-36 p-3 cursor-pointer border hover:bg-gray-200 hover:border-focus ${isArcadeFocused ? 'bg-focus border-focus' : ''} flex flex-col justify-between rounded-md`}
                    >
                        {/* SVG */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40" height="40"
                            viewBox="0 0 40 40"
                        >
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
                                <path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z" />
                            </g>
                        </svg>
                        {/* PLAN DETAIL */}
                        <div>
                            <h5 className="font-bold text-indigo-800">Arcade</h5>
                            <p className="text-xs text-gray-400 font-bold">$9/mo</p>
                        </div>
                    </div>
                    {/* ADVANCED PLAN */}
                    <div
                        onClick={() => setIsAdvancedFocused(!isAdvancedFocused)}
                        className={`w-4/12 h-36 p-3 cursor-pointer border hover:bg-gray-200 hover:border-focus ${isAdvancedFocused ? 'bg-focus border-focus' : ''} flex flex-col justify-between rounded-md`}
                    >
                        {/* SVG */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                        >
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="20" cy="20" r="20" fill="#F9818E" />
                                <path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z" />
                            </g>
                        </svg>
                        {/* PLAN DETAIL */}
                        <div>
                            <h5 className="font-bold text-indigo-800">Advanced</h5>
                            <p className="text-xs text-gray-400 font-bold">$12/mo</p>
                        </div>
                    </div>
                    {/* PRO PLAN */}
                    <div
                        onClick={() => setIsProFocused(!isProFocused)}
                        className={`w-4/12 h-36 p-3 cursor-pointer border hover:bg-gray-200 hover:border-focus ${isProFocused ? 'bg-focus border-focus' : ''} flex flex-col justify-between rounded-md`}
                    >
                        {/* SVG */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                        >
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="20" cy="20" r="20" fill="#483EFF" />
                                <path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z" />
                            </g>
                        </svg>
                        {/* PLAN DETAIL */}
                        <div>
                            <h5 className="font-bold text-indigo-800">Pro</h5>
                            <p className="text-xs text-gray-400 font-bold">$15/mo</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="w-full py-3 flex gap-2 items-center justify-center bg-[#F8F9FE] rounded-lg text-xs font-bold">
                    <p>Monthly</p>
                    <div className="w-12 h-5 bg-button rounded-full flex gap-2 p-1">
                        <div className="w-1/2 h-full bg-white rounded-full"></div>
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