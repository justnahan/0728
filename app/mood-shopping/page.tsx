import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '心情選物 | DailyMood 每日選物',
  description: '透過三層式心情選擇，找到最適合今天的你的商品。從心情到場景到期望感受，個人化推薦剛好適合的選物。',
}

const moodOptions = [
  { emoji: '😊', name: '快樂', description: '充滿活力的美好時光', color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100' },
  { emoji: '😌', name: '放鬆', description: '想要平靜舒緩的片刻', color: 'bg-blue-50 border-blue-200 hover:bg-blue-100' },
  { emoji: '💪', name: '充實', description: '積極向上充滿動力', color: 'bg-green-50 border-green-200 hover:bg-green-100' },
  { emoji: '🌙', name: '療癒', description: '需要溫柔被照顧的感覺', color: 'bg-purple-50 border-purple-200 hover:bg-purple-100' },
  { emoji: '☔', name: '陰鬱', description: '心情低落需要陪伴', color: 'bg-gray-50 border-gray-200 hover:bg-gray-100' },
  { emoji: '✨', name: '驚喜', description: '想要一些新鮮有趣的事物', color: 'bg-pink-50 border-pink-200 hover:bg-pink-100' },
]

const sceneOptions = [
  { icon: '🏠', name: '在家', description: '舒適的居家時光' },
  { icon: '🚌', name: '通勤', description: '移動中的零碎時間' },
  { icon: '💼', name: '工作', description: '辦公或學習環境' },
  { icon: '💕', name: '約會', description: '與重要的人相處' },
  { icon: '🌸', name: '獨處', description: '一個人的靜謐時光' },
]

const feelingOptions = [
  { name: '放鬆', description: '讓緊繃的身心得到舒緩', color: 'bg-blue-100' },
  { name: '療癒', description: '溫柔地被治癒與陪伴', color: 'bg-purple-100' },
  { name: '提神', description: '注入活力與專注力', color: 'bg-green-100' },
  { name: '溫暖', description: '感受到被關愛的溫度', color: 'bg-orange-100' },
  { name: '驚喜', description: '帶來意想不到的小確幸', color: 'bg-pink-100' },
]

export default function MoodShoppingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-b from-secondary/20 to-background">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              讓我們了解今天的你
            </h1>
            <p className="text-xl text-muted-foreground">
              透過三個簡單的步驟，找到最適合現在心情的商品
            </p>
          </div>
        </div>
      </section>

      {/* Step 1: Mood Selection */}
      <section className="section-spacing">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
                步驟 1 / 3
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-4">現在的你是什麼心情呢？</h2>
              <p className="text-muted-foreground">選擇最貼近你此刻感受的心情狀態</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moodOptions.map((mood) => (
                <Card key={mood.name} className={`cursor-pointer transition-all duration-200 hover:-translate-y-2 hover:shadow-lg ${mood.color}`}>
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-4">{mood.emoji}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{mood.name}</h3>
                    <p className="text-sm text-muted-foreground">{mood.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Scene Selection */}
      <section className="section-spacing bg-secondary/20">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
                步驟 2 / 3
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-4">你現在在什麼場景呢？</h2>
              <p className="text-muted-foreground">告訴我們你所處的環境或情境</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {sceneOptions.map((scene) => (
                <Card key={scene.name} className="cursor-pointer transition-all duration-200 hover:-translate-y-2 hover:shadow-md bg-card border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{scene.icon}</div>
                    <h3 className="font-semibold text-foreground mb-1">{scene.name}</h3>
                    <p className="text-xs text-muted-foreground">{scene.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Feeling Selection */}
      <section className="section-spacing">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
                步驟 3 / 3
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-4">你希望達到什麼感受？</h2>
              <p className="text-muted-foreground">選擇你想要透過商品獲得的體驗</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {feelingOptions.map((feeling) => (
                <Card key={feeling.name} className={`cursor-pointer transition-all duration-200 hover:-translate-y-2 hover:shadow-md ${feeling.color} border-0`}>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-foreground mb-2">{feeling.name}</h3>
                    <p className="text-sm text-foreground/80">{feeling.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="mood-button text-lg px-12 py-4">
                <Heart className="mr-2 h-5 w-5" />
                為我推薦商品
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-spacing bg-gradient-to-r from-secondary/30 to-accent/20">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">個人化推薦如何運作？</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="font-semibold mb-2">理解情緒</h3>
                <p className="text-sm text-muted-foreground">深度分析你的心情狀態和需求</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">精準匹配</h3>
                <p className="text-sm text-muted-foreground">根據情境和感受篩選合適商品</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-semibold mb-2">溫柔推薦</h3>
                <p className="text-sm text-muted-foreground">提供最適合今天的你的選物</p>
              </div>
            </div>
            <Link href="/products">
              <Button variant="outline" size="lg" className="group">
                直接瀏覽所有商品
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}