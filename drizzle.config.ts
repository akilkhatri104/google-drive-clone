import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  dialect: 'singlestore',
  schema: './src/server/db/schema.ts',
  tablesFilter: ["drive-clone_*"],
  dbCredentials: {
    host: env.SINGLESTORE_HOST,
    port: parseInt(env.SINGLESTORE_PORT),
    user: env.SINGLESTORE_USERNAME,
    password: env.SINGLESTORE_PASSWORD,
    database: env.SINGLESTORE_DB_NAME,
    ssl: {},
  },
} satisfies Config;
