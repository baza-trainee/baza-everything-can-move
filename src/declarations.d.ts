declare module 'three/examples/jsm/loaders/STLLoader' {
    import { Loader } from 'three';
  
    // Оголошуємо типи для функцій
    type LoadCallback = (geometry: unknown) => void;  // onLoad callback, отримує геометрію
    type ProgressCallback = (event: ProgressEvent) => void;  // onProgress callback
    type ErrorCallback = (error: Error) => void;  // onError callback
  
    export class STLLoader extends Loader {
      constructor();
      load(
        url: string, 
        onLoad: LoadCallback, 
        onProgress?: ProgressCallback, 
        onError?: ErrorCallback
      ): void;
    }
  }
  