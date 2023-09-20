import Navbar from "@/components/navbar";

const mainLayout = ({children} : {children : React.ReactNode}) => {
    return (
      <>
        <Navbar />
        {children}
      </>
    );
}
 
export default mainLayout;