import { motion } from "framer-motion";
import { MapPin, Images, Video } from "lucide-react";

import { Echo } from "@/types/echo";
import MediaCarousel from "@/components/MediaCarousel";

interface Props {
    echo: Echo;
    onOpen: (echo: Echo) => void;
}

export default function TimelineCard({
    echo,
    onOpen,
}: Props) {
    const imageCount = echo.media.filter(
        (m) => m.type === "image"
    ).length;

    const videoCount = echo.media.filter(
        (m) => m.type === "video"
    ).length;

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: 30,
                y: 20,
                scale: 0.96,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
            }}

            viewport={{
                once: true,
            }}

            transition={{
                duration: 0.45,
                ease: "easeOut",
            }}
            whileTap={{
                scale: 0.98,
            }}
            onClick={() => onOpen(echo)}
            className=" overflow-hidden rounded-[32px] border border-white/50 bg-white/70 backdrop-blur-xl shadow-xl whileHover={{ y:-8, scale:1.02,}} hover:shadow-2xl"
        >
            <MediaCarousel
                media={echo.media}
                height="h-60"
            />

            <div className="p-5">

                <div className="flex items-center justify-between">

                    <h2 className="text-xl font-bold">

                        {echo.title}

                    </h2>

                    <div className="absolute right-5 top-5 rounded-full bg-white/80 px-3 py-2 backdrop-blur">

                        {echo.mood}

                    </div>

                </div>

                <div className="mt-3 flex items-center gap-2 text-gray-500">

                    <MapPin size={16} />

                    {echo.location || "Unknown"}

                </div>

                <div className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm">

                    {echo.date}

                </div>

                <div className="mt-4 flex gap-4 text-sm text-gray-500">

                    <div className="flex items-center gap-1">

                        <Images size={16} />

                        {imageCount}
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent whileHover={{ scale:1.08,}}" />

                    </div>

                    <div className="flex items-center gap-1">

                        <Video size={16} />

                        {videoCount}

                    </div>

                </div>

            </div>

        </motion.div>
    );
}