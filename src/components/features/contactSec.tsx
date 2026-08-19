import {Button} from"@/assets/button"
export function ContactSection() {
  const inputStyle =
    "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition"

  return (
    <section className="min-h-[calc(100vh-64px)] bg-[#faf7f2] px-6 py-16">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">


          <h1 className="mt-3 text-5xl md:text-6xl font-bold text-gray-900">
            Let's{" "}
            <span className="text-violet-600">
              Talk.
            </span>
          </h1>
        </div>


        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT - INFORMATION */}
          <div className="
            bg-violet-600
            rounded-2xl
            p-8
            text-white
          ">

            <h2 className="text-2xl font-bold">
              Contact Information
            </h2>

            <p className="mt-3 text-violet-100 leading-7">
              Here is some basic information about me.
              You can use the form to send me a message.
            </p>


            {/* Name */}
            <div className="mt-8">

              <p className="text-sm text-violet-200">
                Name
              </p>

              <p className="mt-1 font-semibold">
                Whenmar Dinoy
              </p>

            </div>


            {/* Course */}
            <div className="mt-6">

              <p className="text-sm text-violet-200">
                Course
              </p>

              <p className="mt-1 font-semibold">
                BSIT 3D
              </p>

            </div>


            {/* School */}
            <div className="mt-6">

              <p className="text-sm text-violet-200">
                School
              </p>

              <p className="mt-1 font-semibold">
                Cordova Public College
              </p>

            </div>


            {/* Accent */}
            <div className="
              mt-10
              w-16
              h-1
              rounded-full
              bg-amber-400
            " />

          </div>


          {/* RIGHT - FORM */}
          <div className="
            bg-white
            rounded-2xl
            border
            border-gray-200
            p-8
            shadow-sm
          ">

            <h2 className="text-2xl font-bold text-gray-900">
              Send a Message
            </h2>

            <p className="mt-2 text-gray-500">
              Fill in the form below.
            </p>


            <form className="mt-7 flex flex-col gap-5">

              {/* Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="First name"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Last name"
                    className={inputStyle}
                  />
                </div>

              </div>


              {/* Email */}
              <div>

                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className={inputStyle}
                />

              </div>


              {/* Message */}
              <div>

                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className={`${inputStyle} resize-none`}
                />

              </div>


              {/* Submit */}
              <div className="pt-2">

                <Button
                  buttontext="Send Message →"
                />

              </div>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}