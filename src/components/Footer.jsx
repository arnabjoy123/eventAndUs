export default function Footer() {
  return (
    <>
      <footer className="py-8 bg-gray-900 text-center text-white text-sm md:text-base">
        <div className="max-w-5xl mx-auto px-4">
          <p className="mb-2 font-semibold text-lg">
            &copy; {new Date().getFullYear()} Event and Us. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 text-gray-300">
            <div>
              📞 Sanchari Coomar:{" "}
              <a href="tel:9477562293" className="underline hover:text-white">
                9477562293
              </a>
            </div>
            <div>
              📞 Saikat Datta:{" "}
              <a href="tel:9477562296" className="underline hover:text-white">
                9477562296
              </a>
            </div>
            <div>
              📧{" "}
              <a
                href="mailto:celebrations@eventandus.com"
                className="underline hover:text-white"
              >
                celebrations@eventandus.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
