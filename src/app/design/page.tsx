import dynamic from "next/dynamic";

const DesignPage = dynamic(() => import("@pages/DesignPage"), { ssr: false });
const Design = () => {
  return <DesignPage />;
};

export default Design;
