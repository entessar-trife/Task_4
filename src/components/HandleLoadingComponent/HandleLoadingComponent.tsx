import { useState, useEffect } from "react";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import AOS from "aos";

export default function HandleLoadingComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        AOS.init();
        AOS.refresh();
      }, 2000);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  return (
    <>
      {loading ? <LoaderComponent /> : <div></div>}
    </>
  );
}