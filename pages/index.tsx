import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl sm:text-6xl kg:text-7xl mt-10 md:mt-24 leading-none font-extrabold trackng-tight text-gray-900">
        Let's build modern websites without leaving HTML behind
      </h1>

      <div className="mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3">
        <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
          <motion.img src="/img/nextjs.svg" className="w-full h-full" />
        </div>
      </div>
    </Layout>
  );
}
