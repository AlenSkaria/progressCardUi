import { useState } from "react";
import { motion } from "framer-motion";
import DoneIcon from "@mui/icons-material/Done";
export default function Main() {
  let [step, setStep] = useState(1);

  return (
    <div className="flex min-h-screen items-start bg-blue-100">
      <div className="shadow-lg mx-auto w-full max-w-md h-full my-auto rounded-2xl bg-white">
        <div className="flex justify-between rounded p-8">
          <Step step={1} currentStep={step} />
          <Step step={2} currentStep={step} />
          <Step step={3} currentStep={step} />
          <Step step={4} currentStep={step} />
        </div>
        <div className="px-8 pb-8">
          <div>
            <div className="mt-2 h-6 w-40 rounded bg-slate-100" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-5/6 rounded bg-slate-100" />
              <div className="h-4 rounded bg-slate-100" />
              <div className="h-4 w-3/6 rounded bg-slate-100" />
            </div>
          </div>

          <div className="mt-10 flex justify-between">
            <button
              onClick={() => setStep(step < 2 ? step : step - 1)}
              className="rounded px-2 py-1 text-slate-400 hover:text-slate-700"
            >
              Back
            </button>
            <button
              onClick={() => setStep(step > 4 ? step : step + 1)}
              className="bg flex items-center rounded-full bg-blue-500 hover:bg-blue-400 px-10 text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({ step, currentStep }) {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";
  return (
    <motion.div
      initial={false}
      transition={{ duration: 0.6 }}
      animate={{
        backgroundColor: status === "complete" ? "#3b82f6" : "#fff",
        borderColor:
          status === "complete" || status === "active" ? "#3b82f6" : "#fff",
      }}
      className={`${
        status === "active"
          ? "border-blue-500 bg-white text-blue-600"
          : status === "complete"
          ? "border-blue-500 bg-blue-300"
          : "border-slate-200 bg-white text-slate-400"
      } flex h-10 w-10 items-center justify-center rounded-full border-2`}
    >
      <div className="flex items-center justify-center ">
        {status === "complete" ? (
          <CheckIcon className="h-6 w-6 text-white" />
        ) : (
          <span>{step}</span>
        )}{" "}
      </div>
    </motion.div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.2 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12l4 4L19 7"
      />
    </svg>
  );
}
