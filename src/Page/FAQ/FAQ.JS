import React from "react";

const FAQ = () => {
  return (
    <div className="mb-32 mt-32 m-0">
      <section className=" dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                How long does it take to finish?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                This will ultimately depend on the user, but you can expect
                approximately 10 hours before completion.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                How soon can I land a real-world job?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                It's not uncommon for Codecademy learners to land web
                development jobs within 6 months. You can find how and read more
                in-depth success stories in the community forums.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What if I don't have a related degree?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Having a degree related to STEM (Science, Technology,
                Engineering, Mathematics) helps, but it is not an absolute
                requirement in most coding fields. In fact, the number of
                developers with an unrelated undergraduate degree continues to
                grow so it's no longer necessary to have a STEM degree to start
                a career in coding.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
