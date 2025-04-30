import React, { Suspense } from "react";
import { useLayout } from "../context/LayoutProvider";
import { loadPage } from "../components/modal/loadPage";
import { Play } from "../pages/playMucsic/Play";

export const OutSite = () => {
  const { isPlay, modal } = useLayout();
  const ModalComponent = loadPage(modal);

  return (
    <>
      {" "}
      <Play open={isPlay} />
      <Suspense fallback={null}>
        <ModalComponent open={modal} />
      </Suspense>
    </>
  );
};
