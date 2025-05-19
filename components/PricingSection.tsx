"use client"

import { useState } from "react"
import { Check, HelpCircle, Info } from "lucide-react"
import { PricingToggle } from "./PricingToggle"

type PeriodOption = "month" | "year"

export function PricingSection() {
    const [period, setPeriod] = useState<PeriodOption>("month")
    const pricingData = {
        free: {
            monthly: 0,
            yearly: 0,
            description: "Dành cho nhà bán hàng mới khởi nghiệp với nhu cầu cơ bản.",
            features: [
                "Không giới hạn thương hiệu",
                "Kết nối tối đa 2 kênh bán",
                { text: "Bán hàng đa kênh", hasInfo: true },
                "Kết nối thiết bị in ấn",
                { text: "Quản lý nhân viên", hasInfo: true },
                "Hỗ trợ iOS và Android",
            ],
        },
        starter: {
            monthly: 100000,
            yearly: 1200000,
            description: "Quy mô kinh doanh siêu nhỏ, nhỏ. Chỉ bán online trên các sàn.",
            features: [
                "Gồm các tính năng của FREE",
                { text: "Kết nối tối đa 3 kênh bán", hasInfo: true },
                "Quản lý thực đơn, danh mục sản phẩm",
                "Đồng bộ trạng thái thực đơn / sản phẩm với sàn",
                "Đồng bộ trạng thái đơn hàng với sàn",
                "Kết nối đơn vị vận chuyển và thanh toán",
                "Báo cáo bán hàng & khách hàng",
            ],
        },
        standard: {
            monthly: 200000,
            yearly: 2400000,
            description: "Quy mô kinh doanh vừa, có chuỗi, nhu cầu bán hàng chuyên nghiệp.",
            features: [
                "Gồm các tính năng của STARTER",
                { text: "Kết nối tối đa 4 kênh bán", hasInfo: true },
                "Điều phối đơn hàng trong chuỗi",
                "Quản lý khuyến mãi theo đối tượng khách hàng, kênh bán và giới hạn sử dụng",
                "Gợi ý mã khuyến mãi, CTKM thỏa điều kiện",
                "Quản lý ca bán hàng",
                "Quản lý thu chi",
                "Không giới hạn nhân viên",
            ],
            recommended: true,
        },
        business: {
            monthly: 300000,
            yearly: 3600000,
            description: "Quy mô kinh doanh lớn, có nhu cầu CSKH và quản lý phức tạp hơn.",
            features: [
                "Gồm các tính năng của gói Basic",
                { text: "Kết nối tối đa 8 kênh bán", hasInfo: true },
                "Bán hàng qua Brand.com",
                "Kết nối đa dạng đơn vị vận chuyển và cổng thanh toán",
                "Bán hàng qua web order bằng QR code",
                "Quản lý kho, định lượng",
                "Cảnh báo tồn kho, dự báo nhập hàng",
                "Hỗ trợ tổng đài trực tiếp",
            ],
        },
    }

    // Format price with thousand separator
    const formatPrice = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">
            <div className="text-center mb-10">
                <div className="inline-block px-3 py-1 rounded-full bg-[#dfe3e8] text-[#212b36] text-sm font-medium mb-4">
                    Bảng giá
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#212b36] mb-4">
                    Chọn gói phù hợp - mở rộng khi bạn phát triển
                </h1>
                <p className="text-[#637381] text-lg max-w-3xl mx-auto">
                    Cho dù bạn là hộ kinh doanh nhỏ hay chuỗi cửa hàng lớn, NexPos có giải pháp phù hợp dành cho bạn.
                </p>
            </div>

            <div className="flex justify-center mb-10">
                <PricingToggle defaultValue="month" onChange={(value) => setPeriod(value)} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* FREE PLAN */}
                <div className="border border-[#dfe3e8] rounded-xl overflow-hidden bg-white">
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-[#212b36] mb-1">FREE</h3>
                        <div className="flex items-baseline mb-1">
                            <span className="text-3xl font-bold text-[#212b36]">
                                Không thời hạn
                                {/* {formatPrice(pricingData.free[period === "month" ? "monthly" : "yearly"])} */}
                            </span>
                            {/* <span className="text-sm text-[#637381] ml-1">VNĐ/{period === "month" ? "Tháng" : "Năm"}</span> */}
                        </div>
                        <p className="text-sm text-[#637381] mb-6">{pricingData.free.description}</p>
                        <button className="w-full py-2.5 bg-[#f5c349] rounded-lg font-bold text-[#212b36]">Bắt đầu ngay</button>
                    </div>
                    <div className="px-6 pb-6">
                        <ul className="space-y-4">
                            {pricingData.free.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <Check className="h-5 w-5 text-[#4db04d] mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-[#637381]">{typeof feature === "string" ? feature : feature.text}</span>
                                    {typeof feature !== "string" && feature.hasInfo && (
                                        <HelpCircle className="h-4 w-4 text-[#919eab] ml-1 mt-0.5 flex-shrink-0" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* E-COMMERCE PLAN */}
                <div className="border border-[#dfe3e8] rounded-xl overflow-hidden bg-white">
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-[#212b36] mb-1">STARTER</h3>
                        <div className="flex items-baseline mb-1">
                            <span className="text-3xl font-bold text-[#212b36]">
                                {formatPrice(pricingData.starter[period === "month" ? "monthly" : "yearly"])}
                            </span>
                            <span className="text-sm text-[#637381] ml-1">VNĐ/{period === "month" ? "Tháng" : "Năm"}</span>
                        </div>
                        <p className="text-sm text-[#637381] mb-6">{pricingData.starter.description}</p>
                        <button className="w-full py-2.5 bg-[#f5c349] rounded-lg font-bold text-[#212b36]">Dùng thử miễn phí</button>
                    </div>
                    <div className="px-6 pb-6">
                        <ul className="space-y-4">
                            {pricingData.starter.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <Check className="h-5 w-5 text-[#4db04d] mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-[#637381]">{typeof feature === "string" ? feature : feature.text}</span>
                                    {typeof feature !== "string" && feature.hasInfo && (
                                        <Info className="h-4 w-4 text-[#919eab] ml-1 mt-0.5 flex-shrink-0" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BASIC PLAN */}
                <div className="border-2 border-[#f5c349] rounded-xl overflow-hidden bg-white relative">
                    {pricingData.standard.recommended && (
                        <div className="absolute top-6 right-6">
                            <span className="bg-[#f5c349] text-[#212b36] text-xs font-medium px-2 py-1 rounded-full">
                                Khuyến dùng
                            </span>
                        </div>
                    )}
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-[#212b36] mb-1">STANDARD</h3>
                        <div className="flex items-baseline mb-1">
                            <span className="text-3xl font-bold text-[#212b36]">
                                {formatPrice(pricingData.standard[period === "month" ? "monthly" : "yearly"])}
                            </span>
                            <span className="text-sm text-[#637381] ml-1">VNĐ/{period === "month" ? "Tháng" : "Năm"}</span>
                        </div>
                        <p className="text-sm text-[#637381] mb-6">{pricingData.standard.description}</p>
                        <button className="w-full py-2.5 bg-[#f5c349] rounded-lg font-bold text-[#212b36]">Dùng thử miễn phí</button>
                    </div>
                    <div className="px-6 pb-6">
                        <ul className="space-y-4">
                            {pricingData.standard.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <Check className="h-5 w-5 text-[#4db04d] mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-[#637381]">{typeof feature === "string" ? feature : feature.text}</span>
                                    {typeof feature !== "string" && feature.hasInfo && (
                                        <Info className="h-4 w-4 text-[#919eab] ml-1 mt-0.5 flex-shrink-0" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* STANDARD PLAN */}
                <div className="border border-[#dfe3e8] rounded-xl overflow-hidden bg-white">
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-[#212b36] mb-1">BUSINESS</h3>
                        <div className="flex items-baseline mb-1">
                            <span className="text-3xl font-bold text-[#212b36]">
                                {formatPrice(pricingData.business[period === "month" ? "monthly" : "yearly"])}
                            </span>
                            <span className="text-sm text-[#637381] ml-1">VNĐ/{period === "month" ? "Tháng" : "Năm"}</span>
                        </div>
                        <p className="text-sm text-[#637381] mb-6">{pricingData.business.description}</p>
                        <button className="w-full py-2.5 bg-[#f5c349] rounded-lg font-bold text-[#212b36]">Dùng thử miễn phí</button>
                    </div>
                    <div className="px-6 pb-6">
                        <ul className="space-y-4">
                            {pricingData.business.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <Check className="h-5 w-5 text-[#4db04d] mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-[#637381]">{typeof feature === "string" ? feature : feature.text}</span>
                                    {typeof feature !== "string" && feature.hasInfo && (
                                        <Info className="h-4 w-4 text-[#919eab] ml-1 mt-0.5 flex-shrink-0" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
