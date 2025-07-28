import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '生活靈感 | DailyMood 每日選物',
  description: '探索生活美學與情緒照護的靈感內容，學習如何將美好事物融入日常生活。',
}

export default function LifestylePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="section-spacing">
        <div className="page-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">生活靈感</h1>
            <p className="text-xl text-muted-foreground">
              探索美好生活的無限可能
            </p>
          </div>
          
          <Card className="mood-card">
            <CardContent className="p-12 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-4">內容準備中</h2>
              <p className="text-muted-foreground">
                我們正在為您準備精彩的生活美學內容，敬請期待！
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}