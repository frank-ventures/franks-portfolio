import ContentWrapper from "@/components/ContentWrapper";
import IntroBar from "@/components/header/IntroBar";
import QuickLinks from "@/components/QuickLinks";

// Who am I?....no seriously
// Then the clip or something of Jackie Chan
export default function About() {
  return (
    <main className="flex flex-col w-full min-h-dvh items-center bg-slate-200">
      <IntroBar text={"More about Frank"} />
      <QuickLinks />
      <h1>Hey, this page under construction, woah get outta here!!</h1>

      <ContentWrapper>
        <p>An intro</p>
      </ContentWrapper>

      <ContentWrapper>
        <div>
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

      <ContentWrapper>
        <div>
          <p>
            Ive been coaching, instructing and sharing ideas for over 15 years.
          </p>
          <p>My experience has involved:</p>
          <ul className="p-5 list-disc">
            <li>Coaching parkour across England and in America</li>
            <li>
              Working with children with disabilities, across respite and
              residential care
            </li>
            <li>Building an outdoor education programme at a school</li>
            <li>
              Developing and delivering outdoor adventurous activities, at an
              outdoor centre and - across Nottingham City
            </li>
            <li>Gardening and landscaping for private clients</li>
            <li>Developing health and wellbeing provision for the NHS</li>
            <li>
              Enjoying my own adventures and learning from life; motorcycling
              across India & Vietnam and Cycling across Thailand.
            </li>
          </ul>
        </div>
      </ContentWrapper>
    </main>
  );
}
