import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Summary() {
    const navigate = useNavigate();
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [summarySelectedPlan, setSummarySelectedPlan] = useState([])

    useEffect(() => {
        // Retrieve the add-ons from localStorage and parse them
        const savedAddOns = JSON.parse(localStorage.getItem('selectedAddOns')) ?? [];
        setSelectedAddOns(savedAddOns);

        const savedSelectedPlan = JSON.parse(localStorage.getItem('selectedPlan')) ?? [];
        setSummarySelectedPlan(savedSelectedPlan);
    }, []);

    const calculateTotal = () => {
        const planPrice = summarySelectedPlan[0]?.price
            ? parseInt(summarySelectedPlan[0].price.replace(/[^\d]/g, ''))
            : 0;
        const addOnsTotal = selectedAddOns.reduce((total, addOn) => total + parseInt(addOn.price), 0);
        return planPrice + addOnsTotal;
    };

    function handleSummaryClick() {
        navigate('/layout/thank-you');
    }

    return (
        <main className="w-2/3 h-full flex flex-col justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">Finishing up</h1>
                <p className="text-sm text-zinc-400">Double check everything looks OK before confirming.</p>
            </div>
            {/* Plan and Add-ons summary */}
            <div>
                <div className="bg-focus p-5 rounded-lg mb-3 -mt-10">
                    {summarySelectedPlan.map((plan, index) => (
                        <div 
                            key={index}
                            className="flex justify-between items-center"
                        >
                            <div>
                                <p className="font-bold">{plan.title}</p>
                                <NavLink to="/layout/select-plan" className="text-xs text-indigo-700 hover:underline">change</NavLink>
                            </div>
                            <p className="text-xs font-semibold">${plan.price}</p>
                        </div>
                    ))}
                    <hr className="my-4" />
                    <div className="flex flex-col gap-4 font-semibold">
                        {selectedAddOns.map((addOn) => (
                            <div key={addOn.id} className="flex justify-between text-xs text-gray-400">
                                <p>{addOn.title}</p>
                                <p>+${addOn.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* TOTAL */}
                <div className="flex justify-between text-xs text-gray-400 mx-5">
                    <p>Total (per month)</p>
                    <p className="text-lg text-indigo-700 font-bold">
                        +${calculateTotal()}/{summarySelectedPlan[0]?.billing === 'Yearly' ? 'yr' : 'mo'}
                    </p>
                </div>
            </div>
            {/* BUTTON */}
            <div className="flex justify-between items-baseline">
                <button onClick={() => navigate(-1)} className="p-3 text-button rounded-md font-bold hover:bg-hover transition-all">
                    Go Back
                </button>
                <button
                    onClick={handleSummaryClick}
                    className="p-3 bg-button rounded-md text-zinc-100 font-bold hover:bg-hover transition-all"
                >
                    Next Step
                </button>
            </div>
        </main>
    );
}

export default Summary;
