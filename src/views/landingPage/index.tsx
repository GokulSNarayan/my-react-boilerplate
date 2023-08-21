import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import pnpmLogo from '/pnpm.svg'
import tailwind from '/tailwind-css-logo.svg'
import vitest from '/vitest-logo.svg'
import testingLib from '/testing-library-logo.png'

export function LandingPage() {
    return (
        <>
            <div className='p-4 m-2 absolute top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-5xl'>Welcome!</h1>
                <p>This is a React(TypeScript) boilerplate which uses Vite, PNPM, Tailwind CSS,
                    React Testing Library, Mock Service Worker.</p>
                <div className='flex p-4'>
                    <img className='mr-4' src={reactLogo} height={100} width={100} alt="React Logo" />
                    <img className='mr-4' src={viteLogo} height={100} width={100} alt="Vite Logo" />
                    <img className='mr-4' src={pnpmLogo} height={100} width={100} alt="Pnpm Logo" />
                    <img className='mr-4' src={tailwind} height={100} width={100} alt="Tailwind CSS Logo" />
                    <img className='mr-4' src={vitest} height={100} width={100} alt="Vitest Logo" />
                    <img className='mr-4' src={testingLib} height={100} width={100} alt="Testing Library Logo" />
                </div>
            </div>
        </>
    )
}