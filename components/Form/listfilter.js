import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { TextInputX, SelectOptionField } from "@/components/Form/UdxFormComponents";

function Listfilter(props) {
	return (
			<div style={{ overflowX: "auto" }}>
				<Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
					{Object.keys(props.filters).map((key) => {
						const filter = props.filters[key].split("/");
						if (checkIfEndsWith(filter[2])) {
							return (
								<SelectOptionField
									key={key} // Add a unique key prop
									label={filter[0]}
									name={filter[1]}
									datakey={filter[2]}
									sx={{ minWidth: 200 }}
									style={{ marginLeft: 4 }}
									onChange={props.handlefilterchange}
								/>
							);
						}
						return null; // or some default component if the condition is not met
					})}
				</Stack>
			</div>
	);
}

const checkIfEndsWith = (inputString) => {
	const regex = /-(json|list)$/;
	return regex.test(inputString);
};

export default Listfilter;
