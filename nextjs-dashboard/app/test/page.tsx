// Server Component
export default function Page() {

  // Action
  async function create(formData: FormData) {
    'use server';


  }
 
  // Invoke the action using the "action" attribute
  return <form action={create}>
    <label> Hello ?? </label>
  </form>;
}