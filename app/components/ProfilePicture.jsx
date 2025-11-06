// app/components/ProfilePicture.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfilePicture({ src = "/images/Mohamed Anash Profile.jpg", alt = "Profile", size = 240 }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="rounded-full overflow-hidden">
      <Image src={src} alt={alt} width={size} height={size} className="object-cover rounded-full" />
    </motion.div>
  );
}
