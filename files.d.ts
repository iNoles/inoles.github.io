// Specify the file extension you want to import
declare module "*.yaml" {
  const data: any;
  export default data;
}
