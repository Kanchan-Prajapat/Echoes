import { useEchoStore } from "@/store/echoStore";

export default function QuickStats() {

    const echoes = useEchoStore(
        state => state.echoes
    );

    const photos = echoes.reduce(
        (a, e) => a + e.media.filter(
            m => m.type === "image"
        ).length,
        0
    );

    const videos = echoes.reduce(
        (a, e) => a + e.media.filter(
            m => m.type === "video"
        ).length,
        0
    );

    const favorites = echoes.filter(
        e => e.favorite
    ).length;

    const places = new Set(
        echoes.map(e => e.location)
    ).size;

    const stats = [

        {
            title: "Photos",
            value: photos,
            icon: "📷",
        },

        {
            title: "Videos",
            value: videos,
            icon: "🎥",
        },

        {
            title: "Places",
            value: places,
            icon: "📍",
        },

        {
            title: "Favorites",
            value: favorites,
            icon: "❤️",
        },

    ];

    return (

        <section className="mt-10">

            <h2 className="mb-5 text-2xl font-bold">

                Quick Stats

            </h2>

            <div className="grid grid-cols-2 gap-4">

                {stats.map(stat => (

                    <div
                        key={stat.title}
                        className="rounded-3xl bg-white p-5 shadow-md"
                    >

                        <p className="text-3xl">

                            {stat.icon}

                        </p>

                        <h3 className="mt-3 text-3xl font-black">

                            {stat.value}

                        </h3>

                        <p className="mt-1 text-gray-500">

                            {stat.title}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}