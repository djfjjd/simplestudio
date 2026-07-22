import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const timestamps = {
  createdAt: text("created_at").notNull().default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").notNull().default("CURRENT_TIMESTAMP"),
};

export const projects = sqliteTable("projects", {
  id: text("id").primaryKey(), name: text("name").notNull(), brandId: text("brand_id"),
  albumId: text("album_id"), status: text("status").notNull().default("Planning"), progress: integer("progress").notNull().default(0), ...timestamps,
});
export const songs = sqliteTable("songs", {
  id: text("id").primaryKey(), projectId: text("project_id").notNull(), title: text("title").notNull(), artist: text("artist").notNull(),
  genre: text("genre"), mood: text("mood"), bpm: integer("bpm"), duration: text("duration"), lyrics: text("lyrics"), memo: text("memo"), status: text("status").notNull().default("Planning"), ...timestamps,
});
export const characters = sqliteTable("characters", {
  id: text("id").primaryKey(), projectId: text("project_id").notNull(), name: text("name").notNull(), role: text("role"), height: text("height"), weight: text("weight"),
  hair: text("hair"), eyes: text("eyes"), costume: text("costume"), personality: text("personality"), elementId: text("element_id"), voice: text("voice"), color: text("color"), referenceKeys: text("reference_keys", {mode:"json"}).$type<string[]>(), ...timestamps,
});
export const storyboards = sqliteTable("storyboards", {
  id: text("id").primaryKey(), songId: text("song_id").notNull(), section: text("section").notNull(), position: integer("position").notNull(), description: text("description"), emotion: text("emotion"), camera: text("camera"), lighting: text("lighting"), color: text("color"), location: text("location"), ...timestamps,
});
export const scenes = sqliteTable("scenes", {
  id: text("id").primaryKey(), songId: text("song_id").notNull(), sceneNumber: integer("scene_number").notNull(), startTime: text("start_time"), endTime: text("end_time"), characterId: text("character_id"), location: text("location"), mood: text("mood"), cameraAngle: text("camera_angle"), cameraMovement: text("camera_movement"), lens: text("lens"), lighting: text("lighting"), weather: text("weather"), prompt: text("prompt"), assetStatus: text("asset_status").default("Missing"), ...timestamps,
});
export const assets = sqliteTable("assets", {
  id: text("id").primaryKey(), projectId: text("project_id").notNull(), songId: text("song_id"), sceneId: text("scene_id"), type: text("type").notNull(), name: text("name").notNull(), r2Key: text("r2_key").notNull(), mimeType: text("mime_type"), size: integer("size"), status: text("status").notNull().default("Ready"), ...timestamps,
});
