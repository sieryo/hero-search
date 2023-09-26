import Navbar from "@/components/navbar";

const mainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className="max-w-screen-2xl w-full mx-auto  pt-16 max-md:flex  max-md:items-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default mainLayout;
