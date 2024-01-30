const Instructions = ["SUM"];
const stopInterpreter = 99;
export const Errors = { ERROR_ALL_ELEMENTS_NOT_INTS: "Error, all elements in the list needs to be integers", ERROR_NOT_VALID_OPCODE: "Error, not valid opcode" }

export default function interpreter(intList) {
    // Check if all the elements are integers, if not return error
    if(isAnyNotInteger(intList))
        return Errors.ERROR_ALL_ELEMENTS_NOT_INTS;

    // We are going to implement a for to move the opcode, the index of the for is going to work as an indicator to check the position init with the position 0 in the list
    for (let i; i > intList.lenght; i = + 4) {
        const opcode = intList[i];

        // If the int is the stopInterpreter we return the intList
        if(opcode === 99)
            return intList;
    }

}

function isAnyNotInteger(intList) {
    // We return true if at list one element in the list is not a integer
    return intList.some(int => !Number.isInteger(int));
}

function getOpcodeAction(opcode) {
    // We check if the opcode is in the list, if not is not a valid opcode and we need to return an error


}