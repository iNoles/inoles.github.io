// Specify the file extension you want to import
declare module "*.yaml" {
  const data: Record<string, unknown>;
  export default data;
}
