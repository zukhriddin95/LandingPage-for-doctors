import { Fragment, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'
import { IoLogoInstagram } from 'react-icons/io5'
import { MdAddIcCall } from 'react-icons/md'
import Bghospital from '../public/bg-hospital.png'
import Bg from '../src/assets/bg-remove.png'
import bgMR from '../src/assets/bg.jpg'

function App() {
	const [social, setSocial] = useState(false)

	function handleClick() {
		setSocial(!social)
	}

	const handleWhatsAppClick = () => {
		window.open('https://wa.me/+79919139110', '_blank')
	}

	const handleTelegramClick = () => {
		window.open('https://t.me/zukhriddin0095', '_blank')
	}

	const handleCallClick = () => {
		window.location.href = 'tel:+998973276868'
	}

	const handleInstagramClick = () => {
		window.open('https://instagram.com/zukhriddin0095', '_blank')
	}

	return (
		<Fragment>
			<div
				className={
					social
						? 'container mx-auto max-w-[1350px] h-[100vh] bg-opacity-50 backdrop-blur-md bg-black px-[16px] z-20 transition-all translate-x-[0px] absolute flex justify-center align-baseline'
						: 'translate-x-[-300px] absolute '
				}
			>
				{' '}
				<button
					className='absolute top-1text-white font-[roboto] font-semibold top-10 right-10'
					onClick={handleClick}
				>
					<AiFillCloseCircle className='text-[#9c1616] X bg-[#ffffff28] rounded-md text-[35px] ease-out transition-all hover:text-[40px]' />
				</button>
				<div className='flex flex-col align-baseline gap-10 absolute top-[50px] sm:top-[150px]'>
					<button
						className='text-white font-[roboto] font-semibold rounded-lg'
						onClick={handleInstagramClick}
					>
						<IoLogoInstagram className='bg-red-700 rounded-lg  text-yellow-50 text-[35px] ease-out transition-all hover:text-[40px]' />{' '}
						Instagram
					</button>

					<button
						className='text-white font-[roboto] font-semibold rounded-lg '
						onClick={handleTelegramClick}
					>
						<BsTelegram className='text-blue-700 rounded-lg bg-yellow-50 text-[35px] ease-out transition-all hover:text-[40px]' />{' '}
						Telegram
					</button>
					<button
						className='text-white font-[roboto] font-semibold rounded-lg'
						onClick={handleWhatsAppClick}
					>
						<ImWhatsapp className='text-yellow-50 rounded-lg bg-[#1d9b11] text-[35px] ease-out transition-all hover:text-[40px]' />{' '}
						Whatsapp
					</button>

					<button
						className='text-white font-[roboto] font-semibold rounded-lg '
						onClick={handleCallClick}
					>
						<MdAddIcCall className='text-blue-700 rounded-lg bg-yellow-50 text-[35px] ease-out transition-all hover:text-[40px] ' />{' '}
						telefon qilish
					</button>
				</div>
			</div>

			<div className='bg-[#060E11] pb-10 sm:pb-24 pt-[70px]'>
				<div class='container mx-auto max-w-[1350px] px-10'>
					<section className='sm:relative '>
						<div className='flex flex-col gap-4'>
							<h1 className='text-[#47B2BE] text-[40px] sm:text-[60px] font-extrabold font-[roboto]'>
								Шохрух Субонов
							</h1>
							<p className='text-[#ffffffe1] sm:text-[18px] font-semibold font-[roboto]'>
								Травматолог Ортопед Хирург
							</p>
							<img
								className='w-[100%] h-[180px]'
								src={Bghospital}
								alt='bg-hospital'
							/>
						</div>
						<div className='sm:absolute sm:top-0 sm:right-16 max-w-[450px] rounded-xl'>
							<img
								src={Bg}
								alt='bg-remove'
								className='w-[100%] hidden sm:block rounded-[50px] '
							/>
						</div>
						<div className='mt-6 flex flex-col gap-5'>
							<h5 className='max-w-[600px]  text-[#ffffffe1] z-10 sm:text-[18px] font-semibold font-[roboto]'>
								{' '}
								Консултацияга ёзилиш учун pasdegi ishtimai tarmoqlardan biriga
								hat qoldiring va biz sizga tez orada aloqaga chiqamiz{' '}
							</h5>
							<div className='flex flex-col sm:flex-row gap-6'>
								<button
									className='flex  sm:flex-col  items-center gap-3 text-white font-[roboto] font-semibold rounded-lg'
									onClick={handleInstagramClick}
								>
									<IoLogoInstagram className='bg-red-700 rounded-lg  text-yellow-50 text-[35px] ' />{' '}
									Instagram
								</button>

								<button
									className='flex  sm:flex-col  items-center gap-3 text-white font-[roboto] font-semibold rounded-lg '
									onClick={handleTelegramClick}
								>
									<BsTelegram className='text-blue-700 rounded-lg bg-yellow-50 text-[35px] ' />{' '}
									Telegram
								</button>
								<button
									className='flex  sm:flex-col  items-center gap-3 text-white font-[roboto] font-semibold rounded-lg'
									onClick={handleWhatsAppClick}
								>
									<ImWhatsapp className='text-yellow-50 rounded-lg bg-[#1d9b11] text-[35px]' />{' '}
									Whatsapp
								</button>

								<button
									className='flex  sm:flex-col  items-center gap-3 text-white font-[roboto] font-semibold rounded-lg '
									onClick={handleCallClick}
								>
									<MdAddIcCall className='text-blue-700 rounded-lg bg-yellow-50 text-[35px] ] ' />{' '}
									telefon qilish
								</button>
							</div>
							<button
								onClick={handleClick}
								className='hidden w-[250px] z-10 py-2 px-8 rounded-md text-[#ffffffe1] sm:text-[28px] font-semibold font-[roboto] bg-[#47B2BE] cursor-pointer'
							>
								{' '}
								Консултация{' '}
							</button>
						</div>
					</section>
					<section className=' mt-[50px] sm:mt-[200px] flex flex-col sm:flex-row sm:justify-between gap-6'>
						<div className=''>
							<img
								src={bgMR}
								alt='bg-MR'
								className='rounded-3xl brightness-50 hover:brightness-100 hover:scale-105 transition duration-300'
							/>
						</div>
						<div className='flex flex-col gap-8'>
							<h2 className='text-[#fff] text-[40px] sm:text-[60px] font-extrabold font-[roboto]'>
								ОБО МНЕ
							</h2>
							<p className='text-[#fff]'>
								--Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Placeat, voluptate!{' '}
								<span className='font-bold'>Lorem, ipsum dolor.</span>
							</p>
							<p className='text-[#fff]'>
								--Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Placeat, voluptate!{' '}
								<span className='font-bold'>Lorem, ipsum dolor.</span>
							</p>
							<p className='text-[#fff]'>
								--Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Placeat, voluptate!{' '}
								<span className='font-bold'>Lorem, ipsum dolor.</span>
							</p>
							<p className='text-[#fff]'>
								--Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Placeat, voluptate!{' '}
								<span className='font-bold'>Lorem, ipsum dolor.</span>
							</p>
						</div>
					</section>
				</div>
			</div>
		</Fragment>
	)
}

export default App
