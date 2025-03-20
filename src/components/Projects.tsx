"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/config/project";

export default function ProjectsSection() {
  const [tag, setTag] = useState<string>("精選");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      className="p-4 my-8 rounded-xl border border-gray-300"
      id="projects"
    >
      <h2 className="my-4 text-center text-4xl font-bold text-orange-500">
        專案列表
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("精選")}
          name="精選"
          isSelected={tag === "精選"}
        />
        <ProjectTag
          onClick={() => handleTagChange("網站")}
          name="網站"
          isSelected={tag === "網站"}
        />
        <ProjectTag
          onClick={() => handleTagChange("比賽")}
          name="比賽"
          isSelected={tag === "比賽"}
        />
        <ProjectTag
          onClick={() => handleTagChange("服務")}
          name="服務"
          isSelected={tag === "服務"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              intro={project.intro}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectTag({
  name,
  onClick,
  isSelected,
}: {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}) {
  const buttonStyles = isSelected
    ? "border-orange-500"
    : "text-gray-700 dark:text-gray-300 border-orange-200 hover:border-orange-500";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-3 py-3 text-sm first-letter:cursor-pointer md:px-8 md:text-xl`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}

export function ProjectCard({
  imgUrl,
  title,
  description,
  intro,
}: {
  imgUrl: string;
  title: string;
  description: string;
  intro: string;
}) {
  return (
    <div className="rounded-b-2xl shadow-md hover:shadow-xl">
      <div className="group relative h-64 overflow-hidden rounded-t-xl">
        <Image
          src={imgUrl}
          alt={`${title} preview`}
          fill
          className="rounded-t-xl object-cover"
        />
        <div className="absolute inset-0 hidden h-full w-full items-center justify-center bg-[#181818] group-hover:flex group-hover:bg-opacity-80">
          <Link
            href={intro}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ADB7BE] hover:border-white"
          >
            <Icon
              icon="mdi:eye-outline"
              className="h-8 w-8 text-[#ADB7BE] transition-colors group-hover:text-white"
            />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl bg-orange-50 px-4 py-6">
        <h5 className="mb-2 text-xl font-semibold text-black">{title}</h5>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
