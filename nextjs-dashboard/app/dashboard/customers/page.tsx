import CustomersTable from "@/app/ui/customers/table";
import { Suspense } from "react";


export default async function Page() {
  return (
    <main>
      <Suspense>
        <CustomersTable/>
      </Suspense>
    </main>
  )
}