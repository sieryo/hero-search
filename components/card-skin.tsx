import Image from "next/image";

const CardSkin = () => {
  return (
    <div className="w-full min-h-full  justify-center flex">
      <div className="w-[200px] h-[300px] shadow-lg relative overflow-visible bg-[url('/bg.jpg')]">
        <Image
          src="/bruno-2.png"
          alt="bruno-skin"
          className=" z-30 object-fill left-[-70px] top-[100px] absolute scale-[230%] brightness-75"
          width={400}
          height={600}
        />
      </div>
    </div>
  );
};

export default CardSkin;
