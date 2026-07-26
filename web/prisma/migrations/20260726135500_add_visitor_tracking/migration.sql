-- CreateTable
CREATE TABLE "WebsiteVisitor" (
    "id" TEXT NOT NULL,
    "visitorHash" TEXT NOT NULL,
    "firstSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL,
    "city" TEXT,
    "region" TEXT,
    "countryCode" TEXT,
    "geoCheckedAt" TIMESTAMP(3),

    CONSTRAINT "WebsiteVisitor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfileDownload" (
    "id" TEXT NOT NULL,
    "visitorHash" TEXT NOT NULL,
    "firstDownloadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastDownloadedAt" TIMESTAMP(3) NOT NULL,
    "downloadCount" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "ProfileDownload_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WebsiteVisitor_visitorHash_key" ON "WebsiteVisitor"("visitorHash");

-- CreateIndex
CREATE INDEX "WebsiteVisitor_lastSeenAt_idx" ON "WebsiteVisitor"("lastSeenAt");

-- CreateIndex
CREATE INDEX "WebsiteVisitor_city_idx" ON "WebsiteVisitor"("city");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileDownload_visitorHash_key" ON "ProfileDownload"("visitorHash");
