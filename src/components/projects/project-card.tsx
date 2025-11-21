import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

import Corosel from "@/components/utility/corosel";
import { GithubIcon } from "@/components/icons";

export interface ProjectCardProps {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      className="w-full overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md transition-shadow duration-150 hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg"
    >
      <Corosel images={props.imageUrl} aspectRatio={2.1} />
      <div className="p-3 text-foreground sm:p-4">
        <div className="flex items-center gap-3">
          <span className="relative h-5 w-5">
            <Image src={props.favicon} alt="logo" fill />
          </span>
          <span className="text-sm font-semibold">{props.name}</span>
        </div>
        <div className="mt-3">
          <p className="text-xs md:text-sm">{props.description}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <Link
            href={`/projects/${props.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "")}`}
            className="text-xs font-medium text-accent underline hover:text-accent/70 md:text-sm"
          >
            View Details →
          </Link>
          <div className="flex items-center gap-4">
            {props.sourceCodeHref !== "#" && (
              <a
                href={props.sourceCodeHref}
                target="_blank"
                className="flex items-center gap-1 text-xs underline md:text-sm"
              >
                <GithubIcon className="h-4 w-4" /> Code
              </a>
            )}
            {props.liveWebsiteHref && props.liveWebsiteHref !== "#" && (
              <a
                href={props.liveWebsiteHref}
                target="_blank"
                className="flex items-center gap-1 text-xs underline md:text-sm"
              >
                <FiExternalLink className="h-4 w-4" /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
