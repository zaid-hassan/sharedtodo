import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'

const myProjects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium nulla, animi ab consectetur, id nisi iusto laboriosam placeat repellat non rerum culpa. Quae, earum asperiores nostrum recusandae dicta cumque facilis vero.',
    url: '/project/project1'
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium nulla, animi ab consectetur, id nisi iusto laboriosam placeat repellat non rerum culpa. Quae, earum asperiores nostrum recusandae dicta cumque facilis vero.',
    url: '/project/project2'
  },
  {
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium nulla, animi ab consectetur, id nisi iusto laboriosam placeat repellat non rerum culpa. Quae, earum asperiores nostrum recusandae dicta cumque facilis vero.',
    url: '/project/project3'
  },
  {
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium nulla, animi ab consectetur, id nisi iusto laboriosam placeat repellat non rerum culpa. Quae, earum asperiores nostrum recusandae dicta cumque facilis vero.',
    url: '/project/project4'
  },
]
const sharedProjects = [
  {
    title: 'Project one',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium nulla, animi ab consectetur, id nisi iusto laboriosam placeat repellat non rerum culpa. Quae, earum asperiores nostrum recusandae dicta cumque facilis vero.',
    url: 'project1'
  },
  {
    title: 'Project two',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium nulla, animi ab consectetur, id nisi iusto laboriosam placeat repellat non rerum culpa. Quae, earum asperiores nostrum recusandae dicta cumque facilis vero.',
    url: 'project1'
  },
  {
    title: 'Project three',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium nulla, animi ab consectetur, id nisi iusto laboriosam placeat repellat non rerum culpa. Quae, earum asperiores nostrum recusandae dicta cumque facilis vero.',
    url: 'project1'
  },
  {
    title: 'Project four',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium nulla, animi ab consectetur, id nisi iusto laboriosam placeat repellat non rerum culpa. Quae, earum asperiores nostrum recusandae dicta cumque facilis vero.',
    url: 'project1'
  },
]

function Dashboard() {
  return (
    <section className='flex flex-col justify-start items-center space-y-6 h-screen p-4'>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>


      <div className="flex flex-col md:flex-row rounded-md w-full gap-2">
        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
          <h4 className='mb-4 text-md font-bold leading-none px-1'>My Projects</h4>
          {myProjects.map(project => (
            <Link to={project.url} key={project.title}>
              <div className="my-3">
                <h5 className='font-bold text-sm'>{project.title}</h5>
                <p className='truncate'>{project.description}</p>
                <Separator />

              </div>
            </Link>
          ))}
        </ScrollArea>
        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
          <h4 className='mb-4 text-md font-bold leading-none px-1'>Shared Projects</h4>
          {sharedProjects.map(project => (
            <Link to={project.url} key={project.title}>
              <div className="my-3">
                <h5 className='font-bold text-sm'>{project.title}</h5>
                <p className='truncate'>{project.description}</p>
                <Separator />
              </div>
            </Link>
          ))}
        </ScrollArea>
      </div>
      <h1>hello</h1>
    </section>
  )
}

export default Dashboard