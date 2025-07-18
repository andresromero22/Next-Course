import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from '@/app/lib/data';


export default async function Page() {
  const totalCustomers = await fetchFilteredCustomers('')
  return (
    <main>
      <CustomersTable customers={totalCustomers}/>
    </main>
  )
}