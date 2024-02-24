import Image from "next/image";

export default function SearchFilter() {
  return (
    <div>
      <Image
        src="/images/Peerlist Icons.png"
        alt="search-icon"
        width={16}
        height={16}
      />
      <input
        type="text"
        width={124}
        height={20}
        placeholder="Search candidates"
      />
    </div>
  );
}
