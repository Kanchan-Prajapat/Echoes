import { useMemo } from "react";
import { format } from "date-fns";

import AppContainer from "@/styles/AppContainer";

import { useEchoStore } from "@/store/echoStore";

import {
  ProfileHeader,
  StatsGrid,
  JourneyCard,
  Achievements,
  QuickActions,
} from "@/components/Profile";

export default function ProfileView() {

  const echoes = useEchoStore(
    (state) => state.echoes
  );

  /* ---------------- Statistics ---------------- */

  const totalEchoes = echoes.length;

  const photos = echoes.reduce(
    (count, echo) =>
      count +
      echo.media.filter(
        (m) => m.type === "image"
      ).length,
    0
  );

  const videos = echoes.reduce(
    (count, echo) =>
      count +
      echo.media.filter(
        (m) => m.type === "video"
      ).length,
    0
  );

  const favorites = echoes.filter(
    (e) => e.favorite
  ).length;

  const locations = new Set(
    echoes
      .map((e) => e.location?.trim())
      .filter(Boolean)
  ).size;

  /* ---------------- Journey ---------------- */

  const sorted = useMemo(() => {

    return [...echoes].sort(

      (a, b) =>

        new Date(a.date).getTime() -

        new Date(b.date).getTime()

    );

  }, [echoes]);

  const firstMemory =
    sorted.length > 0
      ? format(
          new Date(sorted[0].date),
          "dd/MM/yyyy"
        )
      : "--";

  const latestMemory =
    sorted.length > 0
      ? format(
          new Date(
            sorted[sorted.length - 1].date
          ),
          "dd/MM/yyyy"
        )
      : "--";

  /* ---------------- Most Used Mood ---------------- */

  const favoriteMood = useMemo(() => {

    const moodMap: Record<
      string,
      number
    > = {};

    echoes.forEach((echo) => {

      moodMap[echo.mood] =
        (moodMap[echo.mood] ?? 0) + 1;

    });

    return Object.entries(moodMap)

      .sort(
        (a, b) =>
          b[1] - a[1]
      )[0]?.[0] ?? "--";

  }, [echoes]);

  /* ---------------- Most Active Month ---------------- */

  const activeMonth = useMemo(() => {

    const monthMap: Record<
      string,
      number
    > = {};

    echoes.forEach((echo) => {

      const month = format(
        new Date(echo.date),
        "MMMM yyyy"
      );

      monthMap[month] =
        (monthMap[month] ?? 0) + 1;

    });

    return Object.entries(monthMap)

      .sort(
        (a, b) =>
          b[1] - a[1]
      )[0]?.[0] ?? "--";

  }, [echoes]);

  return (

    <AppContainer className="py-8 pb-32">

      <ProfileHeader
        totalEchoes={totalEchoes}
      />

      <StatsGrid
        photos={photos}
        videos={videos}
        favorites={favorites}
        locations={locations}
      />

      <JourneyCard
        firstMemory={firstMemory}
        latestMemory={latestMemory}
        favoriteMood={favoriteMood}
        activeMonth={activeMonth}
      />

      <Achievements
        totalEchoes={totalEchoes}
        photos={photos}
        videos={videos}
        favorites={favorites}
        locations={locations}
      />

      <QuickActions

        onExport={() => {

          console.log(
            "Export Memories"
          );

        }}

        onImport={() => {

          console.log(
            "Import Backup"
          );

        }}

        onAppearance={() => {

          console.log(
            "Appearance"
          );

        }}

        onDateFormat={() => {

          console.log(
            "Date Format"
          );

        }}

        onAbout={() => {

          console.log(
            "About Echoes"
          );

        }}

      />

    </AppContainer>

  );

}