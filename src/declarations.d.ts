declare module 'three/examples/jsm/loaders/STLLoader' {
    import { Loader } from 'three';
    export class STLLoader extends Loader {
      constructor();
      load(url: string, onLoad: Function, onProgress?: Function, onError?: Function): void;
    }
  }
  