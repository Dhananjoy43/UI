"use client"

import Image from "next/image"
import cursorImage from "@/assets/images/cursor.png"
import messageImage from "@/assets/images/message.png"
import { motion } from "motion/react"

export const HeroDragableImages = () => {
  return (
    <>
      <motion.div
        className="absolute top-12 -left-48 hidden md:inline"
        drag
        dragSnapToOrigin
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          bounce: 0.5,
        }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src={cursorImage.src}
          height={200}
          width={200}
          alt=""
          className="max-w-none"
          draggable={false}
        />
      </motion.div>

      <motion.div
        className="absolute -top-40 -right-48 hidden md:inline"
        drag
        dragSnapToOrigin
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          bounce: 0.5,
        }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src={messageImage.src}
          height={200}
          width={200}
          alt=""
          className="max-w-none"
          draggable={false}
        />
      </motion.div>
    </>
  )
}
