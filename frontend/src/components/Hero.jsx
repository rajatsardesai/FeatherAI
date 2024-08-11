import { CustomButton } from ".";
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 padding-x">
        <h1 className="hero__title">
          AI Email is best for writing
          <span className="block text-green">Being Late for work</span>
        </h1>
        <p className="hero__subtitle">
          Experience effortless email communication with the help of AI-powered writing assistance.
        </p>
        <p className="hero__subtitle-small md:max-w-xl md:mx-auto">
          With its powerful AI technology, the app can assist with everything from suggestions for improving your writing.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          <Link href="/writemail">
            <CustomButton
              title="Get started"
              containerStyle="bg-green text-white text-lg py-3 px-8 border-[0.2px] border-green outline-none rounded-full" /></Link>
          <Link href="/usage">
            <CustomButton
              title="How it works"
              containerStyle="bg-transparent text-lg py-3 px-8 border-[0.2px] border-black outline-none rounded-full" />
          </Link>
        </div>
        <div className="hero__image">
          <img src="/arrow-down.svg" alt="Arrow Down" className="object-contain m-auto" />
        </div>
        <Link href="/writemail" className="hero__email-cta">
          <img src="/leaf.svg" alt="Email Writing Button" className="object-contain m-auto" />
        </Link>
      </div>
    </div>
  )
}

export default Hero;