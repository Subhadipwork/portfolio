import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

interface ProjectDetailProps {
  project: typeof PROJECTS_CARD[0];
  slug: string;
}

export default function ProjectDetail({ project, slug }: ProjectDetailProps) {
  return (
    <>
      <NextSeo
        title={`${project.name} - Project by Subhadip Das`}
        description={project.description}
        canonical={`${siteMetadata.siteUrl}/projects/${slug}`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects/${slug}`,
          title: `${project.name} - Subhadip Das Portfolio`,
          description: project.description,
          images: [
            {
              url: `${siteMetadata.siteUrl}${project.imageUrl[0]}`,
              alt: `${project.name} - Project Image`,
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
      />
      
      <section className="mx-auto mb-40 mt-6 w-full px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-4xl">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/70 mb-8"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground md:text-5xl mb-4">
              {project.name}
            </h1>
            
            <div className="flex gap-4 mb-6">
              {project.sourceCodeHref !== "#" && (
                <a
                  href={project.sourceCodeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <Github size={20} />
                  Source Code
                </a>
              )}
              {project.liveWebsiteHref !== "#" && (
                <a
                  href={project.liveWebsiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-background transition-colors"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="grid gap-8 md:gap-12">
            <div className="grid gap-4">
              {project.imageUrl.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={image}
                    alt={`${project.name} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">About This Project</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {project.detailedDescription}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PROJECTS_CARD.map((project) => ({
    params: { 
      slug: project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') 
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = PROJECTS_CARD.find(
    (p) => p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
  );

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
      slug,
    },
  };
};