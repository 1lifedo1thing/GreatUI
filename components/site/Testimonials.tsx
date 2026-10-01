import Container from "@/components/site/Container";
import { CustomTweet } from "@/components/site/custom-tweet";
import { cn } from "@/lib/utils";

const ALL_TWEETS = [
  "2091470939993026659",
  "2089264606384627798",
  "2095816273397719083",
  "2094845114480750628",
  "2084908414040481799",
  "2100009370960679267",
  "2098245083061539075",
  "2099242588071244040",
  "2083541727026065695",
  "2079152951814496560",
  "2089635313861959946",
  "2095711222578749723",
];

const MarqueeRow = ({
  items,
  reverse = false,
  speed = "40s",
}: {
  items: string[];
  reverse?: boolean;
  speed?: string;
}) => {
  return (
    <div className="flex w-full overflow-hidden">
      <div
        className={cn(
          "flex shrink-0 items-stretch gap-4 hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-right" : "animate-marquee-left",
        )}
        style={{ animationDuration: speed }}
      >
        {[...items, ...items, ...items].map((id, idx) => (
          <div
            key={`${id}-${idx}`}
            className="flex w-[280px] shrink-0 items-stretch sm:w-[320px]"
          >
            <CustomTweet id={id} className="h-full flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Testimonials() {
  const row1 = ALL_TWEETS.slice(0, 4);
  const row2 = ALL_TWEETS.slice(4, 8);
  const row3 = ALL_TWEETS.slice(8, 12);

  return (
    <div className="relative mx-auto w-full max-w-[1400px] pb-10 md:pb-16">
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333333%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-33.333333%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
      <Container className="relative pt-10 pb-4 md:pt-16">
        <div className="flex flex-col items-start text-left">
          <h2 className="mt-2 w-full text-3xl leading-[1.1] font-semibold tracking-tight text-balance text-neutral-900 sm:text-4xl md:text-5xl dark:text-neutral-300">
            Loved by developers.
          </h2>
          <p className="mt-2 max-w-4xl text-base text-balance text-neutral-600 sm:text-lg dark:text-neutral-400">
            See what builders are saying about Great UI.
          </p>
        </div>
      </Container>

      <div className="relative flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <MarqueeRow items={row1} speed="45s" />
        <MarqueeRow items={row2} speed="55s" reverse />
        <MarqueeRow items={row3} speed="40s" />
      </div>
    </div>
  );
}
