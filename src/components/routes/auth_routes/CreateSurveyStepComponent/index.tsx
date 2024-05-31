import { useSearchParams } from "react-router-dom";
import AddSurveyQuestionComponent from "./AddSurveyQuestionComponent";
import AudienceLaunchComponent from "./AudienceLaunchComponent";
import CreateSurveyQuestionHeaderComponent from "./CreateSurveyQuestionHeaderComponent";
import SetpComponent from "./StepComponent";
const CreateSurveyStepComponent = () => {
  const [params, _setparams] = useSearchParams();
  const step_id = params.get("step_id");

  return (
    <div>
      <SetpComponent />
      {step_id === "step_1" && <CreateSurveyQuestionHeaderComponent />}
      {step_id === "step_2" && <AddSurveyQuestionComponent />}
      {step_id === "step_3" && <AudienceLaunchComponent />}
    </div>
  );
};
export default CreateSurveyStepComponent;
