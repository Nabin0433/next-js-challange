import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import ProjectModel from "../components/Project.model";
import { AiFillFolderOpen } from "react-icons/ai";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>30-Days-Challange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-white shadow flex justify-center items-center py-4">
        <h2 className="text-2xl font-bold"> Next.js-Challange: 30-Days</h2>
      </header>
      <main>
        <div className="flex flex-col justify-center items-center mt-16 space-y-10 px-8">
          {ProjectModel.map((item, index) => (
            <div
              key={index}
              className="md:flex cursor-pointer items-center justify-start space-x-8 md:space-x-16 shadow-lg hover:shadow-2xl px-8 md:px-20 py-8 rounded-3xl w-full md:w-1/2 group"
              onClick={() => router.push(item.link)}
            >
              <p className="group-hover:text-yellow-500">
                <AiFillFolderOpen size={200} />
              </p>
              <div className="space-y-4 capitalize">
                <h2 className="font-bold text-xl md:text-3xl">{item.tittle}</h2>
                <div className="flex justify-start items-center space-x-8">
                  <p className=" inline-block rounded-full py-1 px-2 bg-gray-800 group-hover:bg-yellow-500 text-white text-xs md:text-base">
                    {item.name}
                  </p>
                  <p>-</p>
                  <p
                    className={`inline-block text-sm md:text-base rounded-full py-1 px-2 ${
                      item.tag === "Completed"
                        ? "bg-green-800 group-hover:bg-yellow-800"
                        : "bg-gray-500 group-hover:bg-yellow-600"
                    } text-white`}
                  >
                    {item.tag}
                  </p>
                </div>
                <p className="text-gray-600">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-white shadow flex justify-center items-center py-8 mt-16">
        <p>&copy;{new Date().getFullYear()}:Nabin Karki</p>
      </footer>
    </div>
  );
}
