import cn from 'classnames';

export function IdBtn({ id, type }) {
  return (
    <button
      className={cn("p-2 rounded-md", {
        "bg-[#BDD9FE] text-[#217EFD]": type === "Normal",
        "bg-[#FFB5364A] text-[#FFB536]": type === "Warning",
        "bg-[#F4CEFA] text-[#DB5AEE]": type === "Danger",
      })}
    >
      {id}
    </button>
  )
}

export function StatusBtn({ type }) {
  return (
    <button
      className={cn("rounded-md", {
        "bg-[#BBF3E0] text-[#868686]": type === "Normal",
        "bg-[#EBFF06] text-[#767777]": type === "Warning",
        "bg-[#F66C6C]": type === "Danger",
      })}
    >
      {type}
    </button>
  )
}

