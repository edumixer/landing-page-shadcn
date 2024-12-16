export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="ml-2 font-bold text-xl flex items-center gap-x-4"
          >
            <div>
              <svg width="32" height="30" viewBox="0 0 32 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M43.0647 0.0287016L0.201257 18.849C0.0789901 18.9026 0 19.0237 0 19.1575V30.8426C0 30.9763 0.0789901 31.0974 0.201257 31.1511L43.0647 49.9713C43.2869 50.0689 43.5359 49.9058 43.5359 49.6628V38.2777C43.5359 38.144 43.4569 38.0229 43.3346 37.9692L14.4997 25.3085C14.2313 25.1907 14.2313 24.8093 14.4997 24.6915L43.3346 12.0308C43.4569 11.9771 43.5359 11.856 43.5359 11.7223V0.337224C43.5359 0.094201 43.2869 -0.068842 43.0647 0.0287016Z" fill="black" />
                <path fillRule="evenodd" clipRule="evenodd" d="M43.0647 0.0287016L0.201257 18.849C0.0789901 18.9026 0 19.0237 0 19.1575V30.8426C0 30.9763 0.0789901 31.0974 0.201257 31.1511L43.0647 49.9713C43.2869 50.0689 43.5359 49.9058 43.5359 49.6628V38.2777C43.5359 38.144 43.4569 38.0229 43.3346 37.9692L14.4997 25.3085C14.2313 25.1907 14.2313 24.8093 14.4997 24.6915L43.3346 12.0308C43.4569 11.9771 43.5359 11.856 43.5359 11.7223V0.337224C43.5359 0.094201 43.2869 -0.068842 43.0647 0.0287016Z" fill="#4AC959" />
              </svg>
            </div>
            Coopers
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Linkedln
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#contact"
              className="opacity-60 hover:opacity-100"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Landing page Coopers made by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/eduardo-cristiano-franco/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Eduardo Franco
          </a>
        </h3>
      </section>
    </footer>
  );
};
