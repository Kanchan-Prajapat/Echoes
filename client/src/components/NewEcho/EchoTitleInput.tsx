import Card from "@/styles/Card";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function EchoTitleInput({
  value,
  onChange,
}: Props) {

  return (

    <Card>

      <label
        className=" text-sm font-semibold text-gray-500">

        Title

      </label>

      <input

        value={value}

        onChange={(e)=>
          onChange(e.target.value)
        }

        placeholder="Summer Trip"

        className=" mt-3 w-full bg-transparent text-2xl font-bold outline-none" />

    </Card>

  );

}