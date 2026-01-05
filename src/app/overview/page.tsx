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
    const [isCaseModalOpen, setIsCaseModalOpen] = useState(false)

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
        {
            title: "Contrast-Enhanced Ultrasound",
            shortDesc: "Improved tissue characterization",
            fullDesc: "Contrast-enhanced ultrasound uses microbubble contrast agents to improve visualization of blood flow and tissue perfusion, particularly useful in liver and cardiac imaging.",
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
        {
            title: "Obstetric Ultrasound",
            shortDesc: "Prenatal imaging techniques",
            fullDesc: "Master the essential skills for obstetric ultrasound including fetal biometry, anatomy survey, and assessment of fetal well-being throughout pregnancy.",
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
                            <div onClick={() => setIsCaseModalOpen(true)} className="cursor-pointer transition-transform hover:scale-[1.01]">
                                <Card className="@container/card h-full hover:bg-accent/50 transition-colors">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardDescription>Case of the month</CardDescription>
                                            <Badge variant="outline">
                                                <IconTrendingUp />
                                                See trending cases
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-2xl font-semibold">
                                            Muscle Fascicle Behaviour
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {/* Image */}
                                        <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                                            <img
                                                src="/src/assets/CaseOfTheMonth.png"
                                                alt="Case of the Month"
                                                className="absolute inset-0 h-full w-full object-cover"
                                            />
                                        </div>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            In November researchers successfully used our products in a study on muscle fascicle behaviour during simulated lunar gravity, part of the 88th ESA Parabolic Flight Campaign
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>

                            <Card className="@container/card">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardDescription>Pending requests for collaboration</CardDescription>
                                            <Badge variant="outline">
                                                <IconTrendingUp />
                                                +3
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-2xl font-semibold tabular-nums">
                                            12
                                        </CardTitle>
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
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

            {/* Case of the Month Modal */}
            <Dialog open={isCaseModalOpen} onOpenChange={setIsCaseModalOpen}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Muscle Fascicle Behaviour</DialogTitle>
                        <DialogDescription>
                            Case of the Month - November Study
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden mt-2">
                            <img
                                src="/src/assets/CaseOfTheMonth.png"
                                alt="Case of the Month"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
<p className="text-sm text-muted-foreground">
  In November researchers successfully used our products in a study on muscle
  fascicle behaviour during simulated lunar gravity, part of the 88th ESA
  Parabolic Flight Campaign.<br /><br />

  ProbeFix Dynamic was incredibly helpful for our Moonwalk research project and
  made the setup of the ultrasound probe during the parabolic flights both quick
  and effortless. We truly appreciated how reliable and easy to use it was.<br /><br />

  📹 Want to see the action? See the videos from ESA Television:<br />
  <a href="https://lnkd.in/ezEgrfag">https://lnkd.in/ezEgrfag</a><br />
  <a href="https://lnkd.in/eyNWVT2f">https://lnkd.in/eyNWVT2f</a>
</p>
                    </div>
                </DialogContent>
            </Dialog>

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

