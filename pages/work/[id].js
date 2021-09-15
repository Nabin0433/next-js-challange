import { useRouter } from "next/dist/client/router";
import Footer from "../../components/p-1/Footer";
import Header from "../../components/p-1/Header";
import Image from "next/image";
import WorkModel from "../../components/p-1/Modal/Work.model";

const wordDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const work = WorkModel[id - 1];
  return (
    <div>
      <Header />
      <main>
        <div className="flex flex-col justify-center items-center md:mt-20 mt-8 space-y-8 md:space-y-24">
          <div className="space-y-8 md:w-2/4 px-8 md:px-0 mx-4 md:mx-0">
            <h2 className="font-bold text-3xl">{work?.heading}</h2>
            <div className="flex justify-start items-center space-x-4">
              <p className="bg-red-400 py-1 px-2 text-white font-black text-lg rounded-3xl">
                {work?.date}
              </p>
              <p className="text-gray-500 ">{work?.title}</p>
            </div>
            <p className="">{work?.about}</p>
            <div className="relative h-[200px] md:h-[500px] rounded-xl">
              {work && (
                <Image
                  className="rounded-xl hover:scale-105 transition duration-200"
                  src={work?.img}
                  alt={work?.heading}
                  layout="fill"
                  objectFit="fit"
                />
              )}
            </div>
          </div>
          {work?.details.map((i, index) => (
            <div
              className="space-y-8 md:w-2/4 px-8 mx-4 md:px-0 md:mx-0"
              key={index}
            >
              <h2 className="font-bold text-3xl">{i.title}</h2>
              <div className="flex justify-start items-center space-x-4">
                <p className="bg-red-400 py-1 px-2 text-white font-black text-lg rounded-3xl">
                  {i.date}
                </p>
                <p className="text-gray-500 ">{i.tag}</p>
              </div>
              <p className="">{i.detail}</p>
              {i?.img.map((img, index) => (
                <div
                  key={index}
                  className="relative h-[200px] md:h-[500px] rounded-xl"
                >
                  <Image
                    className="rounded-xl hover:scale-105 transition duration-200"
                    src={img}
                    alt={work?.heading}
                    layout="fill"
                    objectFit="fit"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default wordDetails;
