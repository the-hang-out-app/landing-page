import Link from "next/link";
import {
  InstagramLogo,
  TiktokLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { LensMark } from "@/components/landing-bits";
import { CONTACT_EMAIL, SITE_URL, SOCIAL_LINKS } from "@/lib/config";

const SOCIALS = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram, Icon: InstagramLogo },
  { label: "TikTok", href: SOCIAL_LINKS.tiktok, Icon: TiktokLogo },
  { label: "X (Twitter)", href: SOCIAL_LINKS.x, Icon: XLogo },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="top">
          <div className="brandcol">
            <Link
              className="wm"
              href="/"
              style={{
                fontSize: 24,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <LensMark id="foot" width={34} height={24} />
              hang<span className="c">:</span>out
            </Link>
            <p>
              The availability radar for friends who work different hours. Find
              the overlap — then go.
            </p>
          </div>
          <div className="cols">
            <div className="col">
              <h4>Product</h4>
              <Link href="/#how">How it works</Link>
              <Link href="/#language">The grid</Link>
              <Link href="/#features">Features</Link>
              <Link href="/#privacy">Privacy</Link>
            </div>
            <div className="col">
              <h4>Legal</h4>
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/delete-account">Delete your account</Link>
            </div>
            <div className="col">
              <h4>Contact</h4>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <div className="socials">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={22} weight="regular" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>© {new Date().getFullYear()} hang:out · Made for Android</span>
          <span>
            <a href={SITE_URL} style={{ color: "inherit" }}>
              the.hang-out.app
            </a>{" "}
            · Find the overlap.
          </span>
        </div>
      </div>
    </footer>
  );
}
