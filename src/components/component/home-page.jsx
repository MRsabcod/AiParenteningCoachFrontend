/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/kwXeU84eIso
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

export function HomePage() {
  return (
    (
    <div className="flex min-h-screen">
      <aside className="w-64 p-4 bg-white border-r">
        <div className="flex items-center mb-6">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="Logo" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
          <span className="ml-2 text-xl font-bold">AI Parenting</span>
        </div>
        <Select>
          <SelectTrigger id="child" className="w-full">
            <SelectValue placeholder="Child #1" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="child1">Child #1</SelectItem>
            <SelectItem value="child2">Child #2</SelectItem>
          </SelectContent>
        </Select>
        <nav className="mt-6 space-y-2">
          <Link
            href="#"
            className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100"
            prefetch={false}>
            <UserIcon className="w-5 h-5 mr-2" />
            Chat with your AI Coach
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100"
            prefetch={false}>
            <CalendarIcon className="w-5 h-5 mr-2" />
            Child Schedule Generator
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100"
            prefetch={false}>
            <BookIcon className="w-5 h-5 mr-2" />
            Stories Generator
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100"
            prefetch={false}>
            <WeightIcon className="w-5 h-5 mr-2" />
            Baby weight tracker
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100"
            prefetch={false}>
            <WeightIcon className="w-5 h-5 mr-2" />
            Baby height tracker
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100"
            prefetch={false}>
            <ContactIcon className="w-5 h-5 mr-2" />
            Book Online Consultation
          </Link>
        </nav>
        <div className="mt-6 space-y-2">
          <Link
            href="#"
            className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100"
            prefetch={false}>
            <MoveUpIcon className="w-5 h-5 mr-2" />
            Upgrade to Premium
            <Badge variant="secondary" className="ml-2">
              New
            </Badge>
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100"
            prefetch={false}>
            <HandHelpingIcon className="w-5 h-5 mr-2" />
            Get Help
          </Link>
          <Link
            href="#"
            className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100"
            prefetch={false}>
            <SettingsIcon className="w-5 h-5 mr-2" />
            Setting
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-6 bg-gray-50">
        <header className="flex items-center justify-between mb-6">
          <nav className="flex space-x-4">
            <Link href="#" className="text-lg font-semibold text-primary" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-lg text-gray-700" prefetch={false}>
              Chat With AI
            </Link>
            <Link href="#" className="text-lg text-gray-700" prefetch={false}>
              Child Schedule Generator
            </Link>
            <div className="relative">
              <button className="text-lg text-gray-700">Tools</button>
              <div className="absolute left-0 hidden mt-2 bg-white border rounded shadow-lg">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  prefetch={false}>
                  Tool 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  prefetch={false}>
                  Tool 2
                </Link>
              </div>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <HeartIcon className="w-5 h-5 text-red-500" />
              <span className="ml-1 text-lg">7</span>
            </div>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="Admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="flex space-x-4 mb-6">
          <Button variant="default">All</Button>
          <Button variant="outline">Sleep</Button>
          <Button variant="outline">Down Syndrome</Button>
          <Button variant="outline">Supplementary Food</Button>
          <Button variant="outline">Breast Feeding</Button>
          <Button variant="outline">Physiology</Button>
        </div>
        <section className="space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Sleep</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Array(4)
                .fill()
                .map((_, i) => (
                  <Card key={i} className="bg-primary text-primary-foreground">
                    <CardHeader>
                      <BugIcon className="w-8 h-8" />
                      <CardTitle>Night Walking Problem</CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Link href="#" className="flex items-center space-x-1" prefetch={false}>
                        <span>Learn more</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Down Syndrome</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Array(4)
                .fill()
                .map((_, i) => (
                  <Card key={i} className="bg-primary text-primary-foreground">
                    <CardHeader>
                      <BugIcon className="w-8 h-8" />
                      <CardTitle>Night Walking Problem</CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Link href="#" className="flex items-center space-x-1" prefetch={false}>
                        <span>Learn more</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Supplementary Food</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Array(4)
                .fill()
                .map((_, i) => (
                  <Card key={i} className="bg-primary text-primary-foreground">
                    <CardHeader>
                      <BugIcon className="w-8 h-8" />
                      <CardTitle>Night Walking Problem</CardTitle>
                      <CardDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Link href="#" className="flex items-center space-x-1" prefetch={false}>
                        <span>Learn more</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function ArrowRightIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>)
  );
}


function BookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function BugIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path
        d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>)
  );
}


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function ContactIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>)
  );
}


function HandHelpingIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path
        d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 13 6 6" />
    </svg>)
  );
}


function HeartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>)
  );
}


function MoveUpIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 6L12 2L16 6" />
      <path d="M12 2V22" />
    </svg>)
  );
}


function SettingsIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>)
  );
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}


function WeightIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <path
        d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />
    </svg>)
  );
}