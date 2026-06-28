import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="relative">
      <div className="absolute -top-8 -left-8 h-48 w-48 rounded-full bg-sky-300/20 blur-3xl" />

      <Image
        src="/about/about.jpg"
        alt="About Deccan Enterprises"
        width={650}
        height={700}
        className="relative rounded-[36px] shadow-2xl"
      />
    </div>
  );
}