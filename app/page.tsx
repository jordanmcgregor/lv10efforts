import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Home() {
  return (
    <>
      {/* <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
      </main> */}
      <div className="p-16">
        <span className="underline">Jeff's Organizations</span>
        <ul className="list-disc">
          <li>
            <a className="text-blue-500 underline hover:text-blue-700" href="/organization/relief-society/efforts">Relief Society</a>
          </li>
          <li>
            <a className="text-blue-500 underline hover:text-blue-700" href="/organization/primary/efforts">Primary</a>
          </li>
          <li>
            <a className="text-blue-500 underline hover:text-blue-700" href="/organization/temple-family-history/efforts">Temple & Family History</a>
          </li>
        </ul>
      </div>
      <div className="p-16">
        <span className="underline">Jordan's Organizations</span>
        <ul className="list-disc">
          <li>
            <a className="text-blue-500 underline hover:text-blue-700" href="/organization/elders-quorum/efforts">Elders Quorum</a>
          </li>
          <li>
            <a className="text-blue-500 underline hover:text-blue-700" href="/organization/missionary/efforts">Missionary</a>
          </li>
          <li>
            <a className="text-blue-500 underline hover:text-blue-700" href="/organization/sunday-school/efforts">Sunday School</a>
          </li>
        </ul>
      </div>
      <div className="p-16">
        <span className="underline">Branch Presidency Links</span>
        <ul className="list-disc">
          <li>
            <a className="text-blue-500 underline hover:text-blue-700" href="/organization/first-counselor/efforts">First Counselor</a>
          </li>
          <li>
            <a className="text-blue-500 underline hover:text-blue-700" href="/organization/second-counselor/efforts">Second Counselor</a>
          </li>
          <li>
            <a className="text-blue-500 underline hover:text-blue-700" href="/organization/executive-secretary/efforts">Executive Secretary</a>
          </li>
          <li>
            <a className="text-blue-500 underline hover:text-blue-700" href="/organization/clerk/efforts">Clerk</a>
          </li>
        </ul>
      </div>
    </>
  );
}
