interface Props {
  children: React.ReactNode
  className?: string
}

const Card = ({ children, className }: Props) => {
  return <div className={`p-4 rounded-xl shadow ${className}`}>{children}</div>
}

export default Card
