"use client";
import { mockApiCall } from "@/app/api";
import { loadingState } from "@/global-state";

const UploadPage = () => {
  const { isLoading, setLoading } = loadingState();

  const onUploadClick = async () => {
    try {
      setLoading(true);
      await mockApiCall();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex gap-5 flex-col justify-start pt-5 items-center">
      <h1>Upload page.</h1>
      <button
        onClick={onUploadClick}
        disabled={isLoading}
        className="p-3 bg-slate-200 "
      >
        Start Upload
      </button>
    </div>
  );
};

export default UploadPage;
