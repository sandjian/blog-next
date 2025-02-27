import { TextGenerateEffect } from "../ui/text-generate-effect";

function AboutUsHero() {
  const words = `Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods.`;
  return (
    <section className="w-full pt-6">
      <div className="mx-auto w-full container space-y-12">
        <div className="relative isolate z-20 bg-primary flex flex-col items-center justify-center space-y-4 text-center mx-auto w-full max-w-7xl h-[28rem] rounded-2xl">
          <div className="gap-4 bg-accent rounded-2xl p-2 text-accent-foreground">
            About Us
          </div>
          <div className="space-y-2 z-50">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-foreground">
              Explora, Aprende y Comparte
            </h1>
            <TextGenerateEffect duration={4} filter={false} words={words} />
          </div>
        </div>

      </div>
    </section>
  );
}

export { AboutUsHero };



