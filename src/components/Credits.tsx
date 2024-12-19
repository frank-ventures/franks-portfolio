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
  ];

  return (
    <div>
      <p>Stuff I used</p>
      {iconCredits.map((credit, index) => {
        return (
          <p key={`credit_${index}`}>
            {credit.title}: {credit.link}
          </p>
        );
      })}
    </div>
  );
}
