import { getTweet } from "react-tweet/api";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SENTENCES_TO_REMOVE = ["  and want x profile card, can do it?"];

export async function CustomTweet({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  let tweet = null;
  try {
    tweet = await getTweet(id);
  } catch (error) {
    console.error(`Failed to fetch tweet ${id}:`, error);
    return null;
  }

  if (!tweet) return null;

  const { user, text, id_str } = tweet;
  const tweetUrl = `https://twitter.com/${user.screen_name}/status/${id_str}`;

  let cleanText = text
    .replace(/https:\/\/t\.co\/[a-zA-Z0-9]+$/, "")
    .replace(/@[a-zA-Z0-9_]+/g, "");

  SENTENCES_TO_REMOVE.forEach((sentence) => {
    const regex = new RegExp(
      sentence.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "gi",
    );
    cleanText = cleanText.replace(regex, "");
  });

  cleanText = cleanText.trim();

  return (
    <a
      href={tweetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex h-auto w-full flex-col gap-3 rounded-3xl bg-neutral-100 p-5 dark:bg-neutral-900",
        className,
      )}
    >
      <div className="flex w-full items-start justify-between">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <Image
            src={user.profile_image_url_https}
            alt={user.name}
            width={36}
            height={36}
            className="shrink-0 rounded-full"
            unoptimized
          />
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-sm leading-tight font-medium text-neutral-900 dark:text-white">
              {user.name}
            </span>
            <span className="truncate text-sm text-neutral-500 dark:text-neutral-400">
              @{user.screen_name}
            </span>
          </div>
        </div>

        {/* X Logo */}
        <div className="mt-0.5 ml-1 shrink-0 text-neutral-900 opacity-40 transition-opacity group-hover:opacity-100 dark:text-white">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 fill-current"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </svg>
        </div>
      </div>

      <p className="text-sm leading-snug whitespace-pre-wrap text-neutral-600 dark:text-neutral-400">
        {cleanText}
      </p>
    </a>
  );
}
