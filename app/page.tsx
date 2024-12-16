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
                <span className="font-bold underline underline-offset-2 pr-1.5">
                  100%
                </span>
                compatibility with Elasticsearch/OpenSearch
              </div>
          </div>
        </div>

        <div className="relative h-full break-inside-avoid rounded-2xl border border-neutral-200/50 bg-neutral-50 [--accent-color:#20808D]">
          <div className="px-8 py-4">
            <div>
              Serverless Architecture. Scale without limits.

            </div>
          </div>
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
