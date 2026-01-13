import { useState } from "react"
import { IconPlayerPlay } from "@tabler/icons-react"
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { InnerPageNavigation } from "@/components/inner-page-navigation"

const learnNowItems = [
    {
        title: "Cardiac Imaging Fundamentals",
        shortDesc: "Master heart ultrasound basics",
        fullDesc: "This comprehensive module covers the fundamental principles of cardiac ultrasound imaging, including chamber views, valve assessment, and basic measurements.",
    },
    {
        title: "Musculoskeletal Scanning",
        shortDesc: "Joint and soft tissue imaging",
        fullDesc: "Learn advanced techniques for scanning joints, tendons, ligaments, and muscles. This module includes practical tips for common MSK conditions.",
    },
    {
        title: "Obstetric Ultrasound",
        shortDesc: "Prenatal imaging techniques",
        fullDesc: "Master the essential skills for obstetric ultrasound including fetal biometry, anatomy survey, and assessment of fetal well-being throughout pregnancy.",
    },
]

export default function LearningCommunityPage() {
    const [selectedLearnNow, setSelectedLearnNow] = useState<number | null>(null)
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <InnerPageNavigation />
            {/* Learn now section at the top */}
            <Card className="@container/card custom-card-outline">
                <CardHeader>
                    <CardDescription>Learn now</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {learnNowItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedLearnNow(index)}
                                className="border rounded-lg p-4 cursor-pointer hover:bg-accent/50 transition-colors space-y-3"
                            >
                                <div className="relative aspect-video bg-muted rounded-md flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                                    <IconPlayerPlay className="size-8 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">{item.title}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{item.shortDesc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            {/* Modal for Learn now */}
            <Dialog open={selectedLearnNow !== null} onOpenChange={() => setSelectedLearnNow(null)}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>{selectedLearnNow !== null && learnNowItems[selectedLearnNow].title}</DialogTitle>
                        <DialogDescription>
                            {selectedLearnNow !== null && learnNowItems[selectedLearnNow].fullDesc}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden mt-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                        <IconPlayerPlay className="size-16 text-muted-foreground" />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
