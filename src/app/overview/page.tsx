import { IconTrendingUp, IconPlayerPlay } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
    Card,
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

const newsItems = [
    {
        title: "Platform Update v2.1",
        desc: "New features released",
        fullDesc: "We are excited to announce Platform Update v2.1, bringing new features and improvements to enhance your ultrasound workflow and ProbeFix Dynamic integration.",
    },
    {
        title: "Community Event",
        desc: "Join our webinar next week",
        fullDesc: "Don't miss our upcoming community webinar where we discuss best practices for ultrasound monitoring and showcase ProbeFix Dynamic in action.",
    },
    {
        title: "Research Publication",
        desc: "New study on imaging accuracy",
        fullDesc: "A new research publication highlights the improved imaging accuracy achieved with ProbeFix Dynamic during continuous muscle monitoring.",
    },
    {
        title: "ProbeFix Dynamic: Now CE Certified",
        desc: "ProbeFix Dynamic receives CE mark for clinical use in Europe.",
        fullDesc: "ProbeFix Dynamic is now CE certified, ensuring compliance and safety for clinical use across Europe. This marks a significant milestone for our product.",
    },
    {
        title: "New Clinical Study: Real-Time Muscle Monitoring",
        desc: "ProbeFix Dynamic enables continuous ultrasound during rehabilitation exercises.",
        fullDesc: "A recent clinical study demonstrates how ProbeFix Dynamic enables real-time, continuous ultrasound monitoring during rehabilitation, improving patient outcomes.",
    },
    {
        title: "Feature Release: Automated Probe Position Tracking",
        desc: "Track probe position and movement with our latest software update.",
        fullDesc: "Our latest software update introduces automated probe position tracking, making it easier to document and analyze probe movement during evaluations.",
    },
    {
        title: "Case Report: Monitoring Recovery in Elite Athletes",
        desc: "ProbeFix Dynamic used for longitudinal muscle assessment in professional sports.",
        fullDesc: "Elite athletes are now using ProbeFix Dynamic for longitudinal muscle assessment, enabling precise monitoring of recovery and performance.",
    },
    {
        title: "Upcoming Workshop: Hands-On with ProbeFix Dynamic",
        desc: "Register for our live demonstration and training session.",
        fullDesc: "Sign up for our hands-on workshop to experience ProbeFix Dynamic and learn advanced ultrasound monitoring techniques from our experts.",
    },
];

export default function OverviewPage() {
    const [selectedDidYouKnow, setSelectedDidYouKnow] = useState<number | null>(null)
    const [selectedLearnNow, setSelectedLearnNow] = useState<number | null>(null)
    const [isCaseModalOpen, setIsCaseModalOpen] = useState(false)
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
    const [selectedNews, setSelectedNews] = useState<number | null>(null);

    const didYouKnowItems = [
        {
            title: "Ronaldo / Biceps Femoris injury / Week3",
            shortDesc: "26.12.2025",
            fullDesc: "Ultrasound shows clear signs of healing in the Biceps Femoris, with improved fiber alignment and reduced hypoechoic area. Mild edema remains, but recovery is progressing well and rehabilitation can continue",
            image: "/src/assets/LastAssessment1.png"
        },
        {
            title: "Marcelo / Adductor injury / Week1",
            shortDesc: "03.01.2026",
            fullDesc: "Ultrasound reveals an acute adductor strain with a visible hypoechoic area and mild fiber disruption. Localized edema is present, indicating early-stage injury, and rehabilitation should begin with cautious, low-load treatment.",
            image: "/src/assets/LastAssessment2.png"
        },
        {
            title: "Sergio Ramos / Calves injury / Week7",
            shortDesc: "05.01.2026",
            fullDesc: "Ultrasound shows advanced tissue remodeling in the calf with well-aligned fibers and minimal residual edema. The injury is nearing full recovery, and the muscle appears stable for progressive return to higher-intensity loading.",
            image: "/src/assets/LastAssessment3.png"
        },
    ]

    return (
        <div className="flex flex-1 flex-col">
            <style>{`
                .custom-card-outline {
                    border: 1.5px solid #6188C3 !important;
                    box-shadow: 0 2px 8px 0 #6188C333 !important;
                }
                .assessment-inner-card {
                    background: #fff !important;
                    border: 0.9px solid #6188C3 !important;
                    transition: box-shadow 0.2s, background 0.2s;
                }
                .assessment-inner-card:hover {
                    box-shadow: 0 0 8px 2px #6188C355 !important;
                    background: #F8FCFF !important;
                }
                .news-separator {
                    border-bottom: 1.5px solid #6188C3 !important;
                }
                .news-hover {
                    transition: box-shadow 0.2s, background 0.2s;
                }
                .news-hover:hover {
                    background: #EFF7FF !important;
                    box-shadow: 0 2px 12px 0 #6188C355 !important;
                }
                .card-hover-special {
                    transition: box-shadow 0.2s, background 0.2s;
                }
                .card-hover-special:hover {
                    box-shadow: 0 4px 24px 0 #EFF7FF !important;
                }
                .bg-assessments {
                    background: #EFF7FF !important;
                }
                .bg-assessments-header {
                    background: #EFF7FF !important;
                }
                .cardcontent-custom-radius {
                    border-bottom-left-radius: 10px !important;
                    border-bottom-right-radius: 10px !important;
                    border-top-left-radius: 10px !important;
                    border-top-right-radius: 10px !important;
                }
            `}</style>
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 px-4 md:gap-6 md:py-6 lg:px-6">
                    {/* Main 4-column grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
                        {/* Left Area - 3 columns wide */}
                        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {/* Row 1: My latest assessments - Full-width card with clickable grid */}
                            <Card className="@container/card custom-card-outline md:col-span-2">
                                <CardHeader className="bg-assessments-header rounded-t-lg cardcontent-custom-radius">
                                    <CardTitle className="text-2xl font-semibold" style={{ color: '#2D4F83' }}>My latest assessments</CardTitle>
                                </CardHeader>
                                <CardContent className="bg-assessments cardcontent-custom-radius">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {didYouKnowItems.map((item, index) => (
                                            <div
                                                key={index}
                                                onClick={() => setSelectedDidYouKnow(index)}
                                                className="assessment-inner-card border rounded-lg p-4 cursor-pointer hover:bg-accent/50 transition-colors space-y-3"
                                            >
                                                <div className="relative aspect-video bg-muted rounded-md flex items-center justify-center overflow-hidden">
                                                    {/* @ts-ignore */}
                                                    {item.image ? (
                                                        <img 
                                                            /* @ts-ignore */
                                                            src={item.image} 
                                                            alt={item.title}
                                                            className="absolute inset-0 h-full w-full object-cover"
                                                        />
                                                    ) : (
                                                        <>
                                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                                                            <IconPlayerPlay className="size-8 text-muted-foreground" />
                                                        </>
                                                    )}
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

                            {/* Row 2: Two cards side by side */}
                            <div onClick={() => setIsCaseModalOpen(true)} className="cursor-pointer transition-transform hover:scale-[1.01]">
                                <Card className="@container/card custom-card-outline card-hover-special h-full hover:bg-accent/50 transition-colors">
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

                            <div onClick={() => setIsVideoModalOpen(true)} className="cursor-pointer transition-transform hover:scale-[1.01]">
                                <Card className="@container/card custom-card-outline card-hover-special h-full hover:bg-accent/50 transition-colors">
                                    <CardHeader>
                                        <CardDescription>Did you know that</CardDescription>
                                        <CardTitle className="text-2xl font-semibold">
                                            ProbeFix Dynamic for quadriceps testing
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                                            <video 
                                                src="/src/assets/VideoUsono.mov"
                                                className="absolute inset-0 h-full w-full object-cover opacity-80"
                                                muted
                                                playsInline
                                            />
                                            <div className="absolute inset-0 bg-black/20" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-background/80 rounded-full p-3 backdrop-blur-sm">
                                                    <IconPlayerPlay className="size-8 text-foreground fill-foreground" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            The fixation enables reliable probe positioning throughout motion, making it easier to observe muscle activation and tissue behavior during functional loading.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Right Area - 1 column wide, full height */}
                        <Card className="@container/card custom-card-outline lg:row-span-4">
                            <CardHeader>
                                <CardDescription>News</CardDescription>
                                <CardTitle className="text-2xl font-semibold">
                                    Latest Updates
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {newsItems.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className={`pb-3 ${idx < newsItems.length - 1 ? 'news-separator' : ''} news-hover cursor-pointer rounded`}
                                            onClick={() => setSelectedNews(idx)}
                                        >
                                            <p className="font-medium text-sm">{item.title}</p>
                                            <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                                        </div>
                                    ))}
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

            {/* Video Modal */}
            <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>Quadriceps; Step Up with Usono ProbeFix Dynamic</DialogTitle>
                        <DialogDescription>
                            Did you know that?
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden mt-2 bg-black">
                            <video
                                src="/src/assets/VideoUsono.mov"
                                className="h-full w-full object-contain"
                                controls
                                autoPlay
                            />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            The fixation enables reliable probe positioning throughout motion, making it easier to observe muscle activation and tissue behavior during functional loading.
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
                        {selectedDidYouKnow !== null && (
                            // @ts-ignore
                            didYouKnowItems[selectedDidYouKnow].image ? (
                                <img 
                                    // @ts-ignore
                                    src={didYouKnowItems[selectedDidYouKnow].image} 
                                    alt={didYouKnowItems[selectedDidYouKnow].title}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                                    <IconPlayerPlay className="size-16 text-muted-foreground" />
                                </>
                            )
                        )}
                    </div>
                </DialogContent>
            </Dialog>

            {/* News Modal */}
            <Dialog open={selectedNews !== null} onOpenChange={() => setSelectedNews(null)}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>{selectedNews !== null && newsItems[selectedNews].title}</DialogTitle>
                        <DialogDescription>
                            {selectedNews !== null && newsItems[selectedNews].desc}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                            {selectedNews !== null && newsItems[selectedNews].fullDesc}
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

