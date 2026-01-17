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
import BonesVideo from "@/assets/BonesVideo.mov"

const learnNowItems = [
    {
        title: "Ultrasound Imaging Fundamentals",
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
        title: "Bones and Fracture Assessment",
        shortDesc: "Imaging techniques for bone injuries",
        fullDesc: "Master the essential skills for assessing bone fractures and injuries using ultrasound imaging.",
        video: BonesVideo,
        author: {
            name: "Dr. Ricardo Agostino",
            experience: "20 years of experience in physiotherapy",
            avatar: RicardoAvatar
        }
    },
]

const powerDopplerItems = [
    {
        title: "PD Exercise Protocol Setup",
        shortDesc: "Setting up Power Doppler during exercise",
        fullDesc: "Learn how to properly configure Power Doppler settings and position the patient for optimal imaging during dynamic exercise movements.",
        author: {
            name: "Dr. James L.",
            experience: "18 years of experience in sports medicine",
            avatar: "/avatars/shadcn.jpg"
        }
    },
    {
        title: "Blood Flow Analysis",
        shortDesc: "Analyzing vascular response to exercise",
        fullDesc: "Master techniques for interpreting blood flow patterns and vascular changes during various exercise protocols using Power Doppler imaging.",
        author: {
            name: "Dr. Anna P.",
            experience: "22 years of experience in vascular imaging",
            avatar: "/avatars/shadcn.jpg"
        }
    },
    {
        title: "Dynamic Tissue Assessment",
        shortDesc: "Real-time tissue evaluation",
        fullDesc: "Advanced methods for assessing tissue perfusion and hemodynamic changes during exercise using Power Doppler ultrasound.",
        author: {
            name: "Dr. Michael T.",
            experience: "16 years of experience in diagnostic imaging",
            avatar: "/avatars/shadcn.jpg"
        }
    },
]

const biofeedbackItems = [
    {
        title: "Calf Raise Mechanics",
        shortDesc: "Understanding proper calf raise form",
        fullDesc: "Learn the biomechanics of calf raises and how to use ultrasound biofeedback to optimize muscle activation and movement patterns.",
        author: {
            name: "Dr. Erik Eurelings",
            experience: "27 years of experience in physiotherapy",
            avatar: ErikHAvatar
        }
    },
    {
        title: "Muscle Activation Monitoring",
        shortDesc: "Real-time muscle contraction feedback",
        fullDesc: "Techniques for using ultrasound to provide immediate biofeedback on gastrocnemius and soleus activation during calf raise exercises.",
        author: {
            name: "Dr. Lisa R.",
            experience: "14 years of experience in rehabilitation",
            avatar: "/avatars/shadcn.jpg"
        }
    },
    {
        title: "Performance Optimization",
        shortDesc: "Enhancing exercise effectiveness",
        fullDesc: "Apply ultrasound biofeedback to improve calf raise technique, prevent compensation patterns, and maximize training outcomes.",
        author: {
            name: "Dr. Robert S.",
            experience: "19 years of experience in sports therapy",
            avatar: "/avatars/shadcn.jpg"
        }
    },
]

export default function UltrasoundKnowledgePage() {
    const [selectedLearnNow, setSelectedLearnNow] = useState<number | null>(null)
    const [selectedPowerDoppler, setSelectedPowerDoppler] = useState<number | null>(null)
    const [selectedBiofeedback, setSelectedBiofeedback] = useState<number | null>(null)
    
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

            {/* Power Doppler section */}
            <Card className="@container/card mt-4">
                <CardHeader>
                    <CardDescription>Power Doppler (PD) during exercise</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {powerDopplerItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedPowerDoppler(index)}
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

            {/* Modal for Power Doppler */}
            <Dialog open={selectedPowerDoppler !== null} onOpenChange={() => setSelectedPowerDoppler(null)}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>{selectedPowerDoppler !== null && powerDopplerItems[selectedPowerDoppler].title}</DialogTitle>
                        <DialogDescription>
                            {selectedPowerDoppler !== null && powerDopplerItems[selectedPowerDoppler].fullDesc}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden mt-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                        <IconPlayerPlay className="size-16 text-muted-foreground" />
                    </div>
                    {/* About the author section */}
                    {selectedPowerDoppler !== null && (
                        <div className="mt-6 pt-6 border-t">
                            <h3 className="text-sm font-semibold mb-3">About the author:</h3>
                            <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={powerDopplerItems[selectedPowerDoppler].author.avatar} alt={powerDopplerItems[selectedPowerDoppler].author.name} />
                                    <AvatarFallback>{powerDopplerItems[selectedPowerDoppler].author.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium">{powerDopplerItems[selectedPowerDoppler].author.name}</p>
                                    <p className="text-sm text-muted-foreground">{powerDopplerItems[selectedPowerDoppler].author.experience}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            {/* Biofeedback section */}
            <Card className="@container/card mt-4">
                <CardHeader>
                    <CardDescription>Biofeedback during calf raise</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {biofeedbackItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedBiofeedback(index)}
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

            {/* Modal for Biofeedback */}
            <Dialog open={selectedBiofeedback !== null} onOpenChange={() => setSelectedBiofeedback(null)}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>{selectedBiofeedback !== null && biofeedbackItems[selectedBiofeedback].title}</DialogTitle>
                        <DialogDescription>
                            {selectedBiofeedback !== null && biofeedbackItems[selectedBiofeedback].fullDesc}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden mt-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                        <IconPlayerPlay className="size-16 text-muted-foreground" />
                    </div>
                    {/* About the author section */}
                    {selectedBiofeedback !== null && (
                        <div className="mt-6 pt-6 border-t">
                            <h3 className="text-sm font-semibold mb-3">About the author:</h3>
                            <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={biofeedbackItems[selectedBiofeedback].author.avatar} alt={biofeedbackItems[selectedBiofeedback].author.name} />
                                    <AvatarFallback>{biofeedbackItems[selectedBiofeedback].author.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium">{biofeedbackItems[selectedBiofeedback].author.name}</p>
                                    <p className="text-sm text-muted-foreground">{biofeedbackItems[selectedBiofeedback].author.experience}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
