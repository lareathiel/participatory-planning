
import Scene from "../Scene";
import DrawWidget from "./DrawWidget";

// esri
import {
  declared,
  property,
  subclass,
} from "esri/core/accessorSupport/decorators";
import Polygon from "esri/geometry/Polygon";
import Graphic from "esri/Graphic";
import { tsx } from "esri/widgets/support/widget";

@subclass("app.draw.CreateBuilding")
export default class CreateBuilding extends declared(DrawWidget) {

  private stories: number = 3;

  constructor(params?: any) {
    super(params);
  }

  public render() {
    return (
      <div>
        <div class="menu">
          <div class="menu-item">
            <button class="btn" onclick={ this._startDrawing.bind(this, 3) }>3-Story Building</button>
          </div>
          <div class="menu-item">
            <button class="btn" onclick={ this._startDrawing.bind(this, 5) }>5-Story Building</button>
          </div>
          <div class="menu-item">
            <button class="btn" onclick={ this._startDrawing.bind(this, 10) }>10-Story Building</button>
          </div>
        </div>
      </div>
    );
  }

  protected onPolygonCreated(geometry: Polygon) {
    const building = new Graphic({
      geometry,
      symbol: {
        type: "polygon-3d", // autocasts as new PolygonSymbol3D()
        symbolLayers: [{
          type: "extrude", // autocasts as new ExtrudeSymbol3DLayer()
          material: {
            color: "#FFF",
          },
          edges: {
            type: "solid",
            color: "#AAA",
            size: 0.5,
          },
          size: this.stories * 3,
        }],
      },
    } as any);

    this.scene.groundLayer.add(building);
  }

  private _startDrawing(stories: number) {
    this.stories = stories;
    this.createPolygon();
  }

}
