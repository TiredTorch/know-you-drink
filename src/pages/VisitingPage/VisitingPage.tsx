import { Demo } from "../../components/MainCanvas/meshes/Demo/Demo";
import { WithCanvasPageLayout } from "../../layouts/WithCanvasPageLayout/WithCanvasPageLayout";

export const VisitingPage = () => {
  return (
    <WithCanvasPageLayout>
      <Demo />
      <ambientLight />
    </WithCanvasPageLayout>
  );
};
