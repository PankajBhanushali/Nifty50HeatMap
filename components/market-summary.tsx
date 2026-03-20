"use client"

import { Stock, getTopGainers, getTopLosers, formatCurrency } from "@/lib/nifty50-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, BarChart3, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

interface MarketSummaryProps {
  stocks: Stock[]
}

export function MarketSummary({ stocks }: MarketSummaryProps) {
  const gainers = getTopGainers(stocks, 5)
  const losers = getTopLosers(stocks, 5)
  
  const advancers = stocks.filter(s => s.changePercent > 0).length
  const decliners = stocks.filter(s => s.changePercent < 0).length
  const unchanged = stocks.filter(s => s.changePercent === 0).length
  
  const totalVolume = stocks.reduce((acc, s) => acc + s.volume, 0)
  const avgChange = stocks.reduce((acc, s) => acc + s.changePercent, 0) / stocks.length

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Market Overview */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Market Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Nifty 50 Avg</span>
              <span className={cn(
                "font-semibold text-sm",
                avgChange >= 0 ? "text-emerald-400" : "text-red-400"
              )}>
                {avgChange >= 0 ? "+" : ""}{avgChange.toFixed(2)}%
              </span>
            </div>
            
            <div className="h-2 bg-secondary rounded-full overflow-hidden flex">
              <div 
                className="bg-emerald-500 h-full" 
                style={{ width: `${(advancers / stocks.length) * 100}%` }}
              />
              <div 
                className="bg-gray-500 h-full" 
                style={{ width: `${(unchanged / stocks.length) * 100}%` }}
              />
              <div 
                className="bg-red-500 h-full" 
                style={{ width: `${(decliners / stocks.length) * 100}%` }}
              />
            </div>
            
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-muted-foreground">Advancers:</span>
                <span className="text-emerald-400 font-medium">{advancers}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-red-500" />
                <span className="text-muted-foreground">Decliners:</span>
                <span className="text-red-400 font-medium">{decliners}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground flex items-center gap-1.5">
                  <BarChart3 className="h-3.5 w-3.5" />
                  Total Volume
                </span>
                <span className="text-foreground font-medium">
                  {(totalVolume / 1000000).toFixed(2)}M
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Gainers */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-emerald-400 flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Top Gainers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {gainers.map((stock, index) => (
              <div key={stock.symbol} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-4">{index + 1}.</span>
                  <div>
                    <span className="text-sm font-medium text-foreground">{stock.symbol}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">{formatCurrency(stock.price)}</div>
                  <div className="text-sm font-semibold text-emerald-400">
                    +{stock.changePercent.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Losers */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-red-400 flex items-center gap-2">
            <TrendingDown className="h-4 w-4" />
            Top Losers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {losers.map((stock, index) => (
              <div key={stock.symbol} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-4">{index + 1}.</span>
                  <div>
                    <span className="text-sm font-medium text-foreground">{stock.symbol}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">{formatCurrency(stock.price)}</div>
                  <div className="text-sm font-semibold text-red-400">
                    {stock.changePercent.toFixed(2)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
