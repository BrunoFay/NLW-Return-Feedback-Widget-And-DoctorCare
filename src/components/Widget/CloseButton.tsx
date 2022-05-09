import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export default function CloseButton() {
  return (
    <Popover.Button
      title="close widget form button"
      className="text-zinc-400 hover:text-zinc-100 absolute top-5 right-5">
      <X weight="bold" className="w-4 h-4"/>
    </Popover.Button>
  )
}
