import BaseModal from "./BaseModal";

type Gender =
  | "male"
  | "female"
  | "other"
  | "prefer_not_to_say";

interface GenderPickerModalProps {
  open: boolean;
  value?: Gender;
  onClose(): void;
  onChange(value: Gender): void;
}

const OPTIONS: {
  value: Gender;
  label: string;
}[] = [
  {
    value: "male",
    label: "Male",
  },
  {
    value: "female",
    label: "Female",
  },
  {
    value: "other",
    label: "Other",
  },
  {
    value: "prefer_not_to_say",
    label: "Prefer not to say",
  },
];

export default function GenderPickerModal({
  open,
  value,
  onClose,
  onChange,
}: GenderPickerModalProps) {
  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title="Select Gender"
    >
      <div className="space-y-3">
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              onChange(option.value);
              onClose();
            }}
            className={`
              w-full
              rounded-xl
              border
              px-4
              py-3
              text-left
              transition

              ${
                value === option.value
                  ? "border-violet-500 bg-violet-500/10"
                  : "border-white/10 hover:border-violet-500/40"
              }
            `}
          >
            {option.label}
          </button>
        ))}
      </div>
    </BaseModal>
  );
}