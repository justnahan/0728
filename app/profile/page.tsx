import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '會員中心 | DailyMood 每日選物',
  description: '管理您的個人資料、訂單記錄和心情偏好設定。',
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="section-spacing">
        <div className="page-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">會員中心</h1>
            <p className="text-xl text-muted-foreground">
              管理您的個人資料與偏好設定
            </p>
          </div>
          
          <Card className="mood-card">
            <CardContent className="p-12 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-4">會員功能開發中</h2>
              <p className="text-muted-foreground">
                會員系統正在建置中，敬請期待完整的個人化體驗！
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}