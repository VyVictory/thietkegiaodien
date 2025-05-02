// ./components/modal/loadPage.js
import { lazy } from "react";

export function loadPage(path) {
  if (!path) return () => null;

  const importer = () =>
    import(`../modal/${path}`).catch((err) => {
      console.error(`Failed to load modal: ${path}`, err);
      return {
        default: () => (
          <div style={{ padding: 16, color: "red" }}>
            Component “{path}” not found.
          </div>
        ),
      };
    });

  return lazy(importer);
}
