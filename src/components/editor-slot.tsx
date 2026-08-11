import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type EditorSlotProps = {
  title: string;
  note: string;
  locale: Locale;
};

export function EditorSlot({ title, note, locale }: EditorSlotProps) {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  const dictionary = getDictionary(locale);

  return (
    <aside className="editor-slot" aria-label={dictionary.editor.aria}>
      <span className="editor-slot__label">{dictionary.editor.badge}</span>
      <div>
        <strong>{title}</strong>
        <p>{note}</p>
      </div>
    </aside>
  );
}
