
import AIWebBrowserButtons from "../Components/AIWebBrowserButtons";
import Tools from "../Components/Tools"; 

const Section3 = () => {

  // Toggle function removed since we'll use modal's native method
  return (
    <div className="flex">
      <div className="flex justify-center space-x-4">
        <AIWebBrowserButtons />
      </div>
      <Tools></Tools>
    </div>
  );
};

export default Section3;
