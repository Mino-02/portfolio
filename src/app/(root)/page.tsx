import { redirect } from "next/navigation";

import { defaultLocale, localizePath } from "@/i18n/config";

export default function RootPage() {
  redirect(localizePath(defaultLocale));
}
