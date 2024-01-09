const parseCode = (str) => {
  // your code here
	let parts=str.split('0');
	const arr=parts.filter((e)=> e!=="");

	return {
		firstName:arr[0],
		lastName:arr[1],
		id:arr[2]
	}
};
// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
