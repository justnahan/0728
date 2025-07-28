import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Gift, Heart, Sparkles, Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'MoodBox 訂閱 | DailyMood 每日選物',
  description: '每月為你客製化的驚喜商品盒，根據你的心情偏好和生活需求，精心挑選最適合的商品。',
}

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-b from-secondary/20 to-background">
        <div className="page-container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
              MoodBox 
              <span className="text-accent">月度訂閱</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              每個月為你量身打造的心情商品盒，讓每一次開箱都是溫柔的驚喜
            </p>
            <Button size="lg" className="mood-button text-lg px-8 py-4">
              <Gift className="mr-2 h-5 w-5" />
              立即訂閱
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-spacing">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="mood-card text-center">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">個人化選物</h3>
                <p className="text-muted-foreground">根據你的心情偏好和生活習慣，每月精心挑選 3-5 件商品</p>
              </CardContent>
            </Card>
            
            <Card className="mood-card text-center">
              <CardContent className="p-8">
                <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">驚喜體驗</h3>
                <p className="text-muted-foreground">每個月都有新發現，包含限定商品和品牌故事分享</p>
              </CardContent>
            </Card>
            
            <Card className="mood-card text-center">
              <CardContent className="p-8">
                <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">彈性管理</h3>
                <p className="text-muted-foreground">隨時調整偏好設定、暂停或取消訂閱，完全自主控制</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-spacing bg-secondary/20">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">選擇適合的訂閱方案</h2>
            <p className="text-muted-foreground">所有方案都享有免費配送和 30 天滿意保證</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="mood-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-2">月付方案</h3>
                <div className="text-3xl font-bold text-primary mb-4">NT$ 899<span className="text-sm text-muted-foreground">/月</span></div>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>✓ 每月 3-4 件精選商品</li>
                  <li>✓ 個人化推薦</li>
                  <li>✓ 免費配送</li>
                  <li>✓ 隨時取消</li>
                </ul>
                <Button variant="outline" className="w-full">選擇方案</Button>
              </CardContent>
            </Card>
            
            <Card className="mood-card border-accent border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">最受歡迎</span>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-2">季付方案</h3>
                <div className="text-3xl font-bold text-primary mb-4">NT$ 799<span className="text-sm text-muted-foreground">/月</span></div>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>✓ 每月 4-5 件精選商品</li>
                  <li>✓ 個人化推薦</li>
                  <li>✓ 免費配送</li>
                  <li>✓ 季度專屬好禮</li>
                </ul>
                <Button className="w-full mood-button">選擇方案</Button>
              </CardContent>
            </Card>
            
            <Card className="mood-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-2">年付方案</h3>
                <div className="text-3xl font-bold text-primary mb-4">NT$ 699<span className="text-sm text-muted-foreground">/月</span></div>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>✓ 每月 4-5 件精選商品</li>
                  <li>✓ 個人化推薦</li>
                  <li>✓ 免費配送</li>
                  <li>✓ 年度限定禮盒</li>
                </ul>
                <Button variant="outline" className="w-full">選擇方案</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-spacing">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">訂閱流程</h2>
            <p className="text-muted-foreground">簡單四步驟，開始你的 MoodBox 之旅</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: 1, title: '填寫偏好', desc: '完成心情偏好調查' },
              { step: 2, title: '智能配對', desc: 'AI 分析並挑選商品' },
              { step: 3, title: '包裝寄送', desc: '精美包裝直送到府' },
              { step: 4, title: '開箱驚喜', desc: '享受專屬的開箱體驗' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-accent">{item.step}</span>
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}