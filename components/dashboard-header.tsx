"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { SortField, SortOrder, sectors } from "@/lib/nifty50-data"
import { ArrowUpDown, TrendingUp, TrendingDown, RefreshCw, Grid3X3, List } from "lucide-react"

interface DashboardHeaderProps {
  sortField: SortField
  setSortField: (field: SortField) => void
  sortOrder: SortOrder
  setSortOrder: (order: SortOrder) => void
  selectedSector: string
  setSelectedSector: (sector: string) => void
  viewMode: 'heatmap' | 'list'
  setViewMode: (mode: 'heatmap' | 'list') => void
  lastUpdated: Date
  onRefresh: () => void
}

export function DashboardHeader({
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
  selectedSector,
  setSelectedSector,
  viewMode,
  setViewMode,
  lastUpdated,
  onRefresh
}: DashboardHeaderProps) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-4">
          {/* Title Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-foreground">Nifty 50 Heatmap</h1>
                  <p className="text-xs text-muted-foreground hidden sm:block">Live market visualization</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground hidden sm:inline">
                Last updated: {mounted ? lastUpdated.toLocaleTimeString() : '--:--:--'}
              </span>
              <Button variant="ghost" size="icon" onClick={onRefresh} className="h-8 w-8">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Controls Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Sector Filter */}
            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger className="w-[140px] h-9 text-xs bg-secondary border-0">
                <SelectValue placeholder="Sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Sectors</SelectItem>
                {sectors.map(sector => (
                  <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort Field */}
            <Select value={sortField} onValueChange={(v) => setSortField(v as SortField)}>
              <SelectTrigger className="w-[130px] h-9 text-xs bg-secondary border-0">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="changePercent">% Change</SelectItem>
                <SelectItem value="change">Change (₹)</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="volume">Volume</SelectItem>
                <SelectItem value="marketCap">Market Cap</SelectItem>
                <SelectItem value="symbol">Symbol</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort Order */}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
              className="h-9 px-3 gap-1.5 text-xs"
            >
              {sortOrder === 'desc' ? (
                <>
                  <TrendingDown className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">High to Low</span>
                </>
              ) : (
                <>
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Low to High</span>
                </>
              )}
              <ArrowUpDown className="h-3 w-3 sm:hidden" />
            </Button>

            {/* View Toggle */}
            <div className="flex items-center bg-secondary rounded-lg p-0.5 ml-auto">
              <Button
                variant={viewMode === 'heatmap' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('heatmap')}
                className="h-8 px-3 text-xs"
              >
                <Grid3X3 className="h-3.5 w-3.5 sm:mr-1.5" />
                <span className="hidden sm:inline">Heatmap</span>
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="h-8 px-3 text-xs"
              >
                <List className="h-3.5 w-3.5 sm:mr-1.5" />
                <span className="hidden sm:inline">List</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
