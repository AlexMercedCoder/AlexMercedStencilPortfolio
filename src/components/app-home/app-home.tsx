import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to my web portfolio. This was created using StencilJS which compiles web components and applications using typescript like Angular and JSX like react. Click below to learn more about me and projects I've been created to show you what I can do.
        </p>

        <stencil-route-link url='/profile/Alex'>
          <button>
            Meet Alex
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
