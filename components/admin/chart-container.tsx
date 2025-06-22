
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ChartContainerProps {
  title: string
  description?: string
  children: React.ReactNode
  loading?: boolean
  className?: string
}

export function ChartContainer({ 
  title, 
  description, 
  children, 
  loading = false,
  className 
}: ChartContainerProps) {
  return (
    <Card className={cn("bg-gradient-to-br from-[#1A1A1A] to-[#252529] border border-white/20", className)}>
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        {description && (
          <CardDescription className="text-[#CCCCCC]">{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="h-64 bg-gradient-to-r from-[#10141a] to-[#141921] rounded animate-pulse border border-white/10"></div>
        ) : (
          <div className="h-64">
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
