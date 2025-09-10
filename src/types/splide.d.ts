declare module '@splidejs/vue-splide' {
  import { DefineComponent } from 'vue';

  export const Splide: DefineComponent<any, any, any>;
  export const SplideSlide: DefineComponent<any, any, any>;
  export const SplideTrack: DefineComponent<any, any, any>;
}

declare module '@splidejs/splide/css/core' {
  const content: any;
  export default content;
}
