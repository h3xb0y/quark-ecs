import {Component} from "./Types";

export class Entity
{
  private readonly _components: Record<string, any> = {};
  
  public has(component: Component<any>): boolean
  {
    return this._components.hasOwnProperty(component);
  }
  
  public set<T>(component: Component<T>, value: T): void
  {
    this._components[component] = value;
  }
  
  public remove(component: Component<any>): void
  {
    delete this._components[component];
  }
  
  public hasAnyComponent(): boolean
  {
    return Object.keys(this._components).length > 0;
  }
  
  public get<T>(component: Component<T>): T
  {
    const value = this._components[component];
    if (!value)
      throw new TypeError("Component not found.");
    
    return value;
  }
}
