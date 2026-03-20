"use client"

import { Stock, formatCurrency, formatNumber } from "@/lib/nifty50-data"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown } from "lucide-react"

interface StockListProps {
  stocks: Stock[]
}

export function StockList({ stocks }: StockListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-secondary/50">
          <tr className="text-xs text-muted-foreground">
            <th className="text-left py-3 px-4 font-medium">Symbol</th>
            <th className="text-left py-3 px-4 font-medium hidden sm:table-cell">Sector</th>
            <th className="text-right py-3 px-4 font-medium">Price</th>
            <th className="text-right py-3 px-4 font-medium">Change</th>
            <th className="text-right py-3 px-4 font-medium">% Change</th>
            <th className="text-right py-3 px-4 font-medium hidden md:table-cell">Volume</th>
            <th className="text-right py-3 px-4 font-medium hidden lg:table-cell">Mkt Cap</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {stocks.map((stock, index) => (
            <tr 
              key={stock.symbol} 
              className={cn(
                "hover:bg-secondary/30 transition-colors",
                index % 2 === 0 ? "bg-card" : "bg-card/50"
              )}
            >
              <td className="py-3 px-4">
                <div>
                  <div className="font-semibold text-sm text-foreground">{stock.symbol}</div>
                  <div className="text-xs text-muted-foreground truncate max-w-[120px]">{stock.name}</div>
                </div>
              </td>
              <td className="py-3 px-4 text-xs text-muted-foreground hidden sm:table-cell">
                <span className="bg-secondary px-2 py-1 rounded-full">{stock.sector}</span>
              </td>
              <td className="py-3 px-4 text-right font-mono text-sm text-foreground">
                {formatCurrency(stock.price)}
              </td>
              <td className="py-3 px-4 text-right">
                <div className={cn(
                  "flex items-center justify-end gap-1 text-sm font-medium",
                  stock.change >= 0 ? "text-emerald-400" : "text-red-400"
                )}>
                  {stock.change >= 0 ? (
                    <TrendingUp className="h-3.5 w-3.5" />
                  ) : (
                    <TrendingDown className="h-3.5 w-3.5" />
                  )}
                  {stock.change >= 0 ? "+" : ""}{formatCurrency(stock.change)}
                </div>
              </td>
              <td className="py-3 px-4 text-right">
                <span className={cn(
                  "inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold",
                  stock.changePercent >= 0 
                    ? "bg-emerald-500/20 text-emerald-400" 
                    : "bg-red-500/20 text-red-400"
                )}>
                  {stock.changePercent >= 0 ? "+" : ""}{stock.changePercent.toFixed(2)}%
                </span>
              </td>
              <td className="py-3 px-4 text-right text-sm text-muted-foreground font-mono hidden md:table-cell">
                {formatNumber(stock.volume)}
              </td>
              <td className="py-3 px-4 text-right text-sm text-muted-foreground font-mono hidden lg:table-cell">
                ₹{(stock.marketCap / 1000).toFixed(0)}L Cr
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
