import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';


export default async function Unauthorized() {
   
   return (
      <main className='flex items-center justify-center w-full min-h-[300px]'>
         <div className='relative flex items-center justify-center flex-col border p-12 shadow-md gap-2 dark:border-white sm:text-xl sm:font-semibold '>
            <h1>401 - Unauthorized User</h1>
            <p className='max-sm:text-xs'>Please log in to access this page.</p>
            <div>
               <SignedIn>
                  <UserButton />
               </SignedIn>
            </div>
            <div>
               <SignedOut>
                  <div className='flex items-center gap-2 '>
                     <SignInButton>
                        <Button variant={'outline'}>Login</Button>
                     </SignInButton>
                     <SignUpButton>
                        <Button>Signup</Button>
                     </SignUpButton>
                  </div>
               </SignedOut>
            </div>
         </div>

      </main>
   )
}