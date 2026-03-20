"use client"

import { useState, useEffect, useCallback } from "react"
import { nifty50Stocks, Stock, SortField, SortOrder, sortStocks, filterBySector } from "@/lib/nifty50-data"
import { DashboardHeader } from "@/components/dashboard-header"
import { HeatmapGrid } from "@/components/heatmap-grid"
import { StockList } from "@/components/stock-list"
import { MarketSummary } from "@/components/market-summary"
import { ColorLegend } from "@/components/color-legend"

function simulatePriceUpdate(stocks: Stock[]): Stock[] {
  return stocks.map(stock => {
    // Random price fluctuation between -0.5% and +0.5%
    const fluctuation = (Math.random() - 0.5) * 0.01
    const newChange = stock.change + (stock.price * fluctuation)
    const newPrice = stock.price + (stock.price * fluctuation)
    const newChangePercent = (newChange / (newPrice - newChange)) * 100
    
    return {
      ...stock,
      price: Math.max(0, newPrice),
      change: newChange,
      changePercent: newChangePercent,
      volume: stock.volume + Math.floor(Math.random() * 10000)
    }
  })
}

export default function NiftyHeatmapPage() {
  const [stocks, setStocks] = useState<Stock[]>(nifty50Stocks)
  const [sortField, setSortField] = useState<SortField>('changePercent')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
  const [selectedSector, setSelectedSector] = useState<string>('All')
  const [viewMode, setViewMode] = useState<'heatmap' | 'list'>('heatmap')
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prevStocks => simulatePriceUpdate(prevStocks))
      setLastUpdated(new Date())
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleRefresh = useCallback(() => {
    setStocks(simulatePriceUpdate(stocks))
    setLastUpdated(new Date())
  }, [stocks])

  // Filter and sort stocks
  const filteredStocks = filterBySector(stocks, selectedSector)
  const sortedStocks = sortStocks(filteredStocks, sortField, sortOrder)

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader
        sortField={sortField}
        setSortField={setSortField}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        selectedSector={selectedSector}
        setSelectedSector={setSelectedSector}
        viewMode={viewMode}
        setViewMode={setViewMode}
        lastUpdated={lastUpdated}
        onRefresh={handleRefresh}
      />

      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Market Summary Cards */}
        <MarketSummary stocks={stocks} />

        {/* Main Content Area */}
        <div className="space-y-4">
          {viewMode === 'heatmap' && <ColorLegend />}
          
          <div className="bg-card border border-border rounded-xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                {selectedSector === 'All' ? 'All Stocks' : selectedSector}
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  ({sortedStocks.length} stocks)
                </span>
              </h2>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">Live</span>
              </div>
            </div>

            {viewMode === 'heatmap' ? (
              <HeatmapGrid stocks={sortedStocks} />
            ) : (
              <StockList stocks={sortedStocks} />
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Data is simulated for demonstration purposes. Real market data would require an API integration.
          </p>
        </footer>
      </main>
    </div>
  )
}
