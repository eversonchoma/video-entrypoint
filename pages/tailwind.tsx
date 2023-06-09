import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function tailwindPage() {
  return (
    <div className="flex flex-col items-center">
      <motion.img src="/img/tailwind.svg" layoutId="tailwind-logo" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/">
          <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl houver:gb-gray-700 transition">
            Back to home
          </a>
        </Link>
      </motion.div>
    </div>
  );
}

export default tailwindPage;
