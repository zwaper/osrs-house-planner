<script lang="ts">
    import { base } from '$app/paths';
    
    export let src: string;
    export let alt: string = "";
    export let size: string = "16px";
    export let fallbackSrc: string = `${base}/icons/placeholder.png`;
    
    let imgError = false;
    
    // Handle paths that start with /
    $: imgSrc = !imgError 
      ? (src.startsWith('/') ? `${base}${src}` : src) 
      : fallbackSrc;
      
    function handleError() {
      console.warn(`Image failed to load: ${src}`);
      imgError = true;
    }
  </script>
  
  <img 
    src={imgSrc}
    {alt}
    on:error={handleError}
    style="width: {size}; height: {size}; object-fit: contain;"
    class="game-icon"
  />
  
  <style>
    .game-icon {
      display: inline-block;
      vertical-align: middle;
    }
  </style>