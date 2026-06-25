"use client";

import { useSite } from "@/lib/i18n";
import { whatsappHref, telLink } from "@/lib/content";
import { WhatsAppIcon, PhoneIcon } from "./Icons";

/** Fixed bottom action bar — shown on small screens so contact is always one tap away. */
export default function StickyContactBar() {
  const { t } = useSite();
  const wa = whatsappHref(t.contact.whatsappMessage);

  return (
    <div className="sticky-bar">
      <a className="sticky-bar__btn sticky-bar__btn--wa" href={wa} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon width={20} height={20} />
        {t.buttons.whatsapp}
      </a>
      <a className="sticky-bar__btn sticky-bar__btn--call" href={telLink}>
        <PhoneIcon width={20} height={20} />
        {t.buttons.call}
      </a>
    </div>
  );
}
