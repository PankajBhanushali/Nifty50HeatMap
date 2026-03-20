"use client"

export function ColorLegend() {
  return (
    <div className="flex items-center justify-center gap-6 py-3 px-4 bg-card/50 rounded-lg border border-border">
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Loss</span>
        <div className="flex gap-0.5">
          <div className="w-4 h-4 rounded-sm bg-red-500" title=">4%" />
          <div className="w-4 h-4 rounded-sm bg-red-500/75" title="2-4%" />
          <div className="w-4 h-4 rounded-sm bg-red-500/50" title="1-2%" />
          <div className="w-4 h-4 rounded-sm bg-red-500/30" title="<1%" />
        </div>
      </div>
      
      <div className="h-4 w-px bg-border" />
      
      <div className="w-4 h-4 rounded-sm bg-muted" title="No change" />
      
      <div className="h-4 w-px bg-border" />
      
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          <div className="w-4 h-4 rounded-sm bg-emerald-500/30" title="<1%" />
          <div className="w-4 h-4 rounded-sm bg-emerald-500/50" title="1-2%" />
          <div className="w-4 h-4 rounded-sm bg-emerald-500/75" title="2-4%" />
          <div className="w-4 h-4 rounded-sm bg-emerald-500" title=">4%" />
        </div>
        <span className="text-xs text-muted-foreground">Gain</span>
      </div>
    </div>
  )
}
