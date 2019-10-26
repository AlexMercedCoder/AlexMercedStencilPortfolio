/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MatchResults,
} from '@stencil/router';

export namespace Components {
  interface AppHome {}
  interface AppProfile {
    'match': MatchResults;
  }
  interface AppRoot {}
  interface ProjSlider {
    'cardImage': string;
    'cardtitle': string;
    'link1': string;
    'link2': string;
    'linkText1': string;
    'linkText2': string;
  }
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLProjSliderElement extends Components.ProjSlider, HTMLStencilElement {}
  var HTMLProjSliderElement: {
    prototype: HTMLProjSliderElement;
    new (): HTMLProjSliderElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'proj-slider': HTMLProjSliderElement;
  }
}

declare namespace LocalJSX {
  interface AppHome {}
  interface AppProfile {
    'match'?: MatchResults;
  }
  interface AppRoot {}
  interface ProjSlider {
    'cardImage'?: string;
    'cardtitle'?: string;
    'link1'?: string;
    'link2'?: string;
    'linkText1'?: string;
    'linkText2'?: string;
  }

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'proj-slider': ProjSlider;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-profile': LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'proj-slider': LocalJSX.ProjSlider & JSXBase.HTMLAttributes<HTMLProjSliderElement>;
    }
  }
}

