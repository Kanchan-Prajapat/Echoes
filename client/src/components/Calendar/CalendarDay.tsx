import {
    isSameDay,
    isSameMonth,
    isToday,
} from "date-fns";
import { Echo } from "@/types/echo";

interface Props {
    date: Date;
    currentMonth: Date;
    selectedDate: Date;
    echoes: Echo[];
    onSelect: (date: Date) => void;
}

export default function CalendarDay({
    date,
    currentMonth,
    selectedDate,
    echoes,
    onSelect,
}: Props) {
    const selected = isSameDay(
        date,
        selectedDate
    );

    const today = isToday(date);

    const current = isSameMonth(
        date,
        currentMonth
    );

    const memories = echoes.filter((echo) =>
        isSameDay(
            new Date(echo.date),
            date
        )
    );

    const favorite = memories.some(
        (e) => e.favorite
    );

    const previews = memories
        .slice(0, 3)
        .map((echo) => {

            return (
                echo.media.find(
                    (m) => m.id === echo.coverMediaId
                ) ?? echo.media[0]

            );

        });

    return (
        <button
            onClick={() => onSelect(date)}
            className={` relative flex aspect-square items-center justify-center rounded-2xl transition-all duration-200 hover:scale-105 `} >
            {/* Selected Background */}

            {selected && (
                <div
                    className="  absolute  inset-1  rounded-2xl  bg-violet-600  shadow-lg"      />
            )}

            {/* Today Ring */}

            {today && !selected && (
                <div
                    className="  absolute  inset-1  rounded-2xl  border-2  border-violet-500"      />
            )}

            {/* Date */}

            <span
                className={` relative z-10 text-sm font-semibold
          ${selected
                        ? "text-white"
                        : current
                            ? "text-gray-800"
                            : "text-gray-300"
                    }
        `}
            >
                {date.getDate()}
            </span>

            {/* Memory Dot (Coming Later) */}

            <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2">

                {previews.map((media, index) => (

                    <div
                        key={index}
                        className="-ml-1 first:ml-0"
                    >

                        {media?.type === "image" ? (

                            <img
                                src={media.url}
                                className=" h-4 w-4 rounded-full border border-purple-500 object-cover shadow" />
                        ) : (
                            <div
                                className=" flex h-4 w-4 items-center justify-center rounded-full border border-purple-500 bg-violet-600
         text-[7px]  text-white"  >
                                ▶
                            </div>
                        )}
                    </div>
                ))}

                {favorite && (

                    <div
                        className=" absolute -right-1 -top-1 h-2 w-2 rounded-full bg-yellow-400 ring-1 ring-white"     />
                )}

            </div>

        </button>
    );
}