import Image from "next/image";
import { about } from "@/config/about";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        <Image
          src="/images/CodeCat.jpg"
          width={500}
          height={500}
          alt="Yang Kuang Ti"
        />
        <div className="mt-4 flex h-full flex-col justify-center text-left text-2xl md:mt-0">
          <h2 className="mb-4 text-4xl font-bold">關於我</h2>
          <p className="text-base lg:text-lg">{about.contect}</p>
        </div>
      </div>
    </section>
  );
}
