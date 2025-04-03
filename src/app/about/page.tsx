import ContentImage from "@/components/ContentImage";
import ContentWrapper from "@/components/ContentWrapper";
import IntroBar from "@/components/header/IntroBar";
import MoreDetails from "@/components/MoreDetails";
import QuickLinks from "@/components/QuickLinks";

// Who am I?....no seriously
// Then the clip or something of Jackie Chan
export default function About() {
  return (
    <main className="flex flex-col w-full min-h-dvh items-center bg-slate-200">
      <IntroBar
        text={
          <>
            <p className="flex flex-col items-center">
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
            </p>
          </>
        }
      />
      <QuickLinks />

      <ContentWrapper>
        <ContentImage
          imgSrc="./frankie/frankie-india-motorcycle.jpg"
          imgAlt="Frankie riding a motorcycle in the greener middle belt of India"
          secondImgSrc="./work/ncc-adventure.jpg"
          secondImgAlt="Frankie with his colleagues in front of Colwick Park Adventure Centre"
        />
        <section className="flex flex-col gap-4 max-w-[74ch]">
          <h2 className="ml-2 text-2xl font-bold">
            Experiences I&apos;ve enjoyed
          </h2>
          <p className="">
            I&apos;ve been coaching, instructing and sharing ideas for over 15
            years.
          </p>
          <MoreDetails>
            <ul className="flex flex-col gap-4 max-w-[74ch]">
              <li>
                I started with instructing Parkour whilst at school, and also
                gained my Diploma in Personal Training.
              </li>
              <li>
                Over many years I&apos;ve coached Parkour and other activities
                across England and in America.
              </li>
              <li>
                I spent a good chunk of time working in respite and residential
                care, with children with disabilities.
              </li>
              <li>
                I built an outdoor education programme at a primary school as a
                Forest School Leader.
              </li>
              <li>
                I developed and delivered outdoor adventurous activities, at an
                outdoor centre and across Nottingham City for multiple years.
              </li>
              <li>
                I&apos;ve completed many gardening and landscaping jobs for
                private clients (all whilst travelling by bicycle too, I&apos;ll
                have you know!).
              </li>
              <li>I developed health and wellbeing provision for the NHS.</li>
              <li>
                And at many different points, have had my own adventures and
                learnings out of life; ranging from motorcycling across India &
                Vietnam, to cycling across Thailand, and living on a boat!
              </li>
            </ul>
          </MoreDetails>
        </section>
      </ContentWrapper>
      <ContentWrapper>
        <ContentImage
          imgSrc="./frankie/frankie-nordevcon-convo.jpg"
          imgAlt="Frankie at Norfolk Developers Conference 2025 laughing in conversation."
          secondImgSrc="./projects/ainsley-clicker.png"
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
          imgSrc="./frankie/frankie-parkour-mid-jump.jpg"
          imgAlt="Frankie in the middle of a jump between railings, practising Parkour."
          secondImgSrc="./frankie/frankie-climbing-adam-james.jpg"
          secondImgAlt="A posed photo of Frankie with two of his friends at in indoor bouldering climbing centre."
        />
        <p>Hobbies and interests. Parkour, climbing, cycling, gaming</p>
      </ContentWrapper>

      <ContentWrapper>
        <div className="max-w-[74ch]">
          <p className="p-2 font-bold">Get rid of and rewrite a lot of this</p>
          <p>
            I follow my interests, do things I find fun and try to make things a
            little better than how I found them.
          </p>
          <p>
            I&apos;m a coach and instructor. An ideas communicator. A writer.
          </p>
          <p>
            I&apos;m a problem solver. An environment designer. A systems
            creator.
          </p>
          <p>A health, wellness, lifestyle & action instructor.</p>
          <p>A good time delivery driver.</p>
          <p>I cycle, climb, and I&apos;ve trained parkour since 2008.</p>
          <p>
            I like to ask better questions to make life simpler, more rewarding
            and more fun.
          </p>
          <p>
            I&apos;ve sunk hundreds if not thousands of hours into podcasts,
            books and videos, trying to find those questions, habits and
            mindsets which lead to a better life.
          </p>
          <p>
            If you want the short version, the cheat code, it&apos;s this;
            &quot;Move your body and soul. Observe your thoughts. Remember one
            day you&apos;ll die.&quot;
          </p>
        </div>
      </ContentWrapper>
    </main>
  );
}
