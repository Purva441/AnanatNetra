CREATE TABLE `analyses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `organization` VARCHAR(191) NOT NULL,
    `asset` VARCHAR(191) NOT NULL,
    `finding` VARCHAR(191) NOT NULL,
    `severity` VARCHAR(191) NOT NULL,
    `priority` VARCHAR(191) NOT NULL,
    `why` TEXT NOT NULL,
    `recommendation` TEXT NOT NULL,
    `timeline` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
