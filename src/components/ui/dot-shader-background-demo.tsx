import { DotScreenShader } from "@/components/ui/dot-shader-background";

export default function DotShaderBackgroundDemo() {
    return (
        <div className="h-screen w-full flex flex-col gap-8 items-center justify-center relative bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
                <DotScreenShader />
            </div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-6xl md:text-7xl font-light tracking-tight mix-blend-exclusion text-white whitespace-nowrap pointer-events-none">
                    DIGITAL INNOVATION
                </h1>
                <p className="text-lg md:text-xl font-light text-center text-white mix-blend-exclusion max-w-2xl mx-auto leading-relaxed pointer-events-none mt-4">
                    Where thoughts take shape and consciousness flows like liquid mercury through infinite dimensions.
                </p>
            </div>
        </div>
    );
}
