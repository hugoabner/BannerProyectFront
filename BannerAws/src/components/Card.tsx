
export const Card = () => {
  return (
	<div className=" w-full   px-16"> 
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
		 xl:grid-cols-3  w-full">

			<div className="pr-5">
				<div className=" bg-[#e7b2aa] rounded-3xl">
					<div className="grid grid-cols-2 px-8 py-5">
						<div>
							<h1 className="text-black font-bold text-lg">Hot in wWork</h1>
						</div>
						<div className="text-black text-sm font-semibold"  >
							<p>Lorem ipsum dolor sit a. Necessitatibus atque cupiditate soluta </p>
						</div>
					</div>
					<div className="flex w-40 h-28 md:w-52 md:h-32 rounded-2xl">
						<img className="rounded-2xl w-full" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRf8v6NCV18b5zunnNKDIS1okDK1qpwDGkcsKJaSIIZDyRG6Lq-" alt="" />
					</div>
					<div className="flex justify-end px-5">
						<h1 className="text-black font-bold">Hot in wWork</h1>
					</div>
				</div>
			</div>
			
			<div className="bg-white rounded-s-3xl w-full h-full">
				<div className="flex flex-col rounded-2xl bg-white h-full p-8  justify-center w-full items-center ">
					<h1 className="text-black font-bold text-3xl text-center">All The Experience new Aplication</h1>
					<p className="text-gray-500 text-center">Lorem ipsum consectetur adipisicing elit. Iusto quod aspernatur deleniti obcaecati minus sint voluptates? Placeat voluptatibus amet consequuntur fugit</p>
				</div>
			</div>	

			<div className="bg-white w-full rounded-e-3xl  p-5">
				<div className="flexjustify-center w-full h-full">
					<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTjTokjGJm5Eaq44F2adAGANXFwMN7p79f3PZnvx4NoXM9xdaYd" alt="" />
				</div>
			</div>	

		</div>
	</div>
  )
}
