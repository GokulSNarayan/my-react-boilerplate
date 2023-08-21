import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import pnpmLogo from '/pnpm.svg'

export function LandingPage(){
    return(
        <div>
            <h1 className='text-5xl'>Welcome</h1>
            <div className='flex p-4'>

            <img src={reactLogo} height={100} width={100} alt="React Logo" />
            <img src={viteLogo} height={100} width={100} alt="Vite Logo" />
            <img src={pnpmLogo} height={100} width={100} alt="Pnpm Logo" />
            </div>
        </div>
    )
}