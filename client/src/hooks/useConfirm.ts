import { useConfirmStore } from "@/store/confirmStore";

export default function useConfirm() {

  const showConfirm = useConfirmStore(
    (state) => state.showConfirm
  );

  return {

    confirm: showConfirm,

  };

}