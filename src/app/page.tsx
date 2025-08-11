import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-secondary-light-sand">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        {/* Color Palette Demo */}
        <div className="w-full max-w-4xl mb-8">
          <h2 className="text-2xl font-bold text-secondary-darkest-moss mb-4">Design Tokens</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-primary-dark-blue mb-2">Primary</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-32 h-20 bg-primary-dark-blue rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Dark Blue</p>
                <p className="text-xs text-gray-600">#00A1A6</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-20 bg-primary-blue rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Blue</p>
                <p className="text-xs text-gray-600">#08BCC1</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-20 bg-primary-lightest-blue rounded-lg mb-2 border border-gray-300"></div>
                <p className="text-sm font-medium">Lightest Blue</p>
                <p className="text-xs text-gray-600">#E6F8F9</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-primary-dark-blue mb-2">Secondary</h3>
            <div className="grid grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-24 h-16 bg-secondary-darkest-moss rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Darkest Moss</p>
                <p className="text-xs text-gray-600">#4F7469</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-16 bg-secondary-moss rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Moss</p>
                <p className="text-xs text-gray-600">#C6D7D2</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-16 bg-secondary-camel rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Camel</p>
                <p className="text-xs text-gray-600">#F1D3B2</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-16 bg-secondary-sand rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Sand</p>
                <p className="text-xs text-gray-600">#F3EDEA</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-16 bg-secondary-light-sand rounded-lg mb-2 border border-gray-300"></div>
                <p className="text-sm font-medium">Light Sand</p>
                <p className="text-xs text-gray-600">#F7F5F5</p>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
