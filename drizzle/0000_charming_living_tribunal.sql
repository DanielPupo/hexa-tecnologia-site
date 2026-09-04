CREATE TABLE `leads` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`interest` text NOT NULL,
	`message` text,
	`status` text DEFAULT 'novo' NOT NULL,
	`created_at` integer NOT NULL
);
