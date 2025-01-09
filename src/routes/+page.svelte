<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";

  injectAnalytics({ mode: browser ? "development" : "production" });

  const name = "Rylan Turner";
  const tagline = "Software Engineer • Illinois Football Enjoyer";
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://www.github.com/rylanturner02/",
      classes: "fa-brands fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rylanturner02/",
      classes: "fa-brands fa-linkedin",
    },
    {
      name: "Projects",
      url: "#",
      classes: "fa-solid fa-code",
    },
    {
      name: "Email",
      url: "mailto:rylanturner02+dev@gmail.com",
      classes: "fa-solid fa-envelope",
    },
  ];

  let isPreload = $state(true);
  let isAnimationPaused = $state(false);
  let fontsLoaded = $state(false);

  /**
   * Handles visibility change events to pause background animation when tab is not visible
   * @returns {void}
   */
  function handleVisibilityChange() {
    if (!browser) return;
    isAnimationPaused = document.hidden;
  }

  /**
   * Initializes the page by loading required fonts and setting up event listeners
   */
  onMount(() => {
    if (!browser) return;

    Promise.all([
      document.fonts.load('900 1em "Source Sans Pro"'),
      document.fonts.load('300 1em "Source Sans Pro"'),
      document.fonts.load('normal normal 400 1em "Font Awesome 6 Free"'),
      document.fonts.load('normal normal 400 1em "Font Awesome 6 Brands"'),
    ]).then(() => {
      fontsLoaded = true;
      setTimeout(() => {
        isPreload = false;
      }, 100);
    });

    document.addEventListener("visibilitychange", handleVisibilityChange);
  });

  onDestroy(() => {
    if (!browser) return;
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  });
</script>

<div id="app" class:is-preload={isPreload} class:fonts-loaded={fontsLoaded}>
  <div id="wrapper">
    <div id="bg" class:paused={isAnimationPaused}></div>
    <div id="overlay"></div>
    <div id="main">
      <header id="header">
        <h1>{name}</h1>
        <p>{tagline}</p>
        <nav>
          <ul>
            {#each socialLinks as link}
              <li>
                <a href={link.url} target="_blank">
                  <i class={link.classes}></i>
                  <span class="label">{link.name}</span>
                </a>
              </li>
            {/each}
          </ul>
        </nav>
      </header>

      <footer id="footer">
        <span class="copyright"
          >&copy; {new Date().getFullYear()} {name}. All rights reserved.</span
        >
      </footer>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,900&display=swap");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");

  :global(*),
  :global(*:before),
  :global(*:after) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    min-width: 320px;
    background: #fff;
    color: #fff;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 15pt;
    font-weight: 300;
    line-height: 1.75em;
    letter-spacing: -0.025em;
    overflow: hidden;
  }

  #wrapper {
    height: 100vh;
    left: 0;
    opacity: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .fonts-loaded #wrapper {
    animation: wrapper 3s forwards;
  }

  #bg {
    backface-visibility: hidden;
    background: url("/background.jpg") center center;
    background-repeat: repeat-x;
    background-size: auto 100%;
    height: 100%;
    left: 0;
    opacity: 1;
    position: fixed;
    top: 0;
    width: 400%;
    will-change: transform;
  }

  .fonts-loaded #bg {
    animation: backgroundScroll 90s linear infinite;
  }

  #bg.paused {
    animation-play-state: paused;
  }

  #overlay {
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.7) 150%
    );
    height: 100%;
    left: 0;
    opacity: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .fonts-loaded #overlay {
    animation: overlay 1.5s 1.5s forwards;
  }

  #main {
    height: 100%;
    left: 0;
    position: fixed;
    text-align: center;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #header {
    backface-visibility: hidden;
    opacity: 0;
    position: relative;
    text-align: center;
    width: 90%;
    max-width: 1200px;
    transform: translate3d(0, 1em, 0);
  }

  .fonts-loaded #header {
    animation: header 1s 2.25s forwards;
  }

  h1 {
    font-size: 4.35em;
    font-weight: 900;
    letter-spacing: -0.035em;
    line-height: 1em;
    margin-bottom: 0.5em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.25em;
    margin: 0.75em 0;
    opacity: 0.9;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  nav {
    margin: 1.5em 0 0 0;
    width: 100%;
  }

  nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    gap: 2em;
    flex-wrap: wrap;
  }

  nav li {
    opacity: 0;
    position: relative;
    transform: translate3d(0, 1em, 0);
  }

  .fonts-loaded nav li {
    animation: nav-icons 0.5s ease-in-out forwards;
  }

  .fonts-loaded nav li:nth-child(1) {
    animation-delay: 2.5s;
  }
  .fonts-loaded nav li:nth-child(2) {
    animation-delay: 2.75s;
  }
  .fonts-loaded nav li:nth-child(3) {
    animation-delay: 3s;
  }
  .fonts-loaded nav li:nth-child(4) {
    animation-delay: 3.25s;
  }

  nav a {
    color: white;
    text-decoration: none;
    border: 2px solid white;
    border-radius: 100%;
    width: 3em;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.1);
    position: relative;
  }

  nav a i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
  }

  nav a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.15);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  }

  .label {
    display: none;
  }

  #footer {
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7));
    bottom: 0;
    height: 6em;
    left: 0;
    position: absolute;
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes backgroundScroll {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-50%, 0, 0);
    }
  }

  @keyframes wrapper {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes overlay {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes header {
    0% {
      transform: translate3d(0, 1em, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes nav-icons {
    0% {
      transform: translate3d(0, 1em, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @media screen and (max-width: 736px) {
    h1 {
      font-size: 2.5em;
    }
    p {
      font-size: 1em;
    }
    #bg {
      width: 400%;
    }
    nav ul {
      gap: 1em;
    }
  }
</style>
