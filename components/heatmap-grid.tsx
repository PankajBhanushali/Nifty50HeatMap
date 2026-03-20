"use client"

import { Stock, formatCurrency } from "@/lib/nifty50-data"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface HeatmapGridProps {
  stocks: Stock[]
}

function getColorIntensity(changePercent: number): string {
  const absChange = Math.abs(changePercent)
  
  if (changePercent > 0) {
    if (absChange >= 4) return "bg-emerald-500"
    if (absChange >= 3) return "bg-emerald-500/90"
    if (absChange >= 2) return "bg-emerald-500/75"
    if (absChange >= 1) return "bg-emerald-500/60"
    return "bg-emerald-500/40"
  } else if (changePercent < 0) {
    if (absChange >= 4) return "bg-red-500"
    if (absChange >= 3) return "bg-red-500/90"
    if (absChange >= 2) return "bg-red-500/75"
    if (absChange >= 1) return "bg-red-500/60"
    return "bg-red-500/40"
  }
  return "bg-muted"
}

function getTextColor(changePercent: number): string {
  const absChange = Math.abs(changePercent)
  if (absChange >= 1) return "text-white"
  return "text-foreground"
}

export function HeatmapGrid({ stocks }: HeatmapGridProps) {
  const [hoveredStock, setHoveredStock] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1 sm:gap-1.5">
      {stocks.map((stock) => (
        <div
          key={stock.symbol}
          className={cn(
            "relative aspect-square rounded-md p-1.5 sm:p-2 cursor-pointer transition-all duration-200",
            "flex flex-col items-center justify-center text-center",
            "hover:scale-105 hover:z-10 hover:shadow-lg hover:shadow-black/20",
            getColorIntensity(stock.changePercent),
            getTextColor(stock.changePercent)
          )}
          onMouseEnter={() => setHoveredStock(stock.symbol)}
          onMouseLeave={() => setHoveredStock(null)}
        >
          <span className="font-semibold text-[10px] sm:text-xs truncate w-full">
            {stock.symbol}
          </span>
          <span className={cn(
            "text-[10px] sm:text-xs font-medium",
            stock.changePercent >= 0 ? "text-white/90" : "text-white/90"
          )}>
            {stock.changePercent >= 0 ? "+" : ""}{stock.changePercent.toFixed(2)}%
          </span>
          
          {hoveredStock === stock.symbol && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 bg-popover border border-border rounded-lg shadow-xl z-50 text-left">
              <div className="text-xs font-semibold text-foreground truncate">{stock.name}</div>
              <div className="text-[10px] text-muted-foreground mb-2">{stock.sector}</div>
              <div className="space-y-1 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price</span>
                  <span className="text-foreground font-medium">{formatCurrency(stock.price)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Change</span>
                  <span className={cn(
                    "font-medium",
                    stock.change >= 0 ? "text-emerald-400" : "text-red-400"
                  )}>
                    {stock.change >= 0 ? "+" : ""}{formatCurrency(stock.change)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Volume</span>
                  <span className="text-foreground font-medium">{(stock.volume / 1000000).toFixed(2)}M</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-border" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
