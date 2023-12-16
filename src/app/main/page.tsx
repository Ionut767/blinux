import Image from "next/image";
import NavBar from "./navigation";
import DMImage from "@/media/blinuxdummy.jpg";

export default function Main() {
  return (
    <>
      <NavBar />
      <section className="flex items-center justify-center h-screen">
        <h1 className="sm:text-9xl text-7xl font-serif">BLinus</h1>
      </section>
      <section className="flex flex-col items-center justify-center h-screen sm:flex-row">
        <div className="w-full justify-center sm:w-1/2 p-4 text-center sm:text-left">
          <div className="w-4/5">
            <h1 className="p-5 text-3xl text-red-600 text-center">
              Customise your experience!
            </h1>
            <p>
              Deserunt commodo et sunt incididunt velit commodo ullamco laborum
              nostrud fugiat. Incididunt quis consectetur id ipsum dolor
              excepteur dolor ad. Deserunt id ex dolore quis mollit
              reprehenderit cillum. Non proident ex et irure adipisicing
              cupidatat nisi reprehenderit adipisicing nisi.
            </p>
          </div>
        </div>

        <div className="w-full justify-center sm:w-1/2 p-4 h-4/5">
          <Image
            className="w-4/5 h-auto p-5"
            src={DMImage}
            alt="Coding image test"
          />
        </div>
      </section>
    </>
  );
}
