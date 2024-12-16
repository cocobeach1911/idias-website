import {NavigationMenuDemo} from "@/components/home/nav";
import {Button} from "@/components/ui/button";

const data = {
  main: {
    title: "Reimagine data lake search and analytics!",
    description: "Index your vector, text, geospatial and JSON data for the most efficient hybrid search and real-time analytics at any scale",
  },
}



const Nav = () => {
  return (
    <nav className="z-20 mx-auto w-full px-3 relative max-w-screen-lg lg:px-4 xl:px-0">
      <div className="flex h-14 items-center justify-between">
        <div className="font-mono font-bold text-blue-600">
          Idias
        </div>
        <NavigationMenuDemo/>
        <div>
          <Button size="sm" className="font-semibold">Join waitlist</Button>
        </div>
      </div>

    </nav>
  )
}

const MainSection = () => {

  return (
    <div className="relative mx-auto mt-4 w-full max-w-screen-lg overflow-hidden rounded-2xl bg-neutral-50 p-6  sm:p-12 sm:px-12">


      <svg className="pointer-events-none absolute inset-[unset] left-1/2 top-0 w-[1200px] -translate-x-1/2 text-neutral-300 [mask-image:linear-gradient(transparent,black_70%)]" width="100%" height="100%"><defs><pattern id="grid-:R137qnja:" x="0" y="-53.5" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="transparent" stroke="currentColor" stroke-width="1"></path></pattern></defs><rect fill="url(#grid-:R137qnja:)" width="100%" height="100%"></rect></svg>
      <div className="z-10 relative">
        <h1 className="text-4xl font-semibold">{data.main.title}</h1>
        <h4  className="text-2xl pt-3">{data.main.description}</h4>
        <b>Unlock Unmatched Scalability, Compatibility, and Data Accessibility</b>
        <p>Empower your data infrastructure to adapt, scale, and deliver without compromise.</p>
        <div className="pt-24 font-semibold flex gap-2">
          <Button size="sm" className="font-semibold">Join waitlist</Button>
          <Button variant="outline" className="">Read the whitepaper</Button>
        </div>
      </div>
    </div>
  )
}

const FeatureSection = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold ">Powerful features for <span className="font-mono font-semibold text-blue-600">Idias</span> Search Lake</h1>

      <div className="grid grid-cols-2 gap-8 pt-4">

        <div className="relative h-full break-inside-avoid rounded-2xl border border-neutral-200/50 bg-neutral-50 [--accent-color:#20808D]">
          <div className="px-8 py-4">
              <div>
                <p>Scalability & Cost Efficiency</p>
                <ul>
                  <li><b>Cloud-Native Architecture</b> - Leverages the modern separation of compute and storage, ensuring flexibility and optimized resource utilization.</li>
                  <li><b>Eliminates Data Replication</b> - Utilizes cost-effective, durable storage solutions like Amazon S3, reducing overhead while maintaining reliability.</li>
                  <li><b>Node-Agnostic Data Management</b> - Decouples data from compute nodes, eliminating state dependencies, enabling seamless and safe scaling without constraints.</li>                  
                </ul>
                
              </div>
          </div>
        </div>

        <div className="relative h-full break-inside-avoid rounded-2xl border border-neutral-200/50 bg-neutral-50 [--accent-color:#20808D]">
          <div className="px-8 py-4">
            <div>
              <p>Seamless Compatibility</p>
              <p><b>Full Elasticsearch API Compatibility</b> - 100% alignment with Elasticsearch (ES) query APIs ensures a smooth integration experience for developers and existing workflows.</p>
              Serverless ArchitectScalability & Cost Efficiencyure. Scale without limits.
            </div>
          </div>
        </div>

        <div className="relative h-full break-inside-avoid rounded-2xl border border-neutral-200/50 bg-neutral-50 [--accent-color:#20808D]">
          <div className="px-8 py-4">
            <div>Unparalleled Data Accessibility</div>
            <ul>
              <li><b>Beyond the Elasticsearch API</b> - Access data directly without relying exclusively on Elasticsearch, providing unparalleled flexibility.</li>
              <li><b>Efficient Data Utilization</b> - No need to maintain duplicate data for non-production purposes like reporting or analytics, reducing redundancy and cost.</li>
              <li><b>Flexible Data Views</b> - ES becomes just one perspective on your data. Other integrations include:
                 <ul>
                  <li><b>Trino (SQL Engine)</b> - Power advanced analytics and reporting with seamless compatibility with tools like Tableau.</li>
                  <li><b>RAG Solutions for AI</b> - Enrich large language models (LLMs) with real-time, context-aware insights.</li>
                 </ul>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="w-full">


      <Nav/>

      <div className=" mx-auto w-full px-3 relative max-w-screen-lg lg:px-4 xl:px-0">
        <div className="flex gap-16 flex-col">
          <MainSection />

          <FeatureSection />

        </div>

      </div>
    </div>
  );
}
