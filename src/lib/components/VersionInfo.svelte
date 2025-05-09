<script lang="ts">
    import { currentVersion, versionHistory } from '$lib/config/version';
    
    export let showHistory: boolean = false;
    export let compact: boolean = false;
  </script>
  
  {#if compact}
    <div class="version-badge" title="Click for update information">
      <span>v{currentVersion.version}</span>
    </div>
  {:else}
    <div class="version-info">
      <h3>OSRS House Planner v{currentVersion.version}</h3>
      <div class="release-date">Released: {currentVersion.releaseDate}</div>
      
      <div class="update-notes">
        {#each currentVersion.updateNotes as note}
          <div class="note">
            <h4>{note.title}</h4>
            <p>{note.description}</p>
            
            {#if note.features && note.features.length > 0}
              <ul class="features">
                {#each note.features as feature}
                  <li>{feature}</li>
                {/each}
              </ul>
            {/if}
          </div>
        {/each}
      </div>
      
      {#if showHistory && versionHistory.length > 0}
        <div class="version-history">
          <h3>Version History</h3>
          
          {#each versionHistory as version}
            <div class="historical-version">
              <h4>v{version.version} - {version.releaseDate}</h4>
              
              {#each version.updateNotes as note}
                <div class="note">
                  <h5>{note.title}</h5>
                  <p>{note.description}</p>
                  
                  {#if note.features && note.features.length > 0}
                    <ul class="features">
                      {#each note.features as feature}
                        <li>{feature}</li>
                      {/each}
                    </ul>
                  {/if}
                </div>
              {/each}
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {/if}
  
  <style lang="scss">
    .version-badge {
      display: inline-block;
      background-color: #3f0569;
      color: white;
      border-radius: 4px;
      padding: 2px 6px;
      font-size: 0.8em;
      cursor: pointer;
      
      &:hover {
        background-color: #5a0994;
      }
    }
    
    .version-info {
      padding: 15px;
      background-color: #262626;
      border: 2px solid #8f7654;
      border-radius: 4px;
      
      h3 {
        margin-top: 0;
        color: #ece5ce;
      }
      
      .release-date {
        color: #a89d85;
        font-style: italic;
        margin-bottom: 15px;
      }
      
      .note {
        margin-bottom: 15px;
        
        h4, h5 {
          margin: 10px 0 5px 0;
          color: #ece5ce;
        }
        
        p {
          margin: 5px 0;
        }
        
        .features {
          margin-top: 5px;
          padding-left: 20px;
          
          li {
            margin-bottom: 3px;
          }
        }
      }
      
      .version-history {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #8f7654;
        
        .historical-version {
          margin-bottom: 20px;
        }
      }
    }
  </style>