type Project = {
  name: string
  description: string
  link: string
  video: string
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

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
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
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Why a website?',
    description: 'My view on building',
    link: '/blog/why-a-website',
    uid: 'blog-1',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
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
