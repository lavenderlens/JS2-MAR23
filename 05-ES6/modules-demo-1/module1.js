/**
 * I wish to use these functions in another script
 * we need to export them for this to happen
 * exports are two types:
 * named
 * default
 * you can only have ONE default export per script
 * when importing a default export you need not surround it with curly braces
 * and it may be named anything
 */

const hello = () => console.log("Hello");
export const goodbye = () => console.log("Goodbye");

export default hello;
// export {goodbye};
