import { Play } from "../pages/playMucsic/Play";
import { useLayout } from "../context/LayoutProvider";
export const OutSite = () => {
  const { isPlay } = useLayout();
  return (
    <>
      <Play open={isPlay} />
    </>
  );
};
