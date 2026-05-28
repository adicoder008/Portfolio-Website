import React from 'react'
import { featuredProjects } from '../data/portfolio'
import FeaturedProjectCard from './FeaturedProjectCard'
import SectionHeader from './SectionHeader'

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative z-[1] scroll-mt-24 border-t border-violet-500/[0.08] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Featured work"
          title="Selected projects"
          description="Four products — travel-tech, AI analytics, healthcare IoT, and internal tooling."
        />

        {/* Bento grid: all 4 cards in one viewport on desktop */}
        <div className="projects-bento mt-8">
          {featuredProjects.map((project, i) => (
            <FeaturedProjectCard
              key={project.id}
              {...project}
              index={i}
              compact
              className={project.bentoClass ?? ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
