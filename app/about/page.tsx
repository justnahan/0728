import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: '關於我們 | DailyMood 每日選物',
  description: '了解 DailyMood 的品牌故事，我們如何透過理解情緒來提供溫柔的選物服務。',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="section-spacing">
        <div className="page-container">
          <div className="text-center mb-12">
            <Heart className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-foreground mb-4">關於 DailyMood</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              每一天，都值得被溫柔對待
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="mood-card">
              <CardContent className="p-12">
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="text-xl leading-relaxed mb-6">
                    我們相信每一天都值得被溫柔對待，每個心情都能找到「剛好適合今天的東西」。
                  </p>
                  
                  <p className="leading-relaxed mb-6">
                    DailyMood 每日選物是一個依照使用者每日心情與生活情境精選商品的療癒系電商品牌。
                    我們專注於為 20-40 歲注重生活品質的都市女性提供個人化的選物服務，
                    追求小確幸與情緒自我照顧的生活方式。
                  </p>
                  
                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">我們的核心價值</h2>
                  <ul className="space-y-2 mb-6">
                    <li><strong>溫柔陪伴</strong> - 理解每個心情狀態，提供貼心的選物建議</li>
                    <li><strong>情緒理解</strong> - 深入洞察情緒需求，匹配最適合的商品</li>
                    <li><strong>生活美學</strong> - 將美好事物自然融入日常生活</li>
                    <li><strong>個人化服務</strong> - 每個人都值得擁有專屬的選物體驗</li>
                  </ul>
                  
                  <p className="leading-relaxed">
                    透過理解你的情緒狀態和生活情境，我們為你精選最合適的商品，
                    讓購物不只是消費，更是對自己的溫柔照顧。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}