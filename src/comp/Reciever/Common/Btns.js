import cn from 'classnames';

export function IdBtn({ id }) {
  return (
    <button
      className={cn("p-2 rounded-md", {
        "bg-[#BDD9FE] text-[#217EFD]": id === "123",
        "bg-[#FFB5364A] text-[#FFB536]": id === "234",
        "bg-[#F4CEFA] text-[#DB5AEE]": id === "345",
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

