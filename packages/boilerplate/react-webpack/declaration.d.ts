declare module '*.svg?url' {
  const content: any;
  export default content;
}
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
