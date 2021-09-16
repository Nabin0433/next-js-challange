import Header from "../../components/p-1/Header";
import Head from "next/head";
import Footer from "../../components/p-1/Footer";
import Image from "next/image";
import ContactModel from "../../components/p-1/Modal/Contact.model";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <Header props="contact" />
      <main>
        <div className="md:flex justify-center items-center px-8 md:px-0">
          <div className="md:w-2/4 space-y-6">
            <h2 className="font-bold text-3xl mt-24 mb-14">Contact</h2>
            <p>{ContactModel.name}</p>
            <p>{ContactModel.address}</p>
            <p>Phone: {ContactModel.phone}</p>
            <p>Mail: {ContactModel.mail}</p>
            <p className="h-6" />
            <div className="relative w-full h-[250px] md:h-[500px] shadow-md hover:shadow-2xl">
              <Image
                className="rounded-md"
                src={ContactModel.img}
                alt={ContactModel.name}
                objectPosition="center"
                layout="fill"
                objectFit="fill"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default contact;
