interface ProjectDetails {
  name: string;
  image: string;
  description: string;
  techStack: string[];
  projectUrl?: string;
}

export default function ProjectDisplayBox({
  name,
  image,
  description,
  techStack,
  projectUrl,
}: ProjectDetails) {
  return (
    <div className="rounded-lg flex items-center justify-center min-h-[300px] sm:min-h-[400px] mb-4 ">
      <div
        className="text-[#c0c0c0] flex flex-col rounded-2xl relative overflow-hidden  box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none w-full h-[300px] sm:h-[400px] col-span-12 sm:col-span-7"
        tabIndex={-1}
      >
        <div
          className="relative shadow-black/5 shadow-none rounded-large"
          style={{ maxWidth: "fit-content" }}
        >
          <img
            src={
              image ||
              "https://cdn.sanity.io/images/kixov3wn/production/9bb656fa64cf18864469192e664c04f194b61bac-1640x924.png"
            }
            className="relative opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large z-0 object-cover max-sm:h-[300px]"
            alt={name || "project background"}
            data-loaded="true"
          />
        </div>

        <div className="h-auto flex w-full overflow-hidden color-inherit subpixel-antialiased rounded-b-large backdrop-blur backdrop-saturate-150 absolute bg-black/40 flex-col items-start gap-2 sm:gap-4 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-3 sm:p-5">
          <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-r from-black to-transparent -z-10" />
          <div className="flex flex-wrap gap-2 sm:gap-4 ">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="px-2 py-1 rounded-lg border border-border text-text text-xs sm:text-sm  "
              >
                {tech || "Tech"}
              </div>
            ))}
          </div>
          <div className="flex flex-grow gap-2 items-center justify-between w-full">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-sm sm:text-md text-text font-bold">{name}</p>
                <p className="text-xs sm:text-tiny text-white/60 max-sm:hidden">
                  {description}
                </p>
              </div>
            </div>

            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-white transitions hover:scale-105 flex-shrink-0"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
