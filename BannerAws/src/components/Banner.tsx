import { AiFillFilePdf } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";

export const Banner = () => {
  return (
	<div className="py-3 px-16">
		<div className="bg-white p-2 rounded-3xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
		<div className=" px-16 mt-5">
				<div className="relative  flex  items-end mt-20">
					<div className=" h-[370px] w-[270px] flex flex-col items-center justify-end">
						<img className="object-cover h-full w-full rounded-3xl" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ7FJ7y04Fzyn3WBMvbYhklbreTcsgM521D3fteIIfkObnG-XIz" alt="" />
						<div className="w-full h-full p-2 flex items-end px-5 mt-8">
							<div className="absolute space-y-2 rounded-3xl  bg-gray-200 opacity-90 z-50 h-32 flex flex-col justify-center px-5">
							<div className="flex justify-between items-center space-x-2">
								<h1 className="text-gray-400 font-bold text-md text-center">Payment method</h1>
								<FaCircle className="text-black" />
							</div>
							<div className="flex justify-between items-center">
								<div className="flex relative">
									<FaCircle className="text-red-500	 ml-3 absolute" />
									<FaCircle className="text-orange-500	" />
								</div>

								<h1 className="text-black font-bold text-md text-center">***559</h1>
							</div>
						</div>
						</div>
						
					</div>
				</div>
			</div>

			<div className=" mt-5">
				<div className="px-5 space-y-3">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-bold">
						Responsive Banking Made Eaiser
					</h1>
					<p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas voluptatem hic totam quis? Recusandae natus 	magni voluptate aperiam impedit dolor deserunt.</p>
					<div className="  px-8 py-2">
						<div className="flex rounded-full shadow-xl items-center bg-white py-2 px-4 justify-between">
							<button className=" text-black font-medium text-lg">Dowload Aplication  </button>
							<AiFillFilePdf className="text-black font-bold text-3xl" />
						</div>
					</div>
					<div className="flex justify-between">
						<div>
							<p className="text-black font-semibold">Active users</p>
							<h1 className="text-3xl font-bold text-black">5000 +</h1>
						</div>
						<div>
							<p className="text-black font-semibold">Active users</p>
							<h1 className="text-3xl font-bold text-black">5000 +</h1>
						</div>
						<div>
							<p className="text-black font-semibold">Active users</p>
							<h1 className="text-3xl font-bold text-black">5000 +</h1>
						</div>
					</div>
				</div>
			</div>

			<div className=" px-16 mt-5">
				<div className="relative flex justify-end items-end">
					<div className="relative h-[450px] w-[400px] flex flex-col items-center justify-end">
						<img className="object-cover h-full w-full" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpHROovAKSSYSELa-aaUO3Ef7bJZD0ajz1_yeMnp-dFw0i4C8F" alt="" />
						<div className="absolute space-y-2 w-full  bg-gray-100 opacity-90 z-50 h-48 flex flex-col justify-center px-5">
							<h1 className="text-black font-bold text-center">All Debit Cards</h1>
							<p className="text-black font-medium text-xs text-center">For detail please  click on each card</p>
							<div className="w-full flex justify-center">
								<button className="text-white px-5 bg-black py-1
							  rounded-full font-semibold hover:bg-gray-600">
								Order a car
							</button>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}
