import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    rootDir: "../",
    roots: ["<rootDir>/src"],
    preset: "ts-jest",
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["json", "lcov", "text"],
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!node_modules",
        "!config/**",
        "!src/config/**",
        "!src/**/*.d.ts",
        "!src/types/**",
        "!src/utils/**",
        "!src/store/**",
        "!src/interfaces/**",
        "!src/sagas/**",
        "!src/services/**",
        "!src/selectors/**",
        "!src/index.tsx",
    ],

    coverageThreshold: {
        global: {
            branches: 10,
            functions: 10,
            lines: 10,
            statements: 10,
        },
    },
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(ts|tsx|js)$": "ts-jest",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>config/fileTransformer.ts",
    },
    setupFilesAfterEnv: ["<rootDir>config/jest-setup.ts"],
    moduleNameMapper: {
        "\\.svg": "<rootDir>config/svgrMock.tsx",
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    },
    testMatch: ["**/*.(test|spec).tsx"],
};

export default config;
