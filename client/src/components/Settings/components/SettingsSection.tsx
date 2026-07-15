import SettingsItem from "./SettingsItem";
import Toggle from "./Toggle";
interface Item {

  id: string;

  icon: React.ElementType;

  title: string;

  subtitle: string;

  arrow?: boolean;

  toggle?: boolean;

}

interface Props {

  title: string;

  items: Item[];

  toggles: Record<string, boolean>;

  onToggle: (id: string) => void;

  onItemClick: (id: string) => void;

}

export default function SettingsSection({

  title,

  items,

  toggles,

  onToggle,

  onItemClick,

}: Props) {

  return (

  <section className="mb-10">

  <h2
    className="
      mb-4
      text-xs
      font-semibold
      uppercase
      tracking-[0.15em]
      text-gray-400
    "
  >
    {title}
  </h2>

  <div className="space-y-4">

    {items.map((item) => (

      <SettingsItem

        key={item.id}

        icon={<item.icon size={20} />}

        title={item.title}

        subtitle={item.subtitle}

        right={

          item.toggle ? (

            <Toggle

              checked={toggles[item.id]}

              onChange={() =>
                onToggle(item.id)
              }

            />

          ) : undefined

        }

        onClick={() =>
          onItemClick(item.id)
        }

      />

    ))}

  </div>

</section>

  );

}