CREATE TABLE `assets` (
	`id` text PRIMARY KEY NOT NULL,
	`project_id` text NOT NULL,
	`song_id` text,
	`scene_id` text,
	`type` text NOT NULL,
	`name` text NOT NULL,
	`r2_key` text NOT NULL,
	`mime_type` text,
	`size` integer,
	`status` text DEFAULT 'Ready' NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL,
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `characters` (
	`id` text PRIMARY KEY NOT NULL,
	`project_id` text NOT NULL,
	`name` text NOT NULL,
	`role` text,
	`height` text,
	`weight` text,
	`hair` text,
	`eyes` text,
	`costume` text,
	`personality` text,
	`element_id` text,
	`voice` text,
	`color` text,
	`reference_keys` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL,
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`brand_id` text,
	`album_id` text,
	`status` text DEFAULT 'Planning' NOT NULL,
	`progress` integer DEFAULT 0 NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL,
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scenes` (
	`id` text PRIMARY KEY NOT NULL,
	`song_id` text NOT NULL,
	`scene_number` integer NOT NULL,
	`start_time` text,
	`end_time` text,
	`character_id` text,
	`location` text,
	`mood` text,
	`camera_angle` text,
	`camera_movement` text,
	`lens` text,
	`lighting` text,
	`weather` text,
	`prompt` text,
	`asset_status` text DEFAULT 'Missing',
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL,
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `songs` (
	`id` text PRIMARY KEY NOT NULL,
	`project_id` text NOT NULL,
	`title` text NOT NULL,
	`artist` text NOT NULL,
	`genre` text,
	`mood` text,
	`bpm` integer,
	`duration` text,
	`lyrics` text,
	`memo` text,
	`status` text DEFAULT 'Planning' NOT NULL,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL,
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `storyboards` (
	`id` text PRIMARY KEY NOT NULL,
	`song_id` text NOT NULL,
	`section` text NOT NULL,
	`position` integer NOT NULL,
	`description` text,
	`emotion` text,
	`camera` text,
	`lighting` text,
	`color` text,
	`location` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL,
	`updated_at` text DEFAULT 'CURRENT_TIMESTAMP' NOT NULL
);
