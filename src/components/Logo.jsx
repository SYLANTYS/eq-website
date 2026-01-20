import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" aria-label="Home">
      <div className="flex items-center gap-x-2">
        <Image
          src="/logo-128.png" // Make sure this file exists in /public/images
          alt="Airs Audio Logo"
          width={24}
          height={24}
          className={`rounded object-contain transition-opacity duration-500`}
        />
        <p
          className={`max-h-[24px] text-white text-xl font-semibold tracking-wider transition-opacity duration-500`}
        >
          Airs Audio
        </p>
      </div>
    </Link>
  );
}
