import Credits from "@/components/Credits";
import HeroIntro from "@/components/header/HeroIntro";
import NavLinks from "@/components/header/NavLinks";

const pageAnchors = [
  {
    href: "#icons",
    text: "Icons",
  },
  {
    href: "#codepens",
    text: "CodePens",
  },
  {
    href: "#others",
    text: "Others",
  },
];

export default function CreditsPage() {
  return (
    <>
      <main className="flex flex-col w-full min-h-dvh items-center bg-slate-200">
        <HeroIntro
          text={
            <>
              Things used and useful{" "}
              <span className="font-amazing tracking-widest">
                <svg width="150" height="100">
                  <path id="curve" d="M 2,80 Q 100,120 250,25" fill="none" />
                  <text>
                    <textPath fill="yellow" href="#curve">
                      LINKS
                    </textPath>
                  </text>
                </svg>
              </span>
            </>
          }
        />
        <NavLinks pageAnchors={pageAnchors} />

        <Credits />
      </main>
    </>
  );
}
