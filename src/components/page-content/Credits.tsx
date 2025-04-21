export default function Credits() {
  const iconCredits = [
    {
      title: "HTML Icon",
      link: "https://icons8.com/icons/set/html",
    },
    {
      title: "CSS Icon",
      link: "https://iconduck.com/icons/101876/file-type-css",
    },
    {
      title: "Javascript Icon",
      link: "https://commons.wikimedia.org/wiki/File:Javascript-shield.svg",
    },
    {
      title: "React Icon",
      link: "https://iconduck.com/icons/144846/react",
    },
    {
      title: "Next Icon",
      link: "https://iconduck.com/icons/86339/nextjs",
    },
    {
      title: "TypeScript Icon",
      link: "https://iconduck.com/icons/95017/typescript-icon",
    },
    {
      title: "Tailwind Icon",
      link: "https://commons.wikimedia.org/wiki/File:Tailwind_CSS_Logo.svg",
    },
    {
      title: "Supabase Icon",
      link: "https://supabase.com/brand-assets",
    },
    {
      title: "Clerk Icon",
      link: "https://clerk.com/design",
    },
    {
      title: "GitHub Icon",
      link: "https://www.svgrepo.com/svg/512317/github-142",
    },
    {
      title: "Link/Play Icon",
      link: "https://www.svgrepo.com/svg/436852/play-circle-fill",
    },
    {
      title: "Spider Web Corner SVG",
      link: "https://thenounproject.com/browse/icons/term/spider-web-corner/",
    },
    {
      title: "Three Dot More Icon",
      link: "https://www.flaticon.com/free-icon/more_1477110?term=three+dots&page=1&position=19&origin=tag&related_id=1477110",
    },
    {
      title: "Pointy Arrow Menu Icon",
      link: "https://www.flaticon.com/free-icon/next_709586?term=arrow&page=1&position=93&origin=search&related_id=709586",
    },
    {
      title: "Angle Bracket Icon",
      link: "https://www.orioniconlibrary.com/icon/angle-right-203?from=query&name=right%20arrow",
    },
    {
      title: "Spider 01 SVG",
      link: "https://www.svgrepo.com/svg/487823/spider",
    },
    {
      title: "Spider 02 SVG",
      link: "https://www.svgrepo.com/svg/481907/spider-4",
    },
    {
      title: "Spider 03 SVG",
      link: "https://www.svgrepo.com/svg/400766/spider",
    },
    {
      title: "Arrow Up in Square Icon",
      link: "https://www.svgrepo.com/svg/521982/arrow-up-square",
    },
    {
      title: "Home Icon",
      link: "https://www.svgrepo.com/svg/529026/home",
    },
    {
      title: "Smile Square Icon",
      link: "https://www.svgrepo.com/svg/524998/smile-square",
    },
    {
      title: "Heart Icon",
      link: "https://www.svgrepo.com/svg/529012/heart",
    },
  ];

  const codepenCredits = [
    {
      title: "Text Bounce Animation",
      link: "https://codepen.io/allanrod/pen/rgQQJb",
    },
  ];

  const otherCredits = [
    {
      title: "90s Spider-Man font, for 'Frankie' text",
      link: "https://www.dafont.com/the-amazing-spider-man.font",
    },
    {
      title: "How to do a text curve with SVGs",
      link: "https://www.shecodes.io/athena/316836-how-to-make-text-curve-like-a-smile-using-css",
    },
    {
      title: "And an SVG Path Visualiser",
      link: "https://svg-path-visualizer.netlify.app/",
    },
    {
      title: "How to make an image flipper with React (which I adapted)",
      link: "https://medium.com/@amie.n.foster/flipping-out-how-to-create-a-card-that-flips-with-react-and-css-131dba54fc96",
    },
    {
      title: "SVG to Data URI (for CSS) Converter",
      link: "https://www.svgbackgrounds.com/tools/svg-to-css/",
    },
    {
      title: "Use Grid to animate height transitions",
      link: "https://nemzes.net/posts/animating-height-auto/#the-solutions",
    },
    {
      title: "HEX code to CSS Filter converter",
      link: "https://isotropic.co/tool/hex-color-to-css-filter/",
    },
  ];

  return (
    <section className="credit-container w-full text-center pt-4">
      <h2 className="text-2xl">Click a button to visit the resource</h2>
      <article id="icons" className="credit-grid ">
        <h3 className="text-xl col-span-full justify-self-center pt-4 border-t-4 border-blue-800">
          Icons used
        </h3>
        {iconCredits.map((credit, index) => {
          return <Credit key={`credit_icon_${index}`} credit={credit} />;
        })}
        <img
          src="spider-01.svg"
          alt=""
          className="h-10 col-span-full justify-self-center"
        />
      </article>

      <article id="codepens" className="credit-grid">
        <h3 className="text-xl col-span-full justify-self-center pt-4 border-t-4 border-blue-800">
          CodePens used
        </h3>
        {codepenCredits.map((credit, index) => {
          return <Credit key={`credit_codepen_${index}`} credit={credit} />;
        })}
        <img
          src="spider-02.svg"
          alt=""
          className="h-10 col-span-full justify-self-center"
        />
      </article>

      <article id="others" className="credit-grid">
        <h3 className="text-xl col-span-full justify-self-center pt-4 border-t-4 border-blue-800">
          Other stuff used
        </h3>
        {otherCredits.map((credit, index) => {
          return <Credit key={`credit_other_${index}`} credit={credit} />;
        })}
        <img
          src="spider-03.svg"
          alt=""
          className="h-10 col-span-full justify-self-center"
        />
      </article>
    </section>
  );
}

type Credit = {
  title: string;
  link: string;
};

function Credit({ credit }: { credit: Credit }) {
  return (
    <button className="min-h-24 text-yellow-300 text-shadow-withOutlineSm text-lg shadow-black font-semibold bg-red-800 border-l-2 border-r-2 border-b-2 border-black border-opacity-50 p-4 rounded-xl hover:shadow-md hover:shadow-black hover:transform hover:scale-110 transition duration-200">
      <a href={credit.link}>{credit.title}</a>
    </button>
  );
}
