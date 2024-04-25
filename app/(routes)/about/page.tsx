import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import React from "react";

function About() {
  return (
    <div className="h-screen">
      <Header />
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-teal-600 mb-8">
            About MindSketch
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Seamlessly Blend Whiteboarding and Digital Organization
              </h2>
              <p className="text-gray-600 mb-4">
                MindSketch is a cutting-edge digital whiteboarding solution that
                bridges the gap between traditional whiteboarding and modern
                engineering workflows. Designed with input from seasoned
                engineers and product teams, MindSketch empowers you to
                effortlessly sketch out ideas, map complex workflows, and
                collaborate in real-time, all while leveraging the power of
                digital organization.
              </p>
              <p className="text-gray-600 mb-8">
                With MindSketch, you can unleash your creativity and bring your
                most ambitious engineering concepts to life. From brainstorming
                sessions to detailed system architecture planning, our intuitive
                platform provides the perfect canvas for your team to ideate,
                iterate, and visualize solutions with unparalleled clarity.
              </p>
            </div>
            <div>
              <img
                src="/mindsketch-illustration.png"
                alt="MindSketch Illustration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-teal-700 mb-4 underline decoration-dashed">
              Highlighted Features
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li className="mb-2">
                <strong>Interactive Whiteboard:</strong> Intuitive digital
                whiteboarding canvas with a rich set of drawing and annotation
                tools, designed to mimic the fluidity of traditional
                whiteboards.
              </li>
              <li className="mb-2">
                <strong>Rich Text Editor:</strong> Document your ideas alongside
                drawings with a Notion-like editor, including support for text
                formatting, bullet points, headers, and inline media embedding.
              </li>
              <li className="mb-2">
                <strong>Flexible Layouts:</strong> Customize your workspace with
                drag-and-drop functionality to arrange drawings, text blocks,
                images, and other elements side by side.
              </li>
              <li className="mb-2">
                <strong>Collaborative real-time editing:</strong> allowing
                multiple team members to contribute and iterate on ideas
                simultaneously, fostering a culture of innovation and
                collaboration.
                <span className="whitespace-nowrap rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 text-sm">
                  Coming Soon
                </span>
              </li>
              <li className="mb-2">
                <strong>Powerful export and sharing capabilities:</strong>{" "}
                allowing you to seamlessly integrate your MindSketch boards into
                presentations, documentation, and other engineering artifacts.{" "}
                <span className="whitespace-nowrap rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 text-sm">
                  Coming Soon
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
