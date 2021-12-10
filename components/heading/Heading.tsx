interface Props {
  as: string | React.ElementType
  children: React.ReactNode
  className?: string
}
interface HComp {
  children: React.ReactNode
  className?: string
}

const Heading = ({ as: TagName = 'div', className = '', children }: Props) => {
  return <TagName className={`text-heading ${className}`}>{children}</TagName>
}

const H1 = ({ children, className = '' }: HComp) => (
  <Heading as="h1" className={`text-3xl font-extrabold ${className}`}>
    {children}
  </Heading>
)
const H2 = ({ children, className = '' }: HComp) => (
  <Heading as="h2" className={`text-2xl font-bold ${className}`}>
    {children}
  </Heading>
)
const H3 = ({ children, className = '' }: HComp) => (
  <Heading as="h3" className={`text-xl font-semibold ${className}`}>
    {children}
  </Heading>
)
const H4 = ({ children, className = '' }: HComp) => (
  <Heading as="h4" className={`text-lg font-normal ${className}`}>
    {children}
  </Heading>
)

export { H1, H2, H3, H4 }
