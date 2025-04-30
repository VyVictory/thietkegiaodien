import { lazy } from "react";

export function loadPage(path) {
  if (!path) { 
    return () => null;
  } 
  const importer = () =>
    import(`./${path}`)
      .catch((err) => {
        console.error(`Failed to load module /components/modal/${path}`, err);
        // fallback to a dummy component
        return { default: () => <div style={{ padding: 16, color: "red" }}>
          Component “{path}” not found.
        </div> };
      });

  return lazy(importer);
}
