import { useState, useEffect, type ReactNode } from "react";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import AOS from "aos";
import 'aos/dist/aos.css';

interface Props {
  children: ReactNode;
};

function HandleLoadingComponent({ children }: Props) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const handleLoad = (): void => {
      setTimeout(() => {
        setLoading(false);

        AOS.init({
          once: true,
          duration: 1000,
        });
        AOS.refresh();
      }, 2700);
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
      {loading ? <LoaderComponent /> : children}
    </>
  );
};

export default HandleLoadingComponent
