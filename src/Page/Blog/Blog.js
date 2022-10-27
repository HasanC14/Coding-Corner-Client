import React from "react";

const Blog = () => {
  return (
    <div className="md:mb-20">
      <div className="md:mb-12 md:mt-10">
        <p className="md:text-6xl text-3xl text-center font-bold">Blog</p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:ml-36 m-5">
        <div className="max-w-3xl p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100 flex justify-center items-center">
          <article>
            <h2 className="text-xl font-bold">What is cors?</h2>
            <p className="mt-4 dark:text-gray-400">
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources.
            </p>
          </article>
        </div>
        <div className="max-w-3xl p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h2>
            <p className="mt-4 dark:text-gray-400">
              Firebase provides detailed documentation and cross-platform SDKs
              to help you build and ship apps on Android, iOS, the web, C++, and
              Unity.It allows real-time database connection, which means
              multiple users can see the changes in the data when the data gets
              created or edited. Data transmission is handled with web sockets
              so you don't have to send requests to get new data, you only need
              to subscribe once. Usually, authentication by a server entails the
              use of a user name and password. Other ways to authenticate can be
              through cards, retina scans, voice recognition, and fingerprints.
            </p>
          </article>
        </div>
        <div className="max-w-3xl p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              How does the private route work?
            </h2>
            <p className="mt-4 dark:text-gray-400">
              The react private route component renders child components (
              children ) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property.
            </p>
          </article>
        </div>
        <div className="max-w-3xl p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold">
              What is Node? How does Node work?
            </h2>
            <p className="mt-4 dark:text-gray-400">
              Node allows developers to write JavaScript code that runs directly
              in a computer process itself instead of in a browser. Node can,
              therefore, be used to write server-side applications with access
              to the operating system, file system, and everything else required
              to build fully-functional applications.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
