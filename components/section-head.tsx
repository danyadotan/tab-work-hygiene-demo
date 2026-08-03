export function SectionHead({
  index,
  label,
  title,
}: {
  index: string
  label: string
  title: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span className="tnum font-mono text-xs text-primary">{index}</span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h2 className="max-w-3xl text-balance font-serif text-3xl font-medium leading-[1.08] tracking-tight md:text-[2.75rem]">
        {title}
      </h2>
    </div>
  )
}
