"use client"

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Filter, Grid, List } from 'lucide-react'

// Types for products
interface Product {
  id: number
  name: string
  price_in_cents: number
  image_url: string
}

// Mock mood tags for demo
const getMoodTag = (id: number) => {
  const tags = ['☕ 慢活午後', '🌙 溫暖時光', '✨ 自信閃耀', '😌 放鬆片刻', '💪 活力充沛']
  return tags[id % tags.length]
}

const formatPrice = (priceInCents: number) => {
  return `NT$ ${Math.floor(priceInCents / 100)}`
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Failed to fetch products:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="section-spacing">
          <div className="page-container">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
              <p className="mt-4 text-muted-foreground">載入商品中...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="section-spacing bg-gradient-to-b from-secondary/20 to-background">
        <div className="page-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">所有商品</h1>
            <p className="text-xl text-muted-foreground">
              探索我們精心挑選的每一件商品
            </p>
          </div>
        </div>
      </section>

      {/* Filters and View Toggle */}
      <section className="border-b border-border/50">
        <div className="page-container">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                篩選
              </Button>
              <span className="text-sm text-muted-foreground">
                共 {products.length} 件商品
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-spacing">
        <div className="page-container">
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card className="mood-card overflow-hidden h-full">
                  <div className={`${viewMode === 'grid' ? 'aspect-square' : 'md:flex'} overflow-hidden`}>
                    <img 
                      src={product.image_url} 
                      alt={product.name}
                      className={`${viewMode === 'grid' ? 'w-full h-full' : 'md:w-48 w-full h-48 md:h-auto'} object-cover transition-transform duration-300 hover:scale-105`}
                    />
                  </div>
                  <CardContent className={`p-4 ${viewMode === 'list' ? 'md:flex-1 md:flex md:flex-col md:justify-between' : ''}`}>
                    <div className="mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {getMoodTag(product.id)}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                    <div className="text-lg font-bold text-primary">
                      {formatPrice(product.price_in_cents)}
                    </div>
                    {viewMode === 'list' && (
                      <div className="mt-4">
                        <Button size="sm" className="w-full md:w-auto">
                          查看詳情
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}