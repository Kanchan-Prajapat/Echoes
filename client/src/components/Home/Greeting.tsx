import { Sparkles } from "lucide-react";

export default function Greeting() {

    const hour = new Date().getHours();

    let greeting = "Good Evening";
    let emoji = "🌙";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
        emoji = "☀️";
    }

    if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
        emoji = "🌤";
    }

    if (hour >= 17 && hour < 21) {
        greeting = "Good Evening";
        emoji = "🌇";
    }

    if (hour >= 21 || hour < 5) {
        greeting = "Good Night";
        emoji = "🌙";
    }

    return (

        <div className="mb-8">

            <p className="flex items-center gap-2 text-gray-500">

                <Sparkles
                    size={18}
                    className="text-violet-500"
                />

                {greeting} {emoji}

            </p>

            <h1 className="mt-2 text-5xl font-black tracking-tight">

                Kanchan

            </h1>

        </div>

    );

}