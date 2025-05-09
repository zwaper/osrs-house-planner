<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import VersionInfo from './VersionInfo.svelte';
  
  const links = [
    { name: "House Planner", url: "/" },
    { name: "Construction Guide", url: "https://oldschool.runescape.wiki/w/Construction_training", external: true },
    { name: "POH Layouts", url: "https://oldschool.runescape.wiki/w/Player-owned_house", external: true }
  ];

  // Add this to handle the version modal
  let showVersionModal = false;
  
  function toggleVersionModal() {
    showVersionModal = !showVersionModal;
  }
  
  // Handle keyboard events for modal backdrop
  function handleBackdropKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
      toggleVersionModal();
      event.preventDefault();
    }
  }
  
  // This function just stops propagation without doing anything else
  function stopPropagation(event: Event) {
    event.stopPropagation();
  }
</script>

<header class="osrs-header">
  <div class="header-container">
    <div class="logo-section">
      <img src="{base}/icons/ui/Construction_icon.png" alt="Construction" class="skill-icon">
      <h1>OSRS House Planner</h1>
      
      <!-- Add version badge here -->
      <button 
        class="version-badge-container" 
        on:click={toggleVersionModal}
        aria-label="Show version information"
      >
        <VersionInfo compact={true} />
      </button>
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

  <!-- Version modal with accessibility fixes -->
  {#if showVersionModal}
    <!-- Fix: Remove tabindex from div and use proper aria attributes -->
    <div 
      class="modal-backdrop" 
      on:click={toggleVersionModal}
      on:keydown={handleBackdropKeydown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="version-dialog-title"
    >
      <!-- Fix: Add keyboard event handlers to match click handlers -->
      <div 
        class="modal-content" 
        on:click|stopPropagation={stopPropagation} 
        on:keydown|stopPropagation={stopPropagation}
      >
        <button class="close-button" on:click={toggleVersionModal} aria-label="Close">×</button>
        <h2 id="version-dialog-title" class="sr-only">Version Information</h2>
        <VersionInfo showHistory={true} />
      </div>
    </div>
  {/if}
</header>

<style lang="scss">
  .osrs-header {
    background-color: #483e33;
    /** background-image: url("/interface/header-bg.png"); /* This will be handled by Vite/SvelteKit */
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
      
      .version-badge-container {
        margin-left: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0;
        background: none;
        border: none;
        
        &:hover {
          opacity: 0.9;
        }
        
        &:focus {
          outline: 2px solid #ff981f;
          outline-offset: 2px;
          border-radius: 2px;
        }
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
  
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none; /* Remove outline when focused */
  }
  
  .modal-content {
    position: relative;
    background-color: #262626;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    border-radius: 4px;
    border: 2px solid #8f7654;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    padding: 20px;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    color: #ece5ce;
    cursor: pointer;
    
    &:hover {
      color: #ff981f;
    }
    
    &:focus {
      outline: none;
      color: #ff981f;
    }
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>