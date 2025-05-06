import { readdirSync } from 'fs'
import { join } from 'path'

type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  description: string
  start: string
  end: string
  link: string
  logo: string
  id: string
  location: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Photo = {
  id: string
  image: string
}

export const PROJECTS: Project[] = [
  {
    name: 'NYC Subway Tracker',
    description:
      'Open a map of Manhattan, tap anywhere, and get the nearest subway station with live arrival times.',
    link: 'https://github.com/AGanguly13/point72-hackathon',
    image: '/projects/point72_hackathon_image.jpeg',
    id: 'project1',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Viam',
    title: 'Software Engineer Intern',
    description: 'Computer Vision',
    start: 'incoming',
    end: 'summer 2025',
    link: 'https://viam.com',
    logo: '/logos/viam_logo.jpg',
    id: 'work1',
    location: 'New York, NY'
  },
  {
    company: 'Tesla',
    title: 'Software Engineer Intern',
    description: 'Design Automation Software',
    start: 'Apr 2024',
    end: 'Sep 2024',
    link: 'https://tesla.com',
    logo: '/logos/tesla_logo.png',
    id: 'work2',
    location: 'Palo Alto, CA'
  },
  {
    company: 'Capital One',
    title: 'Software Engineer Intern',
    description: 'Recommender Systems',
    start: 'Jun 2023',
    end: 'Aug 2023',
    link: 'https://capitalone.com',
    logo: '/logos/capitalone_logo.png',
    id: 'work3',
    location: 'McLean, VA'
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Why a website?',
    description: 'My thoughts on building',
    link: '/blog/why-a-website',
    uid: 'blog-1',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Resume',
    link: '/Adwait_Ganguly_Resume.pdf',
  },
  {
    label: 'Github',
    link: 'https://github.com/AGanguly13',
  },
  {
    label: 'X',
    link: 'https://x.com/AdwaitGanguly',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/adwaitganguly/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/adwaitganguly/',
  },
]

export const EMAIL = 'ganguly.adwait@gmail.com'

export const PHOTOS: Photo[] = Array.from({ length: 47 }, (_, i) => ({
  id: `photo${i + 1}`,
  image: `/photos/photo_${i + 1}.jpg`
})).filter(photo => {
  return true
})