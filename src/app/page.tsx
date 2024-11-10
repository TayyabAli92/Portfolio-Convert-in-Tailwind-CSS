import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[90vh] p-5 bg-[#383636] text-[#e0e0e0]">
      <div className="flex flex-col md:flex-row bg-[#131212] justify-center [box-shadow:0px_0px_20px_wheat] text-center rounded-lg overflow-hidden max-w-[800px] w-full p-5 gap-5 animate-fadeInUp">
        <div className="flex-shrink-0">
          <Image
            className="rounded-full [box-shadow:0px_0px_10px_wheat] transition-transform duration-300 hover:scale-105"
            src="/tayyab.png"
            alt="Profile-pic"
            width={300}
            height={300}
          />
        </div>
        
        <div className="flex flex-col justify-center text-center max-w-[400px]">
          <h1 className="text-3xl text-white m-0">Hi, I&apos;m Tayyab</h1>
          <h2 className="text-2xl text-[#bb86fc] my-2">Web Developer</h2>
          <p className="text-lg leading-relaxed">
            I&apos;m a passionate web developer and 
            <br />
            Here, you can explore my expertise and creative projects.
          </p>
        </div>
      </div>
    </div>
  );
}