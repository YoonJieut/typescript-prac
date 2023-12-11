export const styleToString = style =>{
  const entries = Object. entries(style);
  const objectValue = entries.map(([key, value])=>`${key}: ${value};`);
  return objectValue.join(' ');
}