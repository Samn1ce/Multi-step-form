import { useState } from "react";
import SelectPlan from "./Views/SelectPlan.jsx";
import AddOns from "./Views/AddOns.jsx";

function BillingCycle() {
    // Lifted state for duration
    const [duration, setDuration] = useState(0);

    // Toggle function for duration
    function toggleDuration() {
        setDuration((prev) => (prev + 1) % 2);
    }

    return (
        <div>
            {/* Pass duration and toggleDuration as props */}
            <SelectPlan duration={duration} toggleDuration={toggleDuration} />
            <AddOns duration={duration} />
        </div>
    );
}

export default BillingCycle;
