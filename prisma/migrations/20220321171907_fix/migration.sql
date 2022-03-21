/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `updateAt` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Playlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Artist" DROP COLUMN "updatedAt",
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "updatedAt",
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "updatedAt",
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "updatedAt",
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;
