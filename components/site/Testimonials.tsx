import Container from "@/components/site/Container";
import { CustomTweet } from "@/components/site/custom-tweet";

const ALL_TWEETS = [
  "2091470939993026659",
  "2089264606384627798",
  "2094845114480750628",
  "2095816273397719083",
  "2098245083061539075",
  "2084908414040481799",
  "2100009370960679267",
  "2099242588071244040",
  "2089635313861959946",
  "2083541727026065695",
  "2095711222578749723",
];

export default function Testimonials() {
  return (
    <div className="relative mx-auto max-w-[1400px]">
      <Container className="relative py-10 md:py-16">
        <div className="flex flex-col items-start text-left">
          <h2 className="mt-2 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-neutral-950 sm:text-5xl md:text-6xl dark:text-white">
            Loved by developers.
          </h2>
          <p className="mt-4 max-w-2xl text-base tracking-normal text-neutral-600 sm:text-lg dark:text-neutral-400">
            See what builders are saying about Great UI.
          </p>
        </div>

        <div className="mt-16 columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
          {ALL_TWEETS.map((id) => (
            <div key={id} className="mb-4 break-inside-avoid">
              <CustomTweet id={id} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
