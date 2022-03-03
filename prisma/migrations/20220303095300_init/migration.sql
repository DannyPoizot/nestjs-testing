-- CreateTable
CREATE TABLE "about" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "about_pkey" PRIMARY KEY ("id")
);
