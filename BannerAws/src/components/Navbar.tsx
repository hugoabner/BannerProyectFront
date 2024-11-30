import { Link } from "react-router-dom"
import { Login } from "./Login"
import { useMantineColorScheme, Button } from '@mantine/core';


export const Navbar = () => {
	const { setColorScheme } = useMantineColorScheme();
	const dark = useMantineColorScheme().colorScheme === 'dark';

  return (
	<div className="re w-full z-50   bg-black text-white py-5 sm:px-16 md:px-2  lg:px-16">
		<div className="md:flex sm:flex sm:justify-between md:justify-between">
			<div className="">
				<h1 className="text-3xl font-bold">Cardo</h1>
			</div>
			<div className="flex justify-center">
			<div className="">
				<ul className="md:flex py-3  space-y-2 md:py-0 md:space-y-0 md:space-x-7">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/About">About</Link>
					</li>
					<li>
						<Link to="/Contact">Contact</Link>
					</li>
					<li>
						<Link to="/Services">Services</Link>
					</li>	
					<li>
						<Button radius={"xl"} color="gray" onClick={() => setColorScheme(dark ? 'light' : 'dark')}>teme</Button>
					</li>			
				</ul>
			</div>
		</div>
	

		<div className="">
			<div className="md:space-x-3 sm:space-y-3 md:space-y-0 flex flex-col md:flex-row px-10 sm:px-0  md:px-0">
				<Button variant="filled" color="gray" style={{ color: "white" }} radius={"xl"}>Opened your acount</Button>
				<Login />
			</div>
		</div>
		</div>
		
	</div>
  )
}
