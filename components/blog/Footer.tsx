import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-[10px] md:px-[11%] pt-[20px] md:pb-[15px]  border-t border-[rgb(var(--border))] bg-[rgb(var(--card))]">
      <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-[rgb(var(--foreground))]/70">
        {/* Left Side */}
        <div className="mb-2 sm:mb-0">
          <p>
            Developed by{" "}
            <span className="font-semibold text-[rgb(var(--foreground))]">
              Wasim Akhtar Khan
            </span>
          </p>
        </div>

        {/* Center */}
        <div className="mb-2 sm:mb-0">
          <p>
            Built with ❤️ by{""}
            <span className="font-semibold">shadcn</span> &{" "}
            <span className="font-semibold">Next.js</span>
          </p>
        </div>

        {/* Right */}
        <div>
          <p>© {year} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;