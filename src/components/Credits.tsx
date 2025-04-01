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
  ];

  return (
    <div>
      <p>Icons I used</p>
      {iconCredits.map((credit, index) => {
        return (
          <p key={`credit_${index}`}>
            {credit.title}: {credit.link}
          </p>
        );
      })}

      <p>CodePens I used</p>
      {codepenCredits.map((credit, index) => {
        return (
          <p key={`credit_${index}`}>
            {credit.title}: {credit.link}
          </p>
        );
      })}

      <p>Other stuff I used</p>
      {otherCredits.map((credit, index) => {
        return (
          <p key={`credit_${index}`}>
            {credit.title}: {credit.link}
          </p>
        );
      })}
    </div>
  );
}
