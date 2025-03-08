export type StepTrackerItem = {
  label: string;
  path: string;
  previousStepButton: string;
};

export type StepTrackerProps = {
  steps: StepTrackerItem[];
};
