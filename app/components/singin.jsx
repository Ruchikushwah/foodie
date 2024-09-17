
import { signIn } from "@/auth"
 
export function SignIn() {
  return (
  <div className="flex flex-1 h-screen bg-red-300 justify-center items-center">
      <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="border bg-white text-red-300 ">Signin with Google</button>
    </form>
  </div>
  )
} 