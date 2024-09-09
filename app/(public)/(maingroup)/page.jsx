import {
  OffersSection,
  WelcomeSection,
  WorkflowSection,
  NewsLetterSection,
  ProjectAndCaseStudy,
  Testimonials,
} from "@/components/home/sections";
import ExploreTechnologies from "@/components/home/sections/ExploreTechnologies";
import Occasions from "@/components/home/sections/Occasions";

export default function Home() {
  return (
    <main className="h-full">
      <WelcomeSection />
      <OffersSection />
      <WorkflowSection />
      {/* <ProjectAndCaseStudy /> */}
      {/* <ExploreTechnologies /> */}
      {/* <Occasions /> */}
      {/* <NewsLetterSection /> */}
      {/* <NewsLetterSection /> */}
      {/* <ProjectAndCaseStudy/> */}
      {/* <ExploreTechnologies /> */}
      <Testimonials />
    </main>
  );
}
