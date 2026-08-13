import Image from "next/image";

import { EditorSlot } from "@/components/editor-slot";
import { CheckIcon } from "@/components/icons";
import type { ProcessStep } from "@/data/portfolio";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { assetPath } from "@/lib/asset-path";

type CaseStudyProcessProps = {
  steps: ProcessStep[];
  locale: Locale;
};

export function CaseStudyProcess({ steps, locale }: CaseStudyProcessProps) {
  const dictionary = getDictionary(locale);

  return (
    <ol className="case-process">
      {steps.map((step, index) => (
        <li className="case-step" id={step.id} key={step.id}>
          <div className="case-step__rail" aria-hidden="true">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <i />
          </div>

          <div className="case-step__content">
            <header className="case-step__heading">
              <p>{step.phase}</p>
              <h3>{step.title}</h3>
              <strong>{step.summary}</strong>
            </header>

            <div className="case-step__body">
              <div className="case-step__narrative">
                {step.narrative.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {step.activities?.length ? (
                <aside className="case-step__list">
                  <h4>{dictionary.processComponent.activities}</h4>
                  <ul>
                    {step.activities.map((activity) => (
                      <li key={activity}>
                        <CheckIcon />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              ) : null}

              {step.decisions?.length ? (
                <div className="case-step__decisions">
                  <h4>{dictionary.processComponent.decisions}</h4>
                  {step.decisions.map((decision) => (
                    <blockquote key={decision}>{decision}</blockquote>
                  ))}
                </div>
              ) : null}
            </div>

            {step.media?.length ? (
              <div className="case-step__media">
                {step.media.map((item) => (
                  <figure key={item.src}>
                    <Image
                      src={assetPath(item.src)}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 760px) 100vw, 42vw"
                    />
                    {item.caption ? <figcaption>{item.caption}</figcaption> : null}
                  </figure>
                ))}
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
