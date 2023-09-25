import BelajarNavbar from "@/components/belajar-navbar";

const BelajarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <BelajarNavbar />
      {children}
    </div>
  );
};

export default BelajarLayout;
