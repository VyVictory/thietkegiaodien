import React, { Suspense, useMemo } from "react";
import { useLayout } from "../context/LayoutProvider";
import { loadPage } from "../components/modal/loadPage";
import { Play } from "../pages/playMucsic/Play";

export const OutSite = () => {
  const { isPlay, modal } = useLayout();
  
  const ModalComponent = useMemo(() => loadPage(modal), [modal]);

  return (
    <>
      <Play open={isPlay} />
      {modal && (
        <Suspense fallback={null}>
          <ModalComponent open={modal} key={modal} />
        </Suspense>
      )}
    </>
  );
};
