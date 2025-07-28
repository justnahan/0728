"use client"

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Heart, ShoppingCart, Share2 } from 'lucide-react'

interface Product {
  id: number
  name: string
  price_in_cents: number
  image_url: string
}

const getMoodTag = (id: number) => {
  const tags = ['☕ 慢活午後', '🌙 溫暖時光', '✨ 自信閃耀', '😌 放鬆片刻', '💪 活力充沛']
  return tags[id % tags.length]
}

const getMoodDescription = (id: number) => {
  const descriptions = [
    '在繁忙的下午時光，這個商品能為你帶來一刻寧靜的慢活體驗。',
    '當夜晚來臨，讓這份溫暖陪伴你度過每個需要被呵護的時刻。',
    '展現你內在的光芒，這個商品將成為你自信閃耀的最佳夥伴。',
    '在需要放鬆的片刻，它能幫你找回內心的平靜與舒適。',
    '為你的每一天注入滿滿活力，讓生活充滿正能量。'
  ]
  return descriptions[id % descriptions.length]
}

const formatPrice = (priceInCents: number) => {
  return `NT$ ${Math.floor(priceInCents / 100)}`
}

export default function ProductDetailPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    if (params.id) {
      fetch('/api/products')
        .then(res => res.json())
        .then((products: Product[]) => {
          const foundProduct = products.find(p => p.id === parseInt(params.id as string))
          setProduct(foundProduct || null)
          setLoading(false)
        })
        .catch(error => {
          console.error('Failed to fetch product:', error)
          setLoading(false)
        })
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="section-spacing">
          <div className="page-container">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
              <p className="mt-4 text-muted-foreground">載入商品資訊中...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="section-spacing">
          <div className="page-container">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground mb-4">商品不存在</h1>
              <Link href="/products">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  返回商品列表
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border/50">
        <div className="page-container">
          <Link href="/products" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回商品列表
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="section-spacing">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-xl bg-card">
              <img 
                src={product.image_url} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {getMoodTag(product.id)}
                </Badge>
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <div className="text-3xl font-bold text-primary mb-6">
                  {formatPrice(product.price_in_cents)}
                </div>
              </div>
              
              {/* Mood Description */}
              <Card className="bg-secondary/30 border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">適合心情</h3>
                  <p className="text-muted-foreground">
                    {getMoodDescription(product.id)}
                  </p>
                </CardContent>
              </Card>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="mood-button flex-1">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  加入購物車
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? 'border-accent text-accent' : ''}
                >
                  <Heart className={`mr-2 h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  {isWishlisted ? '已收藏' : '收藏'}
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="mr-2 h-5 w-5" />
                  分享
                </Button>
              </div>
              
              {/* Product Features */}
              <div className="space-y-4 pt-6">
                <h3 className="font-semibold text-foreground">商品特色</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 精心挑選的優質材料</li>
                  <li>✓ 貼合日常生活使用場景</li>
                  <li>✓ 溫和療癒的設計理念</li>
                  <li>✓ 30天滿意保證</li>
                </ul>
              </div>
              
              {/* Shipping Info */}
              <Card className="bg-muted/30">
                <CardContent className="p-4">
                  <div className="text-sm space-y-1">
                    <p className="font-medium">配送資訊</p>
                    <p className="text-muted-foreground">• 免費配送（訂單滿 NT$ 800）</p>
                    <p className="text-muted-foreground">• 1-3 個工作天到貨</p>
                    <p className="text-muted-foreground">• 支援 7-11、全家取貨</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-spacing bg-secondary/20">
        <div className="page-container">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            也適合這個心情的商品
          </h2>
          <div className="text-center">
            <p className="text-muted-foreground mb-4">正在為你尋找相似的商品...</p>
            <Link href="/products">
              <Button variant="outline">
                瀏覽更多商品
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}