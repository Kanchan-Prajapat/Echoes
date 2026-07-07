import {
  Images,
  Video,
  Heart,
  BookOpen,
} from "lucide-react";

import Section from "@/styles/Section";
import Card from "@/styles/Card";

import { Echo } from "@/types/echo";

interface Props {
  echoes: Echo[];
}

export default function QuickStats({
  echoes,
}: Props) {

  const totalEchoes =
    echoes.length;

  const totalImages =
    echoes.reduce(
      (sum, echo) =>
        sum +
        echo.media.filter(
          (m) => m.type === "image"
        ).length,
      0
    );

  const totalVideos =
    echoes.reduce(
      (sum, echo) =>
        sum +
        echo.media.filter(
          (m) => m.type === "video"
        ).length,
      0
    );

  const favorites =
    echoes.filter(
      (e) => e.favorite
    ).length;

  const stats = [

    {
      title: "Echoes",
      value: totalEchoes,
      icon: BookOpen,
    },

    {
      title: "Photos",
      value: totalImages,
      icon: Images,
    },

    {
      title: "Videos",
      value: totalVideos,
      icon: Video,
    },

    {
      title: "Favorites",
      value: favorites,
      icon: Heart,
    },

  ];

  return (

    <Section title="Your Memory Shelf">

      <div
        className="
          grid
          grid-cols-2
          gap-4
          lg:grid-cols-4
        "
      >

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <Card
              key={item.title}
              hover
            >

              <Icon
                size={22}
                className="text-violet-600"
              />

              <h2 className="mt-4 text-3xl font-bold">

                {item.value}

              </h2>

              <p className="mt-1 text-sm text-gray-500">

                {item.title}

              </p>

            </Card>

          );

        })}

      </div>

    </Section>

  );

}