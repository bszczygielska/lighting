export class LightBulb {

  constructor(name, group) {
    this.name = name;
    this.group = group;
  }

  public name: string;
  public group: string;
  public state: boolean;
  public r: number;
  public g: number;
  public b: number;
  public s: number;
  public p: number;

}

export default LightBulb;