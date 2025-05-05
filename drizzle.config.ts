import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  dialect: 'singlestore',
  schema: './src/server/db/schema.ts',
  tablesFilter: ["drive-clone_*"],
} satisfies Config;
