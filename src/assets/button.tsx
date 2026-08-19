interface Props {
  color?: string
  buttontext: string
  onClick?: () => void
}

export function Button({
  color = "",
  buttontext,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6
        py-3
        rounded-lg
        bg-violet-600
        text-white
        font-semibold

        hover:bg-violet-700
        hover:-translate-y-0.5

        transition
        duration-200

        cursor-pointer

        ${color}
      `}
    >
      {buttontext}
    </button>
  )
}