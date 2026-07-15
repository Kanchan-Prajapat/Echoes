import { Loader2 } from "lucide-react";

interface Props {

  pull: number;

  refreshing: boolean;

}

export default function PullToRefresh({

  pull,

  refreshing,

}: Props) {

  return (

    <div
      style={{

        height: refreshing

          ? 70

          : pull,

      }}

      className="
transition-all
duration-200
flex
items-center
justify-center
overflow-hidden
"
    >

      {refreshing ? (

        <Loader2

          className="
animate-spin
text-violet-600
"

        />

      ) : (

        <p className="text-sm text-gray-500">

          {pull > 80

            ? "Release to refresh"

            : "Pull to refresh"}

        </p>

      )}

    </div>

  );

}