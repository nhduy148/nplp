"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.getElementById("solutions");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFAQ = (e: React.MouseEvent) => {
    e.preventDefault();
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white py-16 border-t border-[#eaedf0]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <span className="text-4xl font-bold">NEX</span>
              <div className="relative">
                <span className="text-4xl font-bold">POS</span>
                <div className="absolute -top-1 -right-1 w-10 h-10 bg-[#f2bd00] rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Products column */}
          <div>
            <h3 className="text-lg font-semibold text-[#212b36] mb-4">
              {t("products")}
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  className="text-[#637381] hover:text-[#212b36]"
                  onClick={scrollToFeatures}
                >
                  {t("features")}
                </button>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-[#637381] hover:text-[#212b36]"
                >
                  {t("pricing")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h3 className="text-lg font-semibold text-[#212b36] mb-4">
              {t("resources")}
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  className="text-[#637381] hover:text-[#212b36]"
                  onClick={scrollToFAQ}
                >
                  {t("faq")}
                </button>
              </li>
              <li>
                <Link href="/guide" className="text-[#637381] hover:text-[#212b36]">
                  {t("user_guide")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-lg font-semibold text-[#212b36] mb-4">
              {t("company_section")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-[#637381] hover:text-[#212b36]">
                  {t("about_us")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#637381] hover:text-[#212b36]">
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#637381] hover:text-[#212b36]">
                  {t("privacy_policy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
