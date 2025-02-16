"use client";
import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const stats = [
  //{ label: 'Years Experience', value: '1+' },
  { label: 'Projects Completed', value: '10+' },
  { label: 'Technologies', value: '15+' },
]

const socialLinks = [
  { name: 'GitHub', icon: '/images/github.svg', url: 'https://github.com/kodychik' },
  { name: 'LinkedIn', icon: '/images/linkedin.svg', url: 'https://www.linkedin.com/in/kody-chik-59731924b/' },
  { name: 'Twitter', icon: '/images/twitter.svg', url: 'https://x.com/KodyChik' },
]

const experiences = [
  {
    company: 'C12.ai',
    role: 'Software Engineer ML Intern',
    period: 'May 2024 - August 2024',
    description: 'Designed and implemented advanced RAG and VLM pipelines using OpenAI, Langchain, LlamaIndex, and other AI frameworks to enhance an intelligent robot chemist\'s query function. Improved retrieval accuracy and technical problem-solving efficiency by over 70% by benchmarking 1,000+ embedding, retrieval, and reranking combinations with agentic reasoning. Additionally, leveraged Computer Vision tools like OpenCV, YOLO, and Pytesseract to automate data extraction using headless scraping on a Dockerized GCP Virtual Machine.',
    video: '/videos/c12.mp4', // Add video path
    //image: '/company1.jpg',
    link: 'https://www.c12.ai/',
  },
  {
    company: 'University of Toronto',
    role: 'Research Assistant',
    period: 'September 2024 - December 2024',
    description: 'Worked under Professor Francisco Estrada on implementing a CNN-based architecture for image denoising using the York University dataset, improving restoration for both synthetic and real-world images. Conducted experiments on network topology and training strategies to analyze their impact on model performance and efficiency. This research highlights advanced deep learning skills in computer vision, particularly in noise reduction and image enhancement.',
    image: '/images/uoft.jpg',
    link: 'https://image-denoise-research.vercel.app/',
  },
  {
    company: 'University of Toronto',
    role: 'Research Assistant',
    period: 'January 2025 - April 2025',
    description: 'Collaborated with Professor Irene Huang to investigate portfolio risk management techniques, comparing traditional Monte Carlo simulations with deep learning approaches like Conditional GANs (CGANs). Reproduced and improved results from a CGAN-based default risk modeling paper, addressing challenges such as mode collapse and overfitting. This research demonstrates expertise in financial modeling, risk prediction, and deep learning for high-dimensional time-series data.',
    image: '/images/uoft.jpg',
    link: 'https://image-denoise-research.vercel.app/',
  },
  {
    company: 'Zoo Capital',
    role: 'Venture Capital Intern',
    period: 'August 2024 - September 2024',
    description: 'Researched high-growth startups in AI, robotics, and consumer goods, evaluating market trends, financial performance, and investment potential. Personally engaged with 15+ companies to explore potential partnerships, assessing key metrics such as revenue growth, funding rounds, and valuations. This experience provided deep insights into venture capital, startup analysis, and strategic investment decision-making.',
    image: '/images/zoocap.jpeg',
    link: 'https://zoocap.com/',
  },
  // Add more experiences...
]

const projects = [
  {
    title: 'Project Name',
    description: 'Developed and deployed a natural language-based navigation app that allows users to create customized routes, such as scenic paths or optimized stopovers, by integrating Google Maps API with OpenAI\'s GPT. Built a scalable MVP using Docker and Google Cloud Platform (GCP), reducing trip planning time by 50% through real-time route adjustments based on user preferences. This project showcases expertise in AI-driven navigation, cloud deployment, and user-centric optimization.',
    image: '/images/uoft.jpg',
    link: '#',
    github: '#',
  },
  // Add more projects...
]

export default function Page() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="space-y-20 mt-16 pt-16">
      {/* Hero Section */}
      <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Hi, I'm <span className="text-blue-500">Kody Chik</span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Software and Machine Learning Engineer passionate about building for the future.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 py-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-blue-500">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                className="p-2 rounded-full bg-neutral-100 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>

          {/* Resume Button */}
          <Link
            href="/resume.pdf"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Download Resume
          </Link>
        </div>

        {/* Profile Image */}
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <div className="rounded-full overflow-hidden border-4 border-neutral-200 dark:border-neutral-800">
            <Image
              src="/images/uoft.jpg"
              alt="Profile"
              width={256}
              height={256}
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="space-y-8">
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900"
            >
              <div className="flex flex-col w-full md:w-48">
                {exp.video ? (
                  <>
                    <div className="relative h-32 mb-2">
                      <Image
                        src="/images/c12.jpeg"
                        alt={exp.company}
                        fill
                        className="object-contain rounded-lg p-2"
                      />
                    </div>
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286l-11.54 6.347c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                      Watch Demo
                    </button>
                  </>
                ) : (
                  exp.image && (
                    <div className="relative w-full h-32">
                      <Image
                        src={exp.image}
                        alt={exp.company}
                        fill
                        className="object-contain rounded-lg p-2"
                      />
                    </div>
                  )
                )}
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {exp.company} • {exp.period}
                  </p>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {exp.description}
                </p>
                <Link
                  href={exp.link}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      <Transition show={isVideoModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsVideoModalOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-black p-1 shadow-xl transition-all">
                  <div className="relative aspect-video">
                    <video
                      className="w-full h-full"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    >
                      <source src="/videos/c12.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <button
                      onClick={() => setIsVideoModalOpen(false)}
                      className="absolute top-4 right-4 text-white hover:text-gray-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Projects Section */}
      <section id="projects" className="space-y-8">
        <h2 className="text-3xl font-bold">Personal Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-neutral-50 dark:bg-neutral-900"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <Link
                    href={project.link}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Live Demo →
                  </Link>
                  <Link
                    href={project.github}
                    className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  >
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      {/* <section className="space-y-8">
        <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
        <BlogPosts />
      </section> */}
    </div>
  )
}
