import React, { useState } from 'react'
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { BiGridVertical } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import img from '/img.png'

export default function App() {
	const [activeButton, setActiveButton] = useState('About Me');

	const buttonClasses = 'rounded-[16px] px-6 py-2 w-1/3';
	const hoverClasses = 'hover:bg-gray-800 hover:text-white';
	const activeClasses = 'bg-gray-800 text-white';

	return (
		<div className='lg:flex items-center h-full lg:h-[100vh] bg-gradient-to-b from-[#373E44] to-[#191B1F] py-[4.65rem] pl-6'>
			{/* Left Side */}
			<div className="lg:w-[46rem] h-full bg-[#616161D1] rounded-[2rem] text-white">
			</div>
			{/* Right side */}
			<div className="lg:w-[40rem] flex flex-col h-full ml-[2.6rem]">
				{/* About me widget */}
				<div className="flex h-[15rem] bg-[#363C43] rounded-[1.18rem] p-4 text-white" style={{ boxShadow: '5.67px 5.67px 3.78px 0px #00000066' }}>
					<div className="flex flex-col items-center -ml-2 -mt-1 text-gray-600">
						<div className="h-1/2">
							<HiOutlineQuestionMarkCircle className='text-2xl' />
						</div>
						<div className="h-1/2">
							<BiGridVertical className='text-4xl' />
						</div>
					</div>
					<div className="w-full ml-[1rem]">
						<div className="bg-black rounded-[23px] text-[#A3ADB2] p-1 text-lg font-medium flex gap-1" style={{ fontFamily: 'Poppins' }}>

							<button
								className={`about-btn ${buttonClasses} ${activeButton === 'About Me' ? activeClasses : hoverClasses}`}
								onClick={() => {
									setActiveButton('About Me');
									document.querySelector('#about-me').classList.remove("hidden")
									document.querySelector('#experiences').classList.add("hidden")
									document.querySelector('#recommended').classList.add("hidden")

								}}
							>
								About Me
							</button>
							<button
								className={`about-btn ${buttonClasses} ${activeButton === 'Experiences' ? activeClasses : hoverClasses}`}
								onClick={() => {
									setActiveButton('Experiences')
									document.querySelector('#experiences').classList.remove("hidden")
									document.querySelector('#about-me').classList.add("hidden")
									document.querySelector('#recommended').classList.add("hidden")
								}
								}>
								Experiences
							</button>
							<button
								className={`about-btn ${buttonClasses} ${activeButton === 'Recommended' ? activeClasses : hoverClasses}`}
								onClick={() => {
									setActiveButton('Recommended')
									document.querySelector('#recommended').classList.remove("hidden")
									document.querySelector('#about-me').classList.add("hidden")
									document.querySelector('#experiences').classList.add("hidden")
								}
								}>
								Recommended
							</button>
						</div>
						<div className="mt-[2.18rem] text-[#969696] overflow-auto text-ellipsis line-clamp-5 scrollable-div" id='about-me' style={{
							fontFamily: "Plus Jakarta Sans",
							fontSize: "20px",
							fontWeight: "400",
							lineHeight: "25.2px",
						}}>
							Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.<br />
							<br />
							I was born and raised in Albany, NY, and have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters, Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a busy time for me as I help them get ready and off to school, but I’m always available afterward to assist you with any questions or needs you might have. Looking forward to working together and helping you succeed with Salesforce!
						</div>
						<div id='experiences' className="hidden mt-[2.18rem] text-[#969696] overflow-auto text-ellipsis line-clamp-5 scrollable-div" style={{
							fontFamily: "Plus Jakarta Sans",
							fontSize: "20px",
							fontWeight: "400",
							lineHeight: "25.2px",
						}}>Over the past 5 years, I've had the opportunity to work in various roles that have shaped my expertise in sales and customer relationships. My journey began as a Sales Associate at TechCorp, where I honed my skills in client communication and closing deals.
							<br /><br />
							After 2 years, I moved to Global Solutions, where I took on the role of Senior Account Manager. Here, I managed key accounts and worked on developing strategies to increase client retention and satisfaction.
							<br /><br />
							Currently, at Salesforce, I specialize in helping businesses optimize their sales processes. It's been an exciting journey, and I’ve enjoyed every challenge along the way!
						</div>
						<div id='recommended' className="hidden mt-[2.18rem] text-[#969696] overflow-auto text-ellipsis line-clamp-5 scrollable-div" style={{
							fontFamily: "Plus Jakarta Sans",
							fontSize: "20px",
							fontWeight: "400",
							lineHeight: "25.2px",
						}}>Here are a few resources and tools I highly recommend to help you make the most of Salesforce:
							<br /><br />
							- <bold className="font-bold"> Salesforce Trailhead:</bold> An excellent platform to learn and get hands-on experience with Salesforce. It’s a great way to build your skills at your own pace.
							<br /><br />
							- <bold className="font-bold"> Pardot:</bold>  you're looking to improve your marketing automation, Pardot is a powerful tool that integrates seamlessly with Salesforce.
							<br /><br />
							- <bold className="font-bold"> Einstein Analytics:</bold> For businesses that want to leverage AI to gain deeper insights, Einstein Analytics offers robust data analysis capabilities.
							<br /><br />
							I’m always here to help with any questions or additional recommendations you may need!
						</div>
					</div>
				</div>
				<hr className='border-[#F8F8F81A] border-2 rounded-md mt-[16px] mb-[10px]' style={{
					boxShadow: "0px 4px 4px 0px #00000054"
				}} />
				{/* Gallery widget */}
				<div className="flex h-[16rem] bg-[#363C43] rounded-[1.18rem] p-4 text-white" style={{ boxShadow: '5.67px 5.67px 3.78px 0px #00000066' }}>
					<div className="flex flex-col items-center -ml-2 -mt-1 text-gray-600">
						<div className="h-1/2">
							<HiOutlineQuestionMarkCircle className='text-2xl' />
						</div>
						<div className="h-1/2">
							<BiGridVertical className='text-4xl' />
						</div>
					</div>
					<div className="w-full ">
						<div className=" text-white flex justify-between">
							<div className="bg-[#171717] rounded-2xl py-2 px-10 text-xl ml-4 flex items-center">Gallery</div>
							<button
								className="my-1 ml-16 bg-[#FFFFFF08] px-8 rounded-full flex items-center font-bold text-xs"
								style={{
									boxShadow: `
      									inset 0px 3.26px 3.26px 0px #FFFFFF26,
      									inset 0px 0px 48.91px 0px #FFFFFF0D,
      									9px 10px 7.1px 0px #00000066,
      									-0.5px -0.5px 6.9px 0px #FFFFFF40
    								`,
								}}
							>
								<FaPlus className="mr-1" /> ADD IMAGE
							</button>

							<div className="flex gap-2 mr-12">
								<button
									className="mt-2 p-2 text-2xl text-[#6F787C] rounded-full bg-gray-900 w-10 h-10"
									style={{
										boxShadow: `
    								  4px 5px 30px 5px #101213,
    								  -5px -3px 30px -10px #96BEE7
    								`,
									}}
								>
									<FaArrowLeft />
								</button>

								<button
									className="mt-2 p-2 text-2xl text-[#6F787C] rounded-full bg-gray-900 w-10 h-10"
									style={{
										boxShadow: `
    								  4px 5px 30px 5px #101213,
    								  -5px -3px 30px -10px #96BEE7
    								`,
									}}
								>
									<FaArrowRight />
								</button>
							</div>

						</div>
						<div className="flex mt-6 gap-4 ml-8">
							<img src={img} alt='' className="obj-contain w-[9rem] h-[9rem]" />
							<img src={img} alt='' className="obj-contain w-[9rem] h-[9rem]" />
							<img src={img} alt='' className="obj-contain w-[9rem] h-[9rem]" />
						</div>
					</div>
				</div>
			</div>
			<hr className='absolute bottom-20 right-36 w-[34rem] border-[#F8F8F81A] border-2 rounded-md' style={{
				boxShadow: "0px 4px 4px 0px #00000054"
			}} />
		</div>
	)
}
