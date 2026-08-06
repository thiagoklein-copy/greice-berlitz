import Image from "next/image";

/* placeholder, trocar se houver autorização dos pacientes */
const AVATARS = [
  "/review-avatars/1.jpg",
  "/review-avatars/2.jpg",
  "/review-avatars/3.jpg",
  "/review-avatars/4.jpg",
  "/review-avatars/5.jpg",
] as const;

export default function ReviewAvatars() {
  return (
    <div className="flex items-center -space-x-2.5" aria-hidden="true">
      {AVATARS.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={36}
          height={36}
          className="relative h-9 w-9 rounded-full border-2 border-sand/80 object-cover shadow-sm"
          style={{ zIndex: AVATARS.length - index }}
        />
      ))}
    </div>
  );
}
