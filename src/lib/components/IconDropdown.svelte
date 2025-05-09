<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import { getFurnitureTypeByKey } from '$lib/models/FurnitureType';
  import type { HotspotOption } from '$lib/models/Hotspot';
  
  export let options: string[] | HotspotOption[] = [];
  export let selected: string = '';
  export let width: string = "200px"; // Add width parameter with default
  
  let isOpen = false;
  let dropdownElement: HTMLElement;
  
  // Positioning variables
  let dropdownHeight: number;
  let itemHeight = 28; // Approximate height of dropdown items
  let containerRect: DOMRect;
  let windowHeight: number;
  
  // Helper function to check option type
  function isObjectOption(opt: any): opt is HotspotOption {
    return typeof opt === 'object' && opt !== null;
  }
  
  // Process options to ensure they're in the right format
  $: processedOptions = Array.isArray(options) 
    ? options.map(opt => isObjectOption(opt) 
        ? opt 
        : { 
            id: opt, 
            name: getFurnitureTypeByKey(opt)?.name || opt 
          })
    : [];
  
  // Determine if dropdown should open upward based on available space
  $: openUpward = isOpen && containerRect && 
     (containerRect.bottom + dropdownHeight > windowHeight) && 
     (containerRect.top > dropdownHeight);
  
  // Get display option based on ID
  function getOptionById(id: string) {
    return processedOptions.find(opt => isObjectOption(opt) ? opt.id === id : opt === id);
  }
  
  // Close dropdown when clicking outside
  function handleClickOutside(event: MouseEvent) {
    if (isOpen && dropdownElement && !dropdownElement.contains(event.target as Node)) {
      isOpen = false;
    }
  }
  
  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    windowHeight = window.innerHeight;
    
    function updateDimensions() {
      if (dropdownElement) {
        containerRect = dropdownElement.getBoundingClientRect();
        // Calculate approx dropdown height based on number of options
        dropdownHeight = Math.min((processedOptions.length + 1) * itemHeight, 200);
      }
      windowHeight = window.innerHeight;
    }
    
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', updateDimensions);
    };
  });
  
  const dispatch = createEventDispatcher();
  
  function handleSelect(value: string) {
    selected = value;
    isOpen = false;
    dispatch('change', value);
  }
</script>

<div class="icon-dropdown" bind:this={dropdownElement} style:width={width}>
  <button 
    type="button"
    class="dropdown-toggle" 
    on:click|stopPropagation={() => isOpen = !isOpen}
  >
    <div class="dropdown-text">
      {#if selected && getOptionById(selected)}
        {@const option = getOptionById(selected)}
        {#if isObjectOption(option) && option.img}
          <img src={option.img} alt={option.name} class="option-icon" />
        {:else if isObjectOption(option) && option.icon}
          <i class={option.icon}></i>
        {/if}
        <span class="option-name">{isObjectOption(option) ? option.name : option}</span>
      {:else}
        None
      {/if}
    </div>
  </button>
  
  {#if isOpen}
    <div class="dropdown-menu" class:upward={openUpward}>
      <div 
        class="dropdown-item"
        on:click={() => handleSelect('')}
      >
        <span class="option-name">None</span>
      </div>
      
      {#each processedOptions as option}
        <div 
          class="dropdown-item" 
          class:selected={selected === (isObjectOption(option) ? option.id : option)}
          on:click={() => handleSelect(isObjectOption(option) ? option.id : option)}
        >
          {#if isObjectOption(option) && option.img}
            <img src={option.img} alt={option.name} class="option-icon" />
          {:else if isObjectOption(option) && option.icon}
            <i class={option.icon}></i>
          {/if}
          <span class="option-name">{isObjectOption(option) ? option.name : option}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .icon-dropdown {
    position: relative;
    width: 100%;
  }
  
  .dropdown-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    padding: 4px 8px;
    background-color: #2c241b;
    color: #ece5ce;
    border: 2px solid #8f7654;
  }
  
  .dropdown-text {
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
  }
  
  .option-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  i {
    margin-right: 8px;
    flex-shrink: 0;
  }
  
  .option-icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    object-fit: contain;
    flex-shrink: 0;
  }
  
  .dropdown-menu {
    position: absolute;
    z-index: 101;
    width: 100%;
    background-color: #2c241b;
    border: 2px solid #8f7654;
    max-height: 200px;
    overflow-y: auto;
    top: 100%;
    left: 0;
    
    &.upward {
      bottom: 100%;
      top: auto;
      border-bottom: none;
    }
    
    &:not(.upward) {
      border-top: none;
    }
  }
  
  .dropdown-item {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    cursor: pointer;
    color: #ece5ce;
    min-height: 28px;
    box-sizing: border-box;
    
    &:hover {
      background-color: #504336;
    }
    
    &.selected {
      background-color: #69543f;
    }
    
    i {
      margin-right: 8px;
    }
    
    .option-icon {
      width: 16px;
      height: 16px;
      margin-right: 8px;
      object-fit: contain;
    }
    
    .option-name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>