import { Button, Input, Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";
import { GoChevronRight } from "react-icons/go";

export const Login = () => {
	const [opened, { open, close }] = useDisclosure(false);

  return (
	<>
	<Modal opened={opened} centered onClose={close} style={{ whiteSpace: "nowrap"}} title="Authentication">
		<Input placeholder="Email" type="email"  style={{ marginTop:"10px"}}/>
		<Input placeholder="Password" type="password" style={{ marginTop:"10px"}}/>
		<div className="flex justify-center py-3"  >
			<Button variant="filled"  color="black" style={{ color: "white" }} radius={"xl"} >Enviar</Button>
		</div>
	</Modal>
	<Button variant="filled" color="yellow" style={{ color: "black" }} radius={"xl"} onClick={open}>Sign in	<GoChevronRight />
</Button>
  </>
  )
}
