//============== MODULE GLOBAL VARIABLES & INITIATION  ====================//

const mLog = '[Module_name]'; //use this variable to give your logs a common initial name
var incomingTable = null; // variable to store the data received

/* This function is called once the window has loaded */
initModule = function () {

};

//======================= COMMUNICATION ============================//

/* This function receives the data */
function onMessageReceived( event ){
	console.log( mLog,"onMessageReceived, event.data: ", event.data );

	//check if we are actually receiving data
	if(event.data[0] == null) {
		console.log( mLog,"No data available");
	    document.getElementById('div-teste').innerHTML = '';
		return;
	} 

	incomingTable = event.data[0]; // get the table from the first element of the data array
	
	//An example how to access to the table and retrieve column names and lengths
	let example_html = "";
	incomingTable.forEach(
		(coluna, index) => {
			example_html += `<div> coluna de nome ${coluna.name} | com ${coluna.length} elementos </div>`
		}
	)

    // prints the Number on the screen ( check index.html file )
    document.getElementById('div-teste').innerHTML = example_html;
}

/* Array defining the data that will be deliver 
 * many objects as outputs, each one defining the following properties
 * type → what type of data is; Number/String/Array/Object
 * name → give to this output a Name
 * description → a brief explanation
 * value → a value for this output.
 */
var outputArray = [
	{
		"type":"String",
		"name":"Output Name",
		"description":"describe here this variable",
		"value":null
	}
];

/* This function deliver data */
function sendMessageToParent( message ){
	parent.postMessage( message, '*' );
}

/* Use this function to format the message to be sent */
function sendDataToParent( param ) {
	outputArray[0].value = param;
	outputArray.isOutput = true;
	sendMessageToParent( { message:'output', data:outputArray } );
}

//==================== WINDOW CALLBACK && LISTENERS  ========================//

// Registers to the 'message' event to get the onMessageReceived function called
window.addEventListener( "message", onMessageReceived, false);

window.addEventListener("load", onWindowLoad );

function onWindowLoad () {
	initModule();
}

//==================== FUNCOES ESPECIAS DE TALENT FEST ========================//

/* This function has to be called from the browser console
   Essa função deve ser chamada desde a consola do navegador */
function enviarDados(){

	nomeColunas.forEach(
		(nome, index) => {
			heroisTable[index].name = nome;
		}
	)

	let validEvent = {
		data: [heroisTable]
	}
	let nullEvent = {
		data: []
	}
	onMessageReceived(nullEvent);
	onMessageReceived(validEvent);
};