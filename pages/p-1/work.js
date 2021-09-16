import Header from "../../components/p-1/Header";
import Head from "next/head";
import Footer from "../../components/p-1/Footer";
import WorkCard from "../../components/p-1/WorkCard";
import WorkModel from "../../components/p-1/Model/Work.model";

const work = () => {
  return (
    <div>
      <Head>
        <title>Work</title>
      </Head>
      <Header props="work" />
      <main>
        <div className="flex justify-center items-center">
          <div className="md:w-2/4 md:space-y-16 space-y-8">
            <h2 className="font-bold text-3xl mt-24 mb-14 ml-8 md:ml-0">
              Work
            </h2>
            {WorkModel.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default work;
