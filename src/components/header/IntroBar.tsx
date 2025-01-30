export default function IntroBar({ text }: { text: string }) {
  return (
    <div className="bg-red-600 border-2 border-black p-10 w-full">
      <h1 className="text-5xl text-center text-yellow-300 text-shadow-withOutlineLg shadow-black ">
        {text}
      </h1>
    </div>
  );
}
