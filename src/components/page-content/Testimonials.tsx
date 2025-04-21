export default function Testimonials() {
  // this thing wants to display reviews of me!
  // theyll be in individual blocks, maybe they scroll automatically
  //
  return (
    <section className="flex flex-col p-8 w-full gap-8 items-center justify-center bg-black text-white text-lg">
      <h1 className="text-3xl">What others say</h1>
      <section className="flex gap-4 overflow-scroll">
        <div className="h-24 w-24 bg-white"></div>
        <div className="h-24 w-24 bg-white"></div>
        <div className="h-24 w-24 bg-white"></div>
        <div className="h-24 w-24 bg-white"></div>
        <div className="h-24 w-24 bg-white"></div>
      </section>
    </section>
  );
}
