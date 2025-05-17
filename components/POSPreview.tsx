import Image from "next/image"

export function POSPreview() {
    return (
        <div className="max-w-7xl mx-auto px-4 mb-16">
            <div className="flex flex-col lg:flex-row gap-4">
                <Image src="/banner/hero-banner.png" alt="POS Preview" className="w-full rounded-lg" width={1000} height={1000} />
            </div>
        </div>
    )
} 