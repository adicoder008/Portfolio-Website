import React from 'react'
import { featuredProjects } from '../data/portfolio'
import FeaturedProjectCard from './FeaturedProjectCard'
import SectionHeader from './SectionHeader'

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative z-[1] scroll-mt-24 border-t border-violet-500/[0.08] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Featured work"
          title="Selected projects"
          description="Tiered by impact — distributed systems, concurrent pipelines, and production products at a glance."
        />

        {/* 4-col grid · Row 1: NetPulse (2) + Sentinel + OnQuest · Row 2: four supporting projects */}
        <div className="projects-grid mt-6">
          {featuredProjects.map((project, i) => (
            <FeaturedProjectCard
              key={project.id}
              {...project}
              index={i}
              tier={project.tier ?? 'standard'}
              className={project.gridClass ?? ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
