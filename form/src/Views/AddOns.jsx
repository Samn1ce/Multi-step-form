import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddOns() {
  const navigate = useNavigate();

  const [addOns, setAddOns] = useState([
    {
      id: 1,
      title: "Online Service",
      service: "Access to multiplayer games",
      price: "1/mo",
      isChecked: false,
    },
    {
      id: 2,
      title: "Larger Storage",
      service: "Extra 1TB of cloud storage",
      price: "2/mo",
      isChecked: false,
    },
    {
      id: 3,
      title: "Customizable Profile",
      service: "Customize theme on your profile",
      price: "2/mo",
      isChecked: false,
    },
  ]);

  // Array of refs to track each div
  const divRefs = useRef([]);

  const handleCheckboxChange = (index) => {
    // Toggle the checkbox state
    setAddOns((prevAddOns) =>
      prevAddOns.map((addOn, i) =>
        i === index ? { ...addOn, isChecked: !addOn.isChecked } : addOn
      )
    );

    // Focus on the corresponding div if checked
    if (!addOns[index].isChecked) {
      divRefs.current[index].focus();
    }
  };

  function handleAddOnSubmit() {
    const selectedAddOns = addOns.filter((addOn) => addOn.isChecked);
    localStorage.setItem("selectedAddOns", JSON.stringify(selectedAddOns)); // Filter only checked add-ons
    console.log("Selected Add-Ons:", selectedAddOns); // Log selected add-ons
    navigate("/layout/summary"); // Navigate to the summary page
  }

  return (
    <main className="w-11/12 md:w-2/3 h-full flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl md:text-3xl font-bold">Pick add-ons</h1>
        <p className="text-sm text-zinc-400">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      {/* ADD-ONS */}
      <div className="w-full flex flex-col gap-4 mb-5">
        {addOns.map((a, index) => (
          <div
            key={a.id}
            ref={(el) => (divRefs.current[index] = el)} // Assign ref to each div
            tabIndex="-1" // Make div focusable
            className={`w-full border flex justify-between items-center p-2 md:py-3 md:px-5 rounded-lg hover:border-focus cursor-pointer ${
              a.isChecked ? "border-focus" : ""
            }`}
            onClick={() => handleCheckboxChange(index)}
          >
            <input
              type="checkbox"
              checked={a.isChecked}
              onChange={() => handleCheckboxChange(index)}
            />
            <div>
              <h5 className="font-bold text-indigo-800 text-sm">{a.title}</h5>
              <p className="text-xs text-gray-400 font-bold">{a.service}</p>
            </div>
            <p className="text-xs text-purple">+${a.price}</p>
          </div>
        ))}
      </div>
      {/* BUTTON */}
      <div className="flex justify-between items-baseline mt-2 md:mt-0">
        <button
          onClick={() => navigate(-1)}
          className="p-3 text-button rounded-md font-bold hover:bg-hover transition-all"
        >
          Go Back
        </button>
        <button
          onClick={handleAddOnSubmit}
          className="p-2 md:p-3 bg-button rounded-md text-zinc-100 font-bold hover:bg-hover transition-all"
        >
          Next Step
        </button>
      </div>
    </main>
  );
}

export default AddOns;
