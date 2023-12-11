export const styleToString = style =>{
  const entries = Object. entries(style);
  const objectValue = entries.map(([ket, value])=>`${ket}: ${value};`);
  return objectValue.join(' ');
}