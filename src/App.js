import React from "react";
import ProgressIndicator from "./progress-indicator";

const progressSteps = [
  {
    label: "About to Start",
  },
  {
    label: "Started",
  },
  {
    label: "In Progress",
  },
  {
    label: "About to Complete",
  },
  {
    label: "Complete",
  },
];

const randomColorGenerator = () => {
  const aa = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return aa;
};

const progressStepsCustomColor = [
  {
    label: "About to Start",
    completefill: randomColorGenerator,
  },
  {
    label: "Started",
    completefill: randomColorGenerator,
  },
  {
    label: "In Progress",
    completefill: randomColorGenerator,
  },
  {
    label: "About to Complete",
    completefill: randomColorGenerator,
  },
  {
    label: "Complete",
    completefill: randomColorGenerator,
  },
];

const App = () => {
  return (
    <div>
      <ProgressIndicator progressSteps={progressSteps} currentStep={0} />

      <ProgressIndicator
        progressSteps={progressSteps}
        completefill={"#f0f"}
        incompleteFill={"#0f0"}
        currentStep={2}
      />

      <ProgressIndicator
        progressSteps={progressStepsCustomColor}
        currentStep={4}
      />

      <ProgressIndicator progressSteps={progressSteps} cancelled />
    </div>
  );
};

export default App;
