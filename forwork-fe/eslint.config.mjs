import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // 🔥 규칙 비활성화
      "@typescript-eslint/no-explicit-any": "off", // 🔥 `any` 타입 허용
    },
  },
  {
    reportUnusedDisableDirectives: "off", // 🔥 사용되지 않는 ESLint 비활성화 주석 경고 제거
  }
];

export default eslintConfig;
