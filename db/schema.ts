import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const leads = sqliteTable("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }), name: text("name").notNull(), phone: text("phone").notNull(),
  interest: text("interest").notNull(), message: text("message"), status: text("status").notNull().default("novo"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull().$defaultFn(() => new Date()),
});
