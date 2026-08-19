export function AboutSection() {
  const skills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Web Design",
    "HTML & CSS",
  ]

  return (
    <section className="bg-[#faf7f2] px-6 py-16">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="mt-3 text-5xl md:text-6xl font-bold text-gray-900">
            About{" "}
            <span className="text-violet-600">
              Me
            </span>
          </h1>

        </div>


        {/* ABOUT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* WHO I AM */}
          <div className="
            bg-violet-50
            p-7
            rounded-2xl
            border
            border-gray-200
            shadow-sm
          ">
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Who I Am
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              Hi! I am{" "}
              <span className="font-semibold text-violet-600">
                Whenmar Dinoy
              </span>
              . I am a BSIT student at{" "}
              <span className="font-semibold text-gray-800">
                Cordova Public College
              </span>
              .
            </p>

            <p className="mt-4 text-gray-500 leading-7">
              I enjoy learning about technology and creating
              simple, useful, and creative web projects. I
              continue improving my skills through practice
              and personal projects.
            </p>

          </div>


          {/* WHAT I DO */}
          <div className="
            bg-violet-600
            p-7
            rounded-2xl
            text-white
            shadow-sm
          ">
            <h2 className="mt-2 text-2xl font-bold">
              What I Do
            </h2>

            <p className="mt-5 text-violet-100 leading-7">
             I am passionate about expanding my web development skills and exploring modern technologies. 
             I work with React, TypeScript, Tailwind CSS, 
             and other tools to build creative and responsive projects for school and personal practice. T
            </p>

          </div>

        </div>


        {/* SKILLS */}
        <div className="mt-14">
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            My Skills
          </h2>

          <div className="
            mt-6
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5
            gap-4
          ">

            {skills.map((skill) => (
              <div
                key={skill}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  px-4
                  py-4
                  text-center
                  font-semibold
                  text-gray-700
                  hover:border-violet-400
                  hover:text-violet-600
                  hover:bg-violet-50
                  transition
                "
              >
                {skill}
              </div>
            ))}

          </div>

        </div>


        {/* GOAL */}
        <div className="
          mt-14
          bg-white
          border
          border-gray-200
          rounded-2xl
          p-7
          md:p-10
        ">
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            My Goal
          </h2>

          <p className="
            mt-5
            max-w-4xl
            text-gray-600
            leading-7
          ">
          My goal is to become a skilled and confident developer by continuously practicing, learning new technologies, 
          and creating meaningful projects. I want to improve my programming skills, gain practical experience, 
          and develop modern, responsive, and user-friendly websites.
          </p>

        </div>

      </div>

    </section>
  )
}