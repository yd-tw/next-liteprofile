"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { hero } from "@/config/hero";
import CountUp from 'react-countup';

export default function HeroSection() {
  return (
    <section className="flex flex-col min-h-screen justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center sm:justify-self-start text-center sm:text-left"
        >
          <h1 className="mb-4 text-2xl font-extrabold md:text-4xl lg:text-7xl lg:leading-normal">
            <span className="bg-linear-to-r from-red-500 to-orange-600 bg-clip-text text-4xl text-transparent md:text-6xl lg:text-8xl">
              {hero.title}{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={hero.typeAnimationTexts}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-base sm:text-lg lg:text-xl">
            {hero.description}
          </p>
          <div>
            <Link
              href="#about"
              className="mr-4 inline-block w-32 rounded-full bg-linear-to-br from-orange-500 to-purple-500 px-6 py-3 text-white hover:bg-blue-600 sm:w-fit"
            >
              關於我
            </Link>
            <Link
              href="/blogs"
              className="mt-3 inline-block w-32 rounded-full bg-linear-to-br from-orange-500 to-purple-500 px-1 py-1 text-white hover:bg-blue-600 sm:w-fit"
            >
              <span className="block rounded-full bg-black px-5 py-2 hover:bg-gray-800">
                部落格
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          <div className="relative h-[250px] w-[250px] rounded-full bg-gray-800 lg:h-[400px] lg:w-[400px]">
            <Image
              src="/images/YD-logo.svg"
              alt="hero image"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              width={300}
              height={300}
              priority
            />
          </div>
        </motion.div>
      </div>
      <AchievementsSection />
    </section>
  );
}

function AchievementsSection() {
  return (
    <div className="px-4 py-8 sm:py-16 xl:gap-16 xl:px-16">
      <div className="flex flex-col items-center justify-between rounded-md px-16 py-8 sm:flex-row sm:border sm:border-gray-500">
        {hero.achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="mx-4 my-4 flex flex-col items-center justify-center sm:my-0"
          >
            <h2 className="flex flex-row text-4xl font-bold">
              {achievement.prefix}
              <span className="text-4xl font-bold">
                <CountUp end={parseInt(achievement.value)} />
              </span>
              {achievement.postfix}
            </h2>
            <p className="text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
