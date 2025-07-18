import CustomersTable from "@/app/ui/customers/table";
import { Suspense } from "react";


export default async function Page(
  {
    searchParams : searchParamsPromise
  }:{
    searchParams?: Promise<{
      query?: string
    }>
  }) {

  const searchParams = await searchParamsPromise
  const query = searchParams?.query || ""

  return (
    <main>
      <Suspense>
        <CustomersTable query={query}/>
      </Suspense>
    </main>
  )
}