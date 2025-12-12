import { IconTrendingUp, IconPlayerPlay } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"

export default function OverviewPage() {
    const [selectedDidYouKnow, setSelectedDidYouKnow] = useState<number | null>(null)
    const [selectedLearnNow, setSelectedLearnNow] = useState<number | null>(null)

    const didYouKnowItems = [
        {
            title: "Doppler Imaging Technique",
            shortDesc: "Learn about blood flow visualization",
            fullDesc: "Doppler ultrasound is a special technique that evaluates blood flow through blood vessels. It uses sound waves to measure the speed and direction of blood cells as they move through arteries and veins.",
        },
        {
            title: "3D Ultrasound Benefits",
            shortDesc: "Advanced imaging capabilities",
            fullDesc: "3D ultrasound technology provides detailed three-dimensional images of internal organs and structures, offering enhanced diagnostic capabilities compared to traditional 2D imaging.",
        },
    ]

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
    ]

    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 px-4 md:gap-6 md:py-6 lg:px-6">
                    {/* Main 4-column grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
                        {/* Left Area - 3 columns wide */}
                        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {/* Row 1: Two cards side by side */}
                            <Card className="@container/card">
                                <CardHeader>
                                    <CardDescription>Case of the month</CardDescription>
                                    <CardTitle className="text-2xl font-semibold">
                                        Rare ACL Tear
                                    </CardTitle>
                                    <CardAction>
                                        <Badge variant="outline">
                                            <IconTrendingUp />
                                            See image
                                        </Badge>
                                    </CardAction>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {/* Video/Image Placeholder */}
                                    <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                                        <IconPlayerPlay className="size-12 text-muted-foreground" />
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Explore this month's featured case study showing a complex ACL tear pattern with associated meniscal injury.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="@container/card">
                                <CardHeader>
                                    <CardDescription>Pending requests for collaboration</CardDescription>
                                    <CardTitle className="text-2xl font-semibold tabular-nums">
                                        12
                                    </CardTitle>
                                    <CardAction>
                                        <Badge variant="outline">
                                            <IconTrendingUp />
                                            +3
                                        </Badge>
                                    </CardAction>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Review and respond to collaboration requests
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Row 2: Did you know that? - Full-width card with clickable grid */}
                            <Card className="@container/card md:col-span-2">
                                <CardHeader>
                                    <CardDescription>Did you know that?</CardDescription>
                                    <CardTitle className="text-2xl font-semibold">
                                        Ultrasound Imaging Insights
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {didYouKnowItems.map((item, index) => (
                                            <div
                                                key={index}
                                                onClick={() => setSelectedDidYouKnow(index)}
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

                            {/* Row 3: Learn now - Full-width card with clickable grid */}
                            <Card className="@container/card md:col-span-2">
                                <CardHeader>
                                    <CardDescription>Learn now</CardDescription>
                                    <CardTitle className="text-2xl font-semibold">
                                        Advanced Training Modules
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        </div>

                        {/* Right Area - 1 column wide, full height */}
                        <Card className="@container/card lg:row-span-4">
                            <CardHeader>
                                <CardDescription>News</CardDescription>
                                <CardTitle className="text-2xl font-semibold">
                                    Latest Updates
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="border-b pb-3">
                                        <p className="font-medium text-sm">Platform Update v2.1</p>
                                        <p className="text-xs text-muted-foreground mt-1">New features released</p>
                                    </div>
                                    <div className="border-b pb-3">
                                        <p className="font-medium text-sm">Community Event</p>
                                        <p className="text-xs text-muted-foreground mt-1">Join our webinar next week</p>
                                    </div>
                                    <div className="pb-3">
                                        <p className="font-medium text-sm">Research Publication</p>
                                        <p className="text-xs text-muted-foreground mt-1">New study on imaging accuracy</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Did You Know That? Modal */}
            <Dialog open={selectedDidYouKnow !== null} onOpenChange={() => setSelectedDidYouKnow(null)}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>{selectedDidYouKnow !== null && didYouKnowItems[selectedDidYouKnow].title}</DialogTitle>
                        <DialogDescription>
                            {selectedDidYouKnow !== null && didYouKnowItems[selectedDidYouKnow].fullDesc}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden mt-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                        <IconPlayerPlay className="size-16 text-muted-foreground" />
                    </div>
                </DialogContent>
            </Dialog>

            {/* Learn Now Modal */}
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

