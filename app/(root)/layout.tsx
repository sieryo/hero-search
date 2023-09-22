import Navbar from "@/components/navbar";

const mainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1440px] mx-auto min-h-screen pt-16">
        {children}
      </div>
    </>
  );
};

export default mainLayout;
