import { useMemo } from "react";

import { Echo } from "@/types/echo";

export default function useOnThisDay(
    echoes: Echo[]
) {

    return useMemo(() => {

        const today = new Date();

        const day = today.getDate();

        const month = today.getMonth();

        const memories = echoes.filter((echo) => {

            const d = new Date(echo.date);

            return (

                d.getDate() === day &&

                d.getMonth() === month &&

                d.getFullYear() !== today.getFullYear()

            );

        });

        memories.sort(

            (a, b) =>

                new Date(b.date).getFullYear()

                -

                new Date(a.date).getFullYear()

        );

        return memories.slice(0, 5);

    }, [echoes]);

}