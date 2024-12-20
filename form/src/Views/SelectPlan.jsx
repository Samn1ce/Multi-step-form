import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Plans from "../assets/Plans.json";

function SelectPlan() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(0);
  const [duration, setDuration] = useState(0);

  //   const Plans = require("../assets/Plans.json");

  function handlePlanSubmit() {
    const selectedPlan = Plans[selected];
    const billing = duration === 1 ? "Yearly" : "Monthly";
    const price = duration === 1 ? selectedPlan.yearly : selectedPlan.monthly;

    localStorage.setItem(
      "selectedPlan",
      JSON.stringify([
        {
          title: `${selectedPlan.title} (${billing})`,
          price: price,
          billing: billing,
        },
      ])
    );

    navigate("/layout/add-ons");
  }

  function toggleDuration() {
    setDuration((prev) => (prev + 1) % 2);
  }

  function goBack() {
    navigate(-1);
    const prevInfo = localStorage.getItem("form");
  }

  return (
    <main className="w-11/12 md:w-2/3 h-full flex flex-col justify-between gap-4 md:gap-0">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl md:text-3xl font-bold">Selct Your Plan</h1>
        <p className="text-sm text-zinc-400">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      {/* PLANS */}
      <div className="md:-mt-12">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 mb-5">
          {Plans.map((plan, index) => (
            <div
              key={plan.id}
              onClick={() => setSelected(index)}
              className={`h-20 md:w-4/12 ${
                duration === 1 ? "h-40" : "h-36"
              } p-4 cursor-pointer border hover:border-indigo-500 
                            ${
                              selected === index
                                ? "bg-indigo-50 border-indigo-500"
                                : "border-gray-200"
                            }
                            flex flex-row md:flex-col md:justify-between rounded-md transition-all`}
            >
              {/* Plan Icon - assuming it's an image path */}
              <img src={plan.icon} alt={plan.title} className="w-10 h-10" />

              {/* PLAN DETAIL */}
              <div>
                <h5 className="font-bold text-indigo-800">{plan.title}</h5>
                <p className="text-xs text-gray-400 font-bold">
                  ${duration === 1 ? plan.yearly : plan.monthly}
                </p>
                <p className={`text-xs ${duration === 1 ? "block" : "hidden"}`}>
                  2 Months free
                </p>
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
              className={`w-1/2 h-full bg-white rounded-full transition-all cursor-pointer ${
                duration === 1 ? "translate-x-6" : ""
              }`}
            ></div>
            <div className="w-1/2 h-full rounded-full"></div>
          </div>
          <p>Yearly</p>
        </div>
      </div>
      {/* BUTTON */}
      <div className="flex justify-between items-baseline mt-2 md:mt-0">
        <button
          onClick={goBack}
          className="p-3 text-button rounded-md font-bold hover:bg-hover transition-all"
        >
          Go Back
        </button>
        <button
          onClick={handlePlanSubmit}
          className="p-2 md:p-3 bg-button rounded-md text-zinc-100 font-bold hover:bg-hover transition-all"
        >
          Next Step
        </button>
      </div>
    </main>
  );
}

export default SelectPlan;
