import * as path from "path";
import * as fs from "fs";
import dotenv from "dotenv";

const mapEnvFiles = {
    production: ".env",
    development: ".dev.env",
    local: ".local.env",
}

const envFile = mapEnvFiles[process.env.NODE_ENV as keyof typeof mapEnvFiles] || mapEnvFiles.development;

const envPath = path.resolve(__dirname, envFile);

if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
} else {
    throw new Error(`Env file ${envFile} not found`);
}

export default {
    services: {
        auth: {
            port: process.env.SM_SERVICE_AUTH_PORT,
        },
        user: {
            port: process.env.SM_SERVICE_USER_PORT,
        },
        schema: {
            port: process.env.SM_SERVICE_SCHEMA_PORT,
        },
        data: {
            port: process.env.SM_SERVICE_DATA_PORT,
        },
    },
    gateway: {
        proxy: {
            port: process.env.SM_GATEWAY_PROXY_PORT,
        },
    },
    website: {
        main: {
            port: process.env.SM_WEBSITE_MAIN_PORT,
        },
        admin: {
            port: process.env.SM_WEBSITE_ADMIN_PORT,
        },
    },
};
