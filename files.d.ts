// Specify the file extension you want to import
declare module "*.yml" {
  const value: unknown; // Add type definitions here if desired
  export default value;
}
