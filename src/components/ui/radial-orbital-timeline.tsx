"use client";
import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
    id: number;
    title: string;
    date: string;
    content: string;
    category: string;
    icon: any;
    relatedIds: number[];
    status: "completed" | "in-progress" | "pending";
    energy: number;
}

interface RadialOrbitalTimelineProps {
    timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
    timelineData,
}: RadialOrbitalTimelineProps) {
    const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
        {}
    );
    const [viewMode, setViewMode] = useState<"orbital">("orbital");
    const [rotationAngle, setRotationAngle] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true);
    const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
    const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });
    const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const orbitRef = useRef<HTMLDivElement>(null);
    const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const handleContainerClick = (e: React.MouseEvent) => {
        if (e.target === containerRef.current || e.target === orbitRef.current) {
            setExpandedItems({});
            setActiveNodeId(null);
            setPulseEffect({});
            setAutoRotate(true);
        }
    };

    const toggleItem = (id: number) => {
        setExpandedItems((prev) => {
            const newState = { ...prev };
            Object.keys(newState).forEach((key) => {
                if (parseInt(key) !== id) {
                    newState[parseInt(key)] = false;
                }
            });

            newState[id] = !prev[id];

            if (!prev[id]) {
                setActiveNodeId(id);
                setAutoRotate(false);

                const relatedItems = getRelatedItems(id);
                const newPulseEffect: Record<number, boolean> = {};
                relatedItems.forEach((relId) => {
                    newPulseEffect[relId] = true;
                });
                setPulseEffect(newPulseEffect);

                centerViewOnNode(id);
            } else {
                setActiveNodeId(null);
                setAutoRotate(true);
                setPulseEffect({});
            }

            return newState;
        });
    };

    useEffect(() => {
        let rotationTimer: NodeJS.Timeout;

        if (autoRotate && viewMode === "orbital") {
            rotationTimer = setInterval(() => {
                setRotationAngle((prev) => {
                    const newAngle = (prev + 0.3) % 360;
                    return Number(newAngle.toFixed(3));
                });
            }, 50);
        }

        return () => {
            if (rotationTimer) {
                clearInterval(rotationTimer);
            }
        };
    }, [autoRotate, viewMode]);

    const centerViewOnNode = (nodeId: number) => {
        if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

        const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
        const totalNodes = timelineData.length;
        const targetAngle = (nodeIndex / totalNodes) * 360;

        setRotationAngle(270 - targetAngle);
    };

    const calculateNodePosition = (index: number, total: number) => {
        const angle = ((index / total) * 360 + rotationAngle) % 360;
        const radius = 200;
        const radian = (angle * Math.PI) / 180;

        const x = radius * Math.cos(radian) + centerOffset.x;
        const y = radius * Math.sin(radian) + centerOffset.y;

        const zIndex = Math.round(100 + 50 * Math.cos(radian));
        const opacity = Math.max(
            0.4,
            Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
        );

        return { x, y, angle, zIndex, opacity };
    };

    const getRelatedItems = (itemId: number): number[] => {
        const currentItem = timelineData.find((item) => item.id === itemId);
        return currentItem ? currentItem.relatedIds : [];
    };

    const isRelatedToActive = (itemId: number): boolean => {
        if (!activeNodeId) return false;
        const relatedItems = getRelatedItems(activeNodeId);
        return relatedItems.includes(itemId);
    };

    const getStatusStyles = (status: TimelineItem["status"]): string => {
        switch (status) {
            case "completed":
                return "text-white bg-black border-white";
            case "in-progress":
                return "text-black bg-white border-black";
            case "pending":
                return "text-white bg-black/40 border-white/50";
            default:
                return "text-white bg-black/40 border-white/50";
        }
    };

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-[600px] overflow-hidden flex items-center justify-center bg-black transition-colors duration-1000`}
            onClick={handleContainerClick}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-40" />

            {/* Orbital Path */}
            <div
                ref={orbitRef}
                className="absolute w-[400px] h-[400px] border border-white/10 rounded-full animate-[spin_60s_linear_infinite]"
                style={{
                    transform: `rotate(${rotationAngle}deg)`,
                }}
            >
                <div className="absolute inset-0 rounded-full border border-white/5 opacity-50 scale-125" />
                <div className="absolute inset-0 rounded-full border border-white/5 opacity-30 scale-150" />
            </div>

            {/* Central Hub */}
            <div className="absolute z-10 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-black/90 backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center justify-center p-4 z-20 overflow-hidden">
                    <img src="/logo.png" alt="Noraizen Logo" className="w-16 h-16 object-contain animate-pulse" />
                </div>
                <div className="absolute w-32 h-32 rounded-full border border-dashed border-white/20 animate-[spin_20s_linear_infinite_reverse]" />
                <div className="absolute w-48 h-48 rounded-full border border-white/5 animate-pulse" />
            </div>

            {/* Nodes */}
            <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
                <div className="relative">
                    {timelineData.map((item, index) => {
                        const position = calculateNodePosition(index, timelineData.length);
                        const isExpanded = expandedItems[item.id];
                        const isRelated = isRelatedToActive(item.id);
                        const isPulsing = pulseEffect[item.id];
                        const Icon = item.icon;

                        const nodeStyle = {
                            transform: `translate(${position.x}px, ${position.y}px)`,
                            zIndex: isExpanded ? 200 : position.zIndex,
                            opacity: isExpanded ? 1 : position.opacity,
                        };

                        return (
                            <div
                                key={item.id}
                                ref={(el) => (nodeRefs.current[item.id] = el)}
                                className="absolute transition-all duration-700 cursor-pointer pointer-events-auto"
                                style={nodeStyle}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(item.id);
                                }}
                            >
                                {/* Connection Lines (when active) */}
                                {isExpanded && activeNodeId === item.id && (
                                    <svg
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-20"
                                        style={{ zIndex: -1 }}
                                    >
                                        {item.relatedIds.map((relId) => {
                                            // Note: This logic is simplified; real calculation would need coordinates of related node
                                            return null;
                                        })}
                                    </svg>
                                )}

                                {/* Node Orb */}
                                <div
                                    className={`
                    group relative rounded-full flex items-center justify-center transition-all duration-500
                    ${isExpanded ? "w-16 h-16" : "w-12 h-12"}
                    ${isRelated
                                            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                                            : "bg-black/80 border border-white/20 text-white hover:border-white/80"
                                        }
                    ${isPulsing ? "animate-pulse ring-2 ring-white/50" : ""}
                  `}
                                >
                                    {(Icon as any) && (
                                        <Icon
                                            className={`
                        transition-all duration-500
                        ${isExpanded ? "w-8 h-8" : "w-5 h-5"}
                      `}
                                        />
                                    )}

                                    {isRelated && (
                                        <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-white" />
                                    )}
                                </div>

                                {/* Label (when not expanded) */}
                                {!isExpanded && (
                                    <div
                                        className={`
                      absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded bg-black/50 backdrop-blur-sm border border-white/10 text-xs font-mono text-white/70 transition-opacity duration-300
                      ${position.opacity < 0.6
                                                ? "opacity-0"
                                                : "opacity-100 group-hover:opacity-100 group-hover:bg-black"
                                            }
                    `}
                                    >
                                        {item.title}
                                    </div>
                                )}

                                {/* Expanded Card */}
                                {isExpanded && (
                                    <Card
                                        className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] bg-black/90 backdrop-blur-xl border-white/20 text-white shadow-2xl animate-in fade-in zoom-in-95 duration-300 z-50"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <CardHeader className="p-4 border-b border-white/10 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-2 opacity-10">
                                                {(Icon as any) && <Icon size={80} />}
                                            </div>

                                            <div className="flex justify-between items-start">
                                                <Badge
                                                    variant="outline"
                                                    className={`mb-2 capitalize ${getStatusStyles(
                                                        item.status
                                                    )}`}
                                                >
                                                    {item.status === "completed"
                                                        ? "COMPLETE"
                                                        : item.status === "in-progress"
                                                            ? "IN PROGRESS"
                                                            : "PENDING"}
                                                </Badge>
                                                <span className="text-xs font-mono text-white/50">
                                                    {item.date}
                                                </span>
                                            </div>

                                            <CardTitle className="text-xl font-bold tracking-tight z-10">
                                                {item.title}
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent className="p-4 space-y-4">
                                            <p className="text-sm text-white/70 leading-relaxed">
                                                {item.content}
                                            </p>

                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="p-2 rounded bg-white/5 border border-white/10">
                                                    <div className="text-[10px] uppercase text-white/40 mb-1">
                                                        Energy Level
                                                    </div>
                                                    <div className="text-lg font-bold flex items-center gap-1">
                                                        {item.energy}%
                                                    </div>
                                                </div>

                                                <div className="p-2 rounded bg-white/5 border border-white/10">
                                                    <div className="text-[10px] uppercase text-white/40 mb-1">
                                                        Category
                                                    </div>
                                                    <div className="text-sm font-medium opacity-90">
                                                        {item.category}
                                                    </div>
                                                </div>
                                            </div>

                                            {item.relatedIds.length > 0 && (
                                                <div className="pt-2">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <div className="h-px flex-1 bg-white/10" />
                                                        <span className="text-[10px] uppercase tracking-wider text-white/30">
                                                            Connected Nodes
                                                        </span>
                                                        <div className="h-px flex-1 bg-white/10" />
                                                    </div>

                                                    <div className="flex flex-wrap gap-2 justify-center">
                                                        {item.relatedIds.map((relatedId) => {
                                                            const relatedItem = timelineData.find(
                                                                (i) => i.id === relatedId
                                                            );
                                                            return (
                                                                <Button
                                                                    key={relatedId}
                                                                    variant="outline"
                                                                    size="sm"
                                                                    className="h-7 text-xs bg-transparent border-white/20 hover:bg-white hover:text-black transition-colors"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        toggleItem(relatedId);
                                                                    }}
                                                                >
                                                                    {relatedItem?.title}
                                                                </Button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
