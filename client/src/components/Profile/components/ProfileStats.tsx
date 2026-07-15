interface Props {

  totalEchoes: number;

  favoriteEchoes: number;

  totalPhotos: number;

  totalVideos: number;

}

export default function ProfileStats({

  totalEchoes,

  favoriteEchoes,

  totalPhotos,

  totalVideos,

}: Props) {

  const stats = [

    {
      label: "Echoes",
      value: totalEchoes,
    },

    {
      label: "Favorites",
      value: favoriteEchoes,
    },

    {
      label: "Photos",
      value: totalPhotos,
    },

    {
      label: "Videos",
      value: totalVideos,
    },

  ];

  return (

    <section
      className="
        mt-6
        grid
        grid-cols-2
        gap-4
        md:grid-cols-4
      "
    >

      {stats.map((item) => (

        <div

          key={item.label}

          className="
            rounded-2xl
            bg-white
            p-6
            text-center
            shadow-sm
            transition
            hover:-translate-y-1
            hover:shadow-md
          "

        >

          <h2
            className="
              text-3xl
              font-bold
              text-violet-600
            "
          >

            {item.value}

          </h2>

          <p
            className="
              mt-2
              text-sm
              text-gray-500
            "
          >

            {item.label}

          </p>

        </div>

      ))}

    </section>

  );

}