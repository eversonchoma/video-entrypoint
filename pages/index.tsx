import Card from "../components/Card";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl sm:text-6xl kg:text-7xl mt-10 md:mt-24 leading-none font-extrabold trackng-tight text-gray-900">
        Let's build modern websites without leaving HTML behind
      </h1>

      <div className="mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
        <Card href={"/nextjs"} imgSrc={"/img/nextjs.svg"} layoutId={"next-js-logo"} ></Card>
        <Card href={"/tailwind"} imgSrc={"/img/tailwind.svg"} layoutId={"tailwind-logo"} ></Card>
        <Card href={"/framermotion"} imgSrc={"/img/framermotion.svg"} layoutId={"framer-motion-logo"} ></Card>
      </div>
    </Layout>
  );
}
