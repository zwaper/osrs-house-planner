<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  
  const links = [
    { name: "House Planner", url: "/" },
    { name: "Construction Guide", url: "https://oldschool.runescape.wiki/w/Construction_training", external: true },
    { name: "POH Layouts", url: "https://oldschool.runescape.wiki/w/Player-owned_house", external: true }
  ];
</script>

<header class="osrs-header">
  <div class="header-container">
    <div class="logo-section">
      <img src="{base}/icons/ui/Construction_icon.png" alt="Construction" class="skill-icon">
      <h1>OSRS House Planner</h1>
    </div>
    
    <nav class="nav-links">
      {#each links as link}
        <a 
          href={link.external ? link.url : `${base}${link.url}`} 
          class:active={!link.external && $page.url.pathname === link.url}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
        >
          <span class="nav-link-inner">{link.name}</span>
        </a>
      {/each}
    </nav>
  </div>
</header>

<style lang="scss">
  .osrs-header {
    background-color: #483e33;
    background-image: url("/interface/header-bg.png"); /* This will be handled by Vite/SvelteKit */
    background-repeat: repeat;
    border-bottom: 2px solid #5a4a3a;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
      
      .header-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        @media (max-width: 767px) {
          flex-direction: column;
          gap: 15px;
        }
      }
      
      .logo-section {
        display: flex;
        align-items: center;
        gap: 15px;
        
        .skill-icon {
          width: 32px;
          height: 32px;
        }
        
        h1 {
          margin: 0;
          font-size: 24px;
          color: #ff981f;
          font-weight: bold;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
        }
      }
      
      .nav-links {
        display: flex;
        gap: 15px;
        
        a {
          background-color: #2c241b;
          border: 2px solid #8f7654;
          border-radius: 3px;
          padding: 5px 10px;
          color: #ece5ce;
          text-decoration: none;
          transition: all 0.2s;
          position: relative;
          
          &:hover {
            background-color: #3c3428;
            border-color: #ff981f;
          }
          
          &.active {
            background-color: #69543f;
            border-color: #ff981f;
            
            &::after {
              content: "";
              position: absolute;
              bottom: -2px;
              left: 0;
              right: 0;
              height: 2px;
              background-color: #ff981f;
            }
          }
        }
      }
    }
  </style>