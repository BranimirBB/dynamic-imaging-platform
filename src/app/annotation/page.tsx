import { DataTable } from "@/components/data-table"
import { IconTrendingUp } from "@tabler/icons-react"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import data from "../data.json"
import { useState, useEffect, useRef } from "react"

export default function AnnotationToolPage() {
    const [hovered, setHovered] = useState<"dots" | "distance" | "area" | "angle">("dots")
    const [isManual, setIsManual] = useState(false)
    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const options: Array<"dots" | "distance" | "area" | "angle"> = ["dots", "distance", "area", "angle"]
    const images = {
        dots: "/public/dots.png",
        distance: "/public/distance.png",
        area: "/public/area.png",
        angle: "/public/angle.png"
    }
    useEffect(() => {
        if (!isManual) {
            timerRef.current = setTimeout(() => {
                setHovered(prev => {
                    const idx = options.indexOf(prev)
                    return options[(idx + 1) % options.length]
                })
            }, 5000)
        }
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [hovered, isManual])
    function handleMouseEnter(option: "dots" | "distance" | "area" | "angle") {
        setIsManual(true)
        setHovered(option)
    }
    function handleMouseLeave() {
        setIsManual(false)
    }
    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                    {/* Single Card */}
                    <div className="px-4 lg:px-6">
                        <Card className="@container/card relative min-h-[270px] border border-[0.9px] border-[#61C3C0] shadow-[0_2px_8px_0_#61C3C0] bg-[#F0FCFB]">
                            <CardHeader>
                                <CardDescription>Annotation tool</CardDescription>
                                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                    Annotation tool
                                </CardTitle>
                                <div className="flex flex-col items-center gap-2 mt-2 absolute right-[60px] top-1/2 -translate-y-1/2 z-10">
                                    <span
                                        className={`cursor-pointer hover:underline font-bold text-lg ${hovered === "dots" ? "text-[#61C3C0]" : "text-inherit"}`}
                                        onMouseEnter={() => handleMouseEnter("dots")}
                                        onMouseLeave={handleMouseLeave}
                                    >Dots tracking</span>
                                    <span
                                        className={`cursor-pointer hover:underline font-bold text-lg ${hovered === "distance" ? "text-[#61C3C0]" : "text-inherit"}`}
                                        onMouseEnter={() => handleMouseEnter("distance")}
                                        onMouseLeave={handleMouseLeave}
                                    >Distance tracking</span>
                                    <span
                                        className={`cursor-pointer hover:underline font-bold text-lg ${hovered === "area" ? "text-[#61C3C0]" : "text-inherit"}`}
                                        onMouseEnter={() => handleMouseEnter("area")}
                                        onMouseLeave={handleMouseLeave}
                                    >Area tracking</span>
                                    <span
                                        className={`cursor-pointer hover:underline font-bold text-lg ${hovered === "angle" ? "text-[#61C3C0]" : "text-inherit"}`}
                                        onMouseEnter={() => handleMouseEnter("angle")}
                                        onMouseLeave={handleMouseLeave}
                                    >Angle tracking</span>
                                </div>
                                {/* Tracking image: changes on hover, same size and location */}
                                <img
                                    src={images[hovered]}
                                    alt={hovered + " image"}
                                    className="absolute right-[255px] top-1/2 -translate-y-1/2 w-64 h-56 object-contain"
                                    style={{ pointerEvents: 'none' }}
                                />
                            </CardHeader>
                            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                                <div className="line-clamp-1 flex gap-2 font-medium">
                                    Productivity increasing{" "}
                                    <IconTrendingUp className="size-4" />
                                </div>
                                <div className="text-muted-foreground">
                                    The Annotation tool supports multiple tracking modes including dots, distance, area,<br /> and angle, enabling versatile and precise annotation for a wide range of imaging tasks.
                                </div>
                                <button
                                    className="mt-2 rounded-lg bg-[#61C3C0] px-6 py-3 text-white font-semibold shadow hover:bg-[#4bb1ad] active:bg-[#399a97] transition-colors cursor-pointer"
                                    type="button"
                                >
                                    Explore Now
                                </button>
                            </CardFooter>
                        </Card>
                    </div>

                    {/* Data Table */}
                    <DataTable data={data} />
                </div>
            </div>
        </div>
    )
}
