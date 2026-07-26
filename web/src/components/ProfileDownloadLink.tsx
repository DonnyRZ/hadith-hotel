"use client";

import type { MouseEvent, ReactNode } from "react";
import { trackProfileDownload } from "@/lib/siteMetrics";

const PDF_HREF = "/docs/hadith-hotel-profile-summary.pdf";
const PDF_DOWNLOAD_NAME = "HADITH-Hotel-Profile-Summary.pdf";

type ProfileDownloadLinkProps = {
  className?: string;
  children: ReactNode;
};

export function ProfileDownloadLink({
  className,
  children,
}: ProfileDownloadLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    void trackProfileDownload();

    const anchor = document.createElement("a");
    anchor.href = PDF_HREF;
    anchor.download = PDF_DOWNLOAD_NAME;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }

  return (
    <a
      href={PDF_HREF}
      download={PDF_DOWNLOAD_NAME}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
