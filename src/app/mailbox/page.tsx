import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { IconCheck, IconMessageCircle, IconUserPlus, IconPhotoScan, IconUsers, IconAlertCircle, IconFileText } from "@tabler/icons-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function MailboxPage() {
    const notifications = [
        {
            icon: IconCheck,
            iconColor: "text-green-600",
            message: "Your image analysis is complete",
            description: "The ultrasound scan for Patient #4521 has been analyzed and results are ready for review.",
            time: "2 minutes ago",
            avatar: "/avatars/shadcn.jpg",
            sender: "AI Assistant"
        },
        {
            icon: IconMessageCircle,
            iconColor: "text-blue-600",
            message: "Dr. Sarah Martinez invited you for second opinion",
            description: "Cardiac ultrasound case - suspected mitral valve prolapse. Your expertise would be valuable.",
            time: "1 hour ago",
            avatar: "/avatars/shadcn.jpg",
            sender: "Dr. Sarah Martinez"
        },
        {
            icon: IconUserPlus,
            iconColor: "text-purple-600",
            message: "New connection request",
            description: "Dr. James Wilson wants to connect with you. View profile to accept or decline.",
            time: "3 hours ago",
            avatar: "/avatars/shadcn.jpg",
            sender: "Dr. James Wilson"
        },
        {
            icon: IconPhotoScan,
            iconColor: "text-orange-600",
            message: "New case assigned to you",
            description: "Musculoskeletal scan - shoulder injury assessment required. Priority: Medium.",
            time: "5 hours ago",
            avatar: "/avatars/shadcn.jpg",
            sender: "System"
        },
        {
            icon: IconUsers,
            iconColor: "text-teal-600",
            message: "Dr. Emily Chen accepted your connection",
            description: "You can now collaborate on cases and share insights.",
            time: "1 day ago",
            avatar: "/avatars/shadcn.jpg",
            sender: "Dr. Emily Chen"
        },
        {
            icon: IconAlertCircle,
            iconColor: "text-red-600",
            message: "Urgent: Quality check required",
            description: "Multiple images from yesterday's session need quality verification before processing.",
            time: "1 day ago",
            avatar: "/avatars/shadcn.jpg",
            sender: "Quality Control"
        },
        {
            icon: IconFileText,
            iconColor: "text-indigo-600",
            message: "New learning module available",
            description: "Power Doppler during exercise - Advanced techniques course is now available.",
            time: "2 days ago",
            avatar: "/avatars/shadcn.jpg",
            sender: "Learning Platform"
        }
    ]

    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <style>{`
                .notifications-card-outline {
                    border: 0.5px solid #6188C3 !important;
                    box-shadow: 0 2px 8px 0 #6188C333 !important;
                }
                .notification-separator {
                    background-color: #6188C3 !important;
                    opacity: 0.4 !important;
                }
            `}</style>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                {/* Left column - Notifications (2/3 width) */}
                <div className="lg:col-span-2">
                    <Card className="notifications-card-outline">
                        <CardHeader>
                            <CardTitle>Notifications</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-0">
                            {notifications.map((notification, index) => {
                                const Icon = notification.icon
                                return (
                                    <div key={index}>
                                        <div className="flex items-start gap-4 py-4 cursor-pointer hover:bg-accent/50 transition-colors rounded-lg px-3 -mx-3">
                                            <Avatar className="h-10 w-10 flex-shrink-0">
                                                <AvatarImage src={notification.avatar} alt={notification.sender} />
                                                <AvatarFallback>{notification.sender.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1 space-y-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <Icon className={`w-4 h-4 flex-shrink-0 ${notification.iconColor}`} />
                                                    <p className="text-sm font-semibold leading-none">
                                                        {notification.message}
                                                    </p>
                                                </div>
                                                <p className="text-sm text-muted-foreground leading-snug">
                                                    {notification.description}
                                                </p>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                                                    <span className="font-medium">{notification.sender}</span>
                                                    <span>•</span>
                                                    <span>{notification.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                        {index < notifications.length - 1 && <Separator className="notification-separator" />}
                                    </div>
                                )
                            })}
                        </CardContent>
                    </Card>
                </div>

                {/* Right column - 3 cards stacked (1/3 width) */}
                <div className="lg:col-span-1 flex flex-col gap-4">
                    {/* Pending requests card */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-base">Pending requests</CardTitle>
                            <Button variant="outline" size="sm">
                                Open
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">2 pending requests</p>
                        </CardContent>
                    </Card>

                    {/* Groups card */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-base">Groups</CardTitle>
                            <Button variant="outline" size="sm">
                                Edit
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">5 group participations</p>
                        </CardContent>
                    </Card>

                    {/* Established connections card */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-base">Established connections</CardTitle>
                            <Button variant="outline" size="sm">
                                View
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">4 established connections</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
