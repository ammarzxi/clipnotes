import LandingHero from '@/app/components/landing/Hero.js'
import LandingFeatures from '@/app/components/landing/Features.js'
import LandingWorkspace from '@/app/components/landing/Workspace.js'
import LandingProcess from '@/app/components/landing/Process.js'
import LandingLearnMore from '@/app/components/landing/LearnMore.js'

export default function Landing() {
  return (
    <>
      <LandingHero />
      <LandingFeatures />
      <LandingWorkspace />
      <LandingProcess />
      <LandingLearnMore />
    </>
  )
}