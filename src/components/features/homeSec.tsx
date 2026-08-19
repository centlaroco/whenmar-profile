import profile from "@/components/images/profile.jfif"
import { Link } from "react-router-dom";

export function HomeSection() {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-[#faf7f2]">

      <div className="max-w-6xl mx-auto flex items-center">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full py-10">

          {/* TEXT */}
          <div className="text-center md:text-left px-5">
            <p className="text-violet-600 font-semibold">
              Hi,
            </p>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold text-gray-900">
              Whenmar
              <span className="block text-violet-600">
                Dinoy
              </span>
            </h1>

            <p className="mt-5 text-lg text-gray-500">
              BSIT 3D · Application Development
            </p>

            <p className=" max-w-lg text-gray-600 leading-7">
              I am a Bachelor of Science in Information Technology
              student at Cordova Public College. I enjoy learning
              technology, creating websites, and building simple
              digital experiences.
            </p>

            <Link
              to="/about"
              className="inline-block mt-8 px-6 py-3 rounded-lg bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
            >
              About Me →
            </Link>

          </div>

          {/* IMAGE */}
          <div className="flex justify-center">

            <div className="relative">

              <img
                src={profile}
                alt="whenmar"
                className="w-72 h-80 md:w-80 md:h-96 object-cover rounded-3xl border-8 border-white shadow-xl"
              />

              <div className="absolute -bottom-5 -left-5 bg-white px-5 py-3 rounded-xl shadow-lg">
                <p className="text-xs text-gray-400">
                  Aspirant Developer
                </p>

                <p className="font-bold text-gray-900">
                  Learning & Creating
                </p>
              </div>

              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-amber-400 -z-10" />

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}