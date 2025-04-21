import ContentImage from "@/components/page-content/ContentImage";
import ContentWrapper from "@/components/page-content/ContentWrapper";
import HeroIntro from "@/components/header/HeroIntro";
import NavLinks from "@/components/header/NavLinks";
import Testimonials from "@/components/page-content/Testimonials";

const pageAnchors = [
  {
    href: "#experiences",
    text: "Experience",
  },
  {
    href: "#move-to-tech",
    text: "Tech",
  },
];

// Who am I?....no seriously
// Then the clip or something of Jackie Chan
export default function About() {
  return (
    <main className="flex flex-col w-full min-h-dvh items-center bg-slate-200">
      <HeroIntro
        text={
          <>
            More about{" "}
            <span className="font-amazing tracking-widest">
              <svg width="150" height="100">
                <path id="curve" d="M 2,80 Q 100,120 250,25" fill="none" />
                <text>
                  <textPath fill="yellow" href="#curve">
                    FRANK{" "}
                  </textPath>
                </text>
              </svg>
            </span>
          </>
        }
      />
      <NavLinks pageAnchors={pageAnchors} />

      <ContentWrapper id="experiences">
        <ContentImage
          imgSrc="./frankie/frankie-india-motorcycle.webp"
          imgAlt="Frankie riding a motorcycle in the greener middle belt of India"
          secondImgSrc="./work/ncc-adventure.webp"
          secondImgAlt="Frankie with his colleagues in front of Colwick Park Adventure Centre"
        />
        <section className="flex flex-col gap-4 max-w-[74ch]">
          <h2 className="ml-2 text-2xl font-bold">
            Experiences I&apos;ve enjoyed
          </h2>
          <p className="mb-4">
            I&apos;ve been coaching, instructing and sharing ideas for over 15
            years. Here&apos;s a brief history of time!
          </p>

          <details>
            <summary>Personal Training</summary>
            <p>
              I started my coaching journey with instructing Parkour whilst at
              school. I then gained my Diploma in Personal Training and coached
              clients across many gyms.
            </p>
          </details>
          <details>
            <summary>Parkour</summary>
            <p>
              Seeing the potential to get closer to &ldquo;Spider-Man&rdquo;
              status, I needed no convincing to start my training journey! Over
              many years I&apos;ve coached Parkour and other activities across
              England and in America.
            </p>
            <p>
              It still provides an awesome challenge, and a tribe I&apos;ve
              never quite had before.
            </p>
          </details>
          <details>
            <summary>Childrens Care Work</summary>
            <p>
              I spent a good chunk of time working in respite and residential
              care, with children with disabilities.
            </p>
          </details>
          <details>
            <summary>Forest School Leader</summary>
            <p>
              I built an outdoor education programme at a primary school from
              scratch, as a Forest School Leader.
            </p>
          </details>
          <details>
            <summary>Outdoor Adventure Instructor</summary>
            <p>
              I developed and delivered outdoor adventurous activities, at an
              outdoor centre and across Nottingham City for multiple years.
            </p>
          </details>
          <details>
            <summary>Health & Wellbeing Coach</summary>
            <p>I developed health and wellbeing provision for the NHS.</p>
          </details>
          <details>
            <summary>Landscape Gardener</summary>
            <p>
              I&apos;ve completed many gardening and landscaping jobs for
              private clients (all whilst travelling by bicycle too, I&apos;ll
              have you know!).
            </p>
          </details>
          <details>
            <summary>Freelance &ldquo;Guy-in-the-chair&rdquo;</summary>
            <p>
              I&apos;ve completed work for private clients which has utilised my
              technical skills; including the formatting of e-books and a
              governmental service review, as well as providing direction on
              content and editorial feedback.
            </p>
          </details>
          <details>
            <summary>Adventurer</summary>
            <p>
              And at many different points, have had my own adventures and
              learnings out of life; ranging from motorcycling across India &
              Vietnam, to cycling across Thailand, and living on a boat (or
              two)!
            </p>
          </details>
        </section>
      </ContentWrapper>

      {/* <Testimonials /> */}

      <ContentWrapper id="move-to-tech">
        <ContentImage
          imgSrc="./frankie/frankie-nordevcon-convo.webp"
          imgAlt="Frankie at Norfolk Developers Conference 2025 laughing in conversation."
          secondImgSrc="./projects/ainsley-clicker.webp"
          secondImgAlt="A screenshot of one of Frankies projects, an Ainsley Harriot themed clicker game, whilst on his software development bootcamp."
        />
        <section className="flex flex-col gap-4 max-w-[74ch]">
          <h2 className="ml-2 text-2xl font-bold">The move to tech</h2>
          <p>&ldquo;Now you work in tech? What? How? Why?&rdquo;</p>
          <p>
            I was always pretty hot with solving problems, and knew my way
            around computers.
          </p>
          <p>
            I studied Computing at A-level, but needed to scratch the coding
            itch again after years working in the outdoor industry.
          </p>
          <p>
            I thrived in{" "}
            <span className="text-purple-800 hover:text-green-400 p-1 font-bold bg-green-400 hover:bg-purple-800 rounded-md transition-all">
              Tech Educators&apos;
            </span>{" "}
            software development bootcamp, then went on to instruct with them!
          </p>
        </section>
      </ContentWrapper>

      <ContentWrapper>
        <ContentImage
          imgSrc="./frankie/frankie-parkour-mid-jump.webp"
          imgAlt="Frankie in the middle of a jump between railings, practising Parkour."
          secondImgSrc="./frankie/frankie-climbing-adam-james.webp"
          secondImgAlt="A posed photo of Frankie with two of his friends at in indoor bouldering climbing centre."
        />
        <section className="flex flex-col gap-4 max-w-[74ch]">
          <h2 className="ml-2 text-2xl font-bold">Me time</h2>
          <p>
            A rich life for me is more than just work, and over the years
            I&apos;ve ended up with a hobby of collecting hobbies!
          </p>
          <p>
            Experimenting with different activities <em>(A.K.A Play!)</em> is
            not only a human need, but also feeds into other areas of your life,
            like your work.
          </p>
          <p>
            For me, <span className="activity-highlight">Parkour</span>,{" "}
            <span className="activity-highlight">Climbing</span>,{" "}
            <span className="activity-highlight">Cycling</span> and{" "}
            <span className="activity-highlight">Gaming</span> are just a few of
            the things that keep me in and out of mischief when I&apos;m not
            writing code or communicating with people!
          </p>
        </section>
      </ContentWrapper>
    </main>
  );
}
