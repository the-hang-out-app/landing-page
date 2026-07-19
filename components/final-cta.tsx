import { PlayBadge } from "@/components/landing-bits";
import { SignupForm } from "@/components/signup-form";
import { IS_LAUNCHED } from "@/lib/config";

export function FinalCta() {
  return (
    <section className="final" id="get">
      <div className="wrap">
        <span className="kick reveal">Stop the group-chat ping-pong</span>
        <h2 className="reveal d1">
          {"The night you're all free is closer than you think."}
        </h2>
        <p className="reveal d2">
          {
            "Join the early-access list and we'll let you know the moment hang:out lands on the Play Store."
          }
        </p>
        <SignupForm />
        {IS_LAUNCHED && (
          <>
            <div className="or reveal d4">or download it now</div>
            <div className="plays reveal d4">
              <PlayBadge />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
