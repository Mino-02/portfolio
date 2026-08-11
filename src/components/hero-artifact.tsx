import Image from "next/image";

import { getPortfolio } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type HeroArtifactProps = {
  locale: Locale;
};

export function HeroArtifact({ locale }: HeroArtifactProps) {
  const dictionary = getDictionary(locale);
  const { profile } = getPortfolio(locale);

  return (
    <figure
      className="hero-artifact"
      aria-label={dictionary.artifact.aria}
    >
      <span className="artifact-orbit artifact-orbit--one" aria-hidden="true" />
      <span className="artifact-orbit artifact-orbit--two" aria-hidden="true" />

      <div className="artifact-card artifact-card--main">
        <div className="artifact-topline" aria-hidden="true">
          <span>{dictionary.artifact.profile}</span>
          <span>{dictionary.artifact.disciplines}</span>
        </div>

        <div className="artifact-portrait">
          {profile.photo ? (
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              fill
              preload
              sizes="(max-width: 920px) 82vw, 38vw"
            />
          ) : (
            <svg viewBox="0 0 460 520" aria-hidden="true">
              <rect width="460" height="520" fill="#183b31" />
              <circle cx="332" cy="142" r="112" fill="#f2aa18" />
              <path d="M-24 418c72-121 157-174 256-158 79 13 143 79 192 198v62H-24Z" fill="#c55e39" />
              <path d="M146 382c13-105 51-165 114-180 74-18 122 39 144 170l-46 148H148Z" fill="#f2e8d7" />
              <circle cx="270" cy="176" r="78" fill="#161713" />
              <path d="M196 182c18-91 92-127 155-80 48 36 39 105 1 151-40 49-120 27-149-17-11-18-12-35-7-54Z" fill="#161713" />
              <path d="M232 212c9 44 62 63 97 33 15-12 25-30 29-51-12 9-31 13-56 11-30-3-54-15-70-35-5 14-5 28 0 42Z" fill="#d8c4a3" />
              <path d="M214 348c25-55 69-79 122-65 45 12 74 50 89 113l-5 124H197Z" fill="#244936" />
              <path d="M34 92h106M34 120h72M34 148h93" stroke="#79a99a" strokeWidth="4" strokeLinecap="round" />
              <circle cx="79" cy="308" r="46" fill="none" stroke="#f2aa18" strokeWidth="2" />
              <circle cx="79" cy="308" r="18" fill="#f2aa18" />
              <path d="M27 468h114" stroke="#fff9ef" strokeWidth="2" />
              <text x="28" y="496" fill="#fff9ef" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700">SLA / UX + FE</text>
            </svg>
          )}
        </div>

        <div className="artifact-nameplate">
          <span aria-hidden="true">SL</span>
          <div>
            <strong>{profile.shortName}</strong>
            <small>{dictionary.artifact.role}</small>
          </div>
        </div>
      </div>

      <div className="artifact-card artifact-card--note">
        <span className="artifact-label">{dictionary.artifact.junctionLabel}</span>
        <p>{dictionary.artifact.note}</p>
        <div className="artifact-path" aria-hidden="true">
          <span>{dictionary.artifact.path[0]}</span>
          <i />
          <span>{dictionary.artifact.path[1]}</span>
          <i />
          <span>{dictionary.artifact.path[2]}</span>
        </div>
      </div>

      <div className="artifact-seal" aria-hidden="true">
        <span>UX</span>
        <span>+</span>
        <span>FE</span>
      </div>
    </figure>
  );
}
