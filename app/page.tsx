import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navigation } from '@/components/Navigation'
import { Heart, ArrowRight, Sparkles } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DailyMood 每日選物 | 每一天，都值得被溫柔對待',
  description: '依照每日心情與生活情境精選商品的療癒系電商品牌。找到剛好適合今天的東西，讓每個心情都被好好照顧。',
}

// Mock data for demo - in real app this would come from API
const todayRecommendations = [
  { id: 1, name: '北歐風格陶瓷馬克杯', price: 359, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&auto=format&fit=crop', mood: '☕ 慢活午後' },
  { id: 2, name: '手工編織羊毛圍巾', price: 1280, image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&auto=format&fit=crop', mood: '🌙 溫暖時光' },
  { id: 3, name: '復古圓框太陽眼鏡', price: 899, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&auto=format&fit=crop', mood: '✨ 自信閃耀' },
]

const moodQuickSelect = [
  { emoji: '😊', name: '快樂', color: 'bg-yellow-100 hover:bg-yellow-200' },
  { emoji: '😌', name: '放鬆', color: 'bg-blue-100 hover:bg-blue-200' },
  { emoji: '💪', name: '充實', color: 'bg-green-100 hover:bg-green-200' },
  { emoji: '🌙', name: '療癒', color: 'bg-purple-100 hover:bg-purple-200' },
  { emoji: '☔', name: '陰鬱', color: 'bg-gray-100 hover:bg-gray-200' },
  { emoji: '✨', name: '驚喜', color: 'bg-pink-100 hover:bg-pink-200' },
]

const popularMoods = [
  { mood: '放鬆', percentage: 32, emoji: '😌' },
  { mood: '療癒', percentage: 28, emoji: '🌙' },
  { mood: '快樂', percentage: 24, emoji: '😊' },
  { mood: '充實', percentage: 16, emoji: '💪' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-b from-background to-secondary/20">
        <div className="page-container text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
              每一天，都值得被
              <span className="text-accent">溫柔對待</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              找到剛好適合今天的東西，讓每個心情都被好好照顧
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/mood-shopping">
                <Button size="lg" className="mood-button text-lg px-8 py-4">
                  <Heart className="mr-2 h-5 w-5" />
                  開始心情選物
                </Button>
              </Link>
              <Link href="/subscription">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Sparkles className="mr-2 h-5 w-5" />
                  訂閱 MoodBox
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mood Quick Select */}
      <section className="section-spacing">
        <div className="page-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">今天是需要被溫柔對待的一天嗎？</h2>
            <p className="text-muted-foreground">選擇你現在的心情，讓我們為你找到最適合的商品</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {moodQuickSelect.map((mood) => (
              <Link key={mood.name} href={`/mood-shopping?mood=${mood.name}`}>
                <Card className={`mood-card cursor-pointer ${mood.color} border-0`}>
                  <CardContent className="p-6 text-center">
                    <div className="mood-emoji mb-2">{mood.emoji}</div>
                    <div className="font-medium text-foreground">{mood.name}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Recommendations */}
      <section className="section-spacing bg-secondary/30">
        <div className="page-container">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">今日推薦</h2>
              <p className="text-muted-foreground">根據今天的天氣和節氣為你精選</p>
            </div>
            <Link href="/products">
              <Button variant="ghost" className="group">
                看更多
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {todayRecommendations.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card className="mood-card overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="text-sm text-accent mb-2">{product.mood}</div>
                    <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                    <div className="text-lg font-bold text-primary">NT$ {product.price}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Moods */}
      <section className="section-spacing">
        <div className="page-container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">今日熱門心情</h2>
            <div className="space-y-4">
              {popularMoods.map((item, index) => (
                <div key={item.mood} className="flex items-center justify-between p-4 rounded-lg bg-card border">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="font-medium text-foreground">{item.mood}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-8">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Preview */}
      <section className="section-spacing bg-gradient-to-r from-secondary/50 to-accent/30">
        <div className="page-container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">關於 DailyMood</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              我們相信每一天都值得被溫柔對待，每個心情都能找到「剛好適合今天的東西」。
              透過理解你的情緒狀態和生活情境，為你精選最合適的商品，
              讓購物不只是消費，更是對自己的溫柔照顧。
            </p>
            <Link href="/about">
              <Button variant="outline" size="lg" className="group">
                了解更多我們的故事
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-accent mr-2" />
                <span className="text-2xl font-bold">DailyMood</span>
                <span className="ml-2 text-sm opacity-75">每日選物</span>
              </div>
              <p className="text-sm opacity-75 mb-4">
                每一天，都值得被溫柔對待
              </p>
              <p className="text-xs opacity-60">
                讓每個心情都被好好照顧
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">快速連結</h3>
              <div className="space-y-2 text-sm opacity-75">
                <Link href="/mood-shopping" className="block hover:opacity-100 transition-opacity">心情選物</Link>
                <Link href="/subscription" className="block hover:opacity-100 transition-opacity">MoodBox訂閱</Link>
                <Link href="/lifestyle" className="block hover:opacity-100 transition-opacity">生活靈感</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">客戶服務</h3>
              <div className="space-y-2 text-sm opacity-75">
                <p>客服時間：週一至週五 9:00-18:00</p>
                <p>Email: hello@dailymood.com</p>
                <p>LINE: @dailymood</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-xs opacity-60">
            <p>&copy; 2024 DailyMood 每日選物. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
