import { useState } from "react"
import { IconPlayerPlay } from "@tabler/icons-react"
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { InnerPageNavigation } from "@/components/inner-page-navigation"
import ErikHAvatar from "@/assets/ErikH.jpeg"
import AukjeAvatar from "@/assets/Aukje.jpeg"
import RicardoAvatar from "@/assets/Ricardo.png"
import MusculoskeletalVideo from "@/assets/MusculoskeletalScanning.mov"
import VideoUsono from "@/assets/VideoUsono.mov"

const learnNowItems = [
    {
        title: "Cardiac Imaging Fundamentals",
        shortDesc: "Master heart ultrasound basics",
        fullDesc: "This comprehensive module covers the fundamental principles of cardiac ultrasound imaging, including chamber views, valve assessment, and basic measurements.",
        video: VideoUsono,
        author: {
            name: "Aukje Brekelmans",
            experience: "15 years of experience in physiotherapy",
            avatar: AukjeAvatar
        }
    },
    {
        title: "Musculoskeletal Scanning",
        shortDesc: "Joint and soft tissue imaging",
        fullDesc: "Learn advanced techniques for scanning joints, tendons, ligaments, and muscles. This module includes practical tips for common MSK conditions.",
        video: MusculoskeletalVideo,
        author: {
            name: "Dr. Erik Eurelings",
            experience: "27 years of experience in physiotherapy",
            avatar: ErikHAvatar
        }
    },
    {
        title: "Obstetric Ultrasound",
        shortDesc: "Prenatal imaging techniques",
        fullDesc: "Master the essential skills for obstetric ultrasound including fetal biometry, anatomy survey, and assessment of fetal well-being throughout pregnancy.",
        video: null,
        author: {
            name: "Dr. Ricardo Agostino",
            experience: "20 years of experience in physiotherapy",
            avatar: RicardoAvatar
        }
    },
]

const probefixUpperBodyItems = [
    {
        title: "ProbeFix on arms",
        shortDesc: "Stabilizing probe for arm imaging",
        fullDesc: "Learn how to use ProbeFix Dynamic on the arms for stable, hands-free ultrasound imaging of biceps, triceps, and forearm muscles during dynamic movements.",
        author: {
            name: "Dr. Thomas R.",
            experience: "12 years of experience in sports medicine",
            avatar: "/avatars/shadcn.jpg"
        }
    },
    {
        title: "ProbeFix on neck",
        shortDesc: "Cervical region stabilization",
        fullDesc: "Master techniques for using ProbeFix Dynamic on the neck to assess cervical muscles, blood vessels, and soft tissue structures with optimal stability.",
        author: {
            name: "Dr. Jennifer L.",
            experience: "16 years of experience in musculoskeletal imaging",
            avatar: "/avatars/shadcn.jpg"
        }
    },
    {
        title: "ProbeFix on ribs",
        shortDesc: "Thoracic and intercostal imaging",
        fullDesc: "Advanced methods for stabilizing the probe on the rib cage to evaluate intercostal muscles, pleural space, and thoracic wall structures during breathing.",
        author: {
            name: "Dr. Mark H.",
            experience: "19 years of experience in thoracic imaging",
            avatar: "/avatars/shadcn.jpg"
        }
    },
]

export default function ProbefixUpperPage() {
    const [selectedLearnNow, setSelectedLearnNow] = useState<number | null>(null)
    const [selectedUpperBody, setSelectedUpperBody] = useState<number | null>(null)
    
    return (
        <div className="flex flex-1 flex-col gap-0 p-4 pt-0">
            <style>{`
                .custom-card-outline {
                    border: 1.5px solid #6188C3 !important;
                    box-shadow: 0 2px 8px 0 #6188C333 !important;
                }
            `}</style>
            <InnerPageNavigation />
            {/* Learn now section */}
            <Card className="@container/card custom-card-outline">
                <CardHeader>
                    <CardDescription style={{ color: '#6188C3', fontWeight: 'bold' }}>Based on your latest cases:</CardDescription>
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
                                    {item.video ? (
                                        <video 
                                            src={item.video} 
                                            className="absolute inset-0 w-full h-full object-cover"
                                            muted
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                                    )}
                                    <IconPlayerPlay className="size-8 text-muted-foreground z-10" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm">{item.title}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{item.shortDesc}</p>
                                </div>
                                {/* Author section */}
                                <div className="flex items-center gap-3 pt-2 border-t">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={item.author.avatar} alt={item.author.name} />
                                        <AvatarFallback>{item.author.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="text-xs font-medium">{item.author.name}</p>
                                        <p className="text-xs text-muted-foreground">{item.author.experience}</p>
                                    </div>
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
                        {selectedLearnNow !== null && learnNowItems[selectedLearnNow].video ? (
                            <video 
                                src={learnNowItems[selectedLearnNow].video} 
                                className="w-full h-full object-cover"
                                controls
                                autoPlay
                            />
                        ) : (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                                <IconPlayerPlay className="size-16 text-muted-foreground" />
                            </>
                        )}
                    </div>
                    {/* About the author section */}
                    {selectedLearnNow !== null && (
                        <div className="mt-6 pt-6 border-t">
                            <h3 className="text-sm font-semibold mb-3">About the author:</h3>
                            <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={learnNowItems[selectedLearnNow].author.avatar} alt={learnNowItems[selectedLearnNow].author.name} />
                                    <AvatarFallback>{learnNowItems[selectedLearnNow].author.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium">{learnNowItems[selectedLearnNow].author.name}</p>
                                    <p className="text-sm text-muted-foreground">{learnNowItems[selectedLearnNow].author.experience}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            {/* ProbeFix Dynamic for upper body section */}
            <Card className="@container/card mt-4">
                <CardHeader>
                    <CardDescription>ProbeFix Dynamic for upper body</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {probefixUpperBodyItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedUpperBody(index)}
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
                                {/* Author section */}
                                <div className="flex items-center gap-3 pt-2 border-t">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={item.author.avatar} alt={item.author.name} />
                                        <AvatarFallback>{item.author.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <p className="text-xs font-medium">{item.author.name}</p>
                                        <p className="text-xs text-muted-foreground">{item.author.experience}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Modal for ProbeFix Dynamic for upper body */}
            <Dialog open={selectedUpperBody !== null} onOpenChange={() => setSelectedUpperBody(null)}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>{selectedUpperBody !== null && probefixUpperBodyItems[selectedUpperBody].title}</DialogTitle>
                        <DialogDescription>
                            {selectedUpperBody !== null && probefixUpperBodyItems[selectedUpperBody].fullDesc}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden mt-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                        <IconPlayerPlay className="size-16 text-muted-foreground" />
                    </div>
                    {/* About the author section */}
                    {selectedUpperBody !== null && (
                        <div className="mt-6 pt-6 border-t">
                            <h3 className="text-sm font-semibold mb-3">About the author:</h3>
                            <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={probefixUpperBodyItems[selectedUpperBody].author.avatar} alt={probefixUpperBodyItems[selectedUpperBody].author.name} />
                                    <AvatarFallback>{probefixUpperBodyItems[selectedUpperBody].author.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium">{probefixUpperBodyItems[selectedUpperBody].author.name}</p>
                                    <p className="text-sm text-muted-foreground">{probefixUpperBodyItems[selectedUpperBody].author.experience}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
