import Pill from "./Pill";
function TableRow({ idx }) {
	return (
		<tr>
			<td className="p-2 flex items-center gap-4">
				<div className="h-10 w-10 bg-2 rounded-full" />
				Company name
			</td>
			<td className="p-2">
				<Pill>energy</Pill>
			</td>
			<td className="p-2">21-2-2024</td>
			<td className="p-2">€231.400K</td>
		</tr>
	);
}
export default function Table() {
	return (
		<table className="table-fixed  w-full">
			<tbody className="divide-y divide-color">
				{[...Array(10).keys()].map((k) => (
					<TableRow key={k} idx={k} />
				))}
			</tbody>
		</table>
	);
}
