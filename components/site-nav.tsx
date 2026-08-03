import { Square } from "lucide-react"

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <div className="flex items-center gap-2">
          <Square className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
          <span className="font-mono text-sm font-semibold tracking-tight">TAB</span>
        </div>
        <span className="font-mono text-xs text-muted-foreground">YC · S26 Application</span>
      </div>
    </header>
  )
}
