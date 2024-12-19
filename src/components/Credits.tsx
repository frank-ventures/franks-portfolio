export default function Credits() {
  const iconCredits = [
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
      title: "CSS Icon",
      link: "https://iconduck.com/icons/101876/file-type-css",
    },
    {
      title: "React Icon",
      link: "",
    },
    {
      title: "React Icon",
      link: "",
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
